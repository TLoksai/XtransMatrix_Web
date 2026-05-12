import { useEffect, useState } from "react";
import axios from "axios";

interface CareerSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  current_ctc: string;
  expected_ctc: string;
  applicant_location: string;
  applied_at?: string;
}

const CareerSubmissions = () => {
  const [submissions, setSubmissions] = useState<CareerSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const recordsPerPage = 10;

  const getStoredPage = () => {
    const storedPage = localStorage.getItem("careerCurrentPage");
    return storedPage ? parseInt(storedPage, 10) : 1;
  };

  const [currentPage, setCurrentPage] = useState(getStoredPage());

  useEffect(() => {
    const fetchSubmissions = async () => {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token"); 

      try {
        const response = await axios.get(`${import.meta.env.VITE_CAREER_RESUMES_URL}`, {
          headers: {
            Authorization: `Bearer ${token}`,  
          },
        });

        if (Array.isArray(response.data)) {
          setSubmissions(response.data);
        } else {
          setError("Invalid API response.");
        }
      } catch (error) {
        setError("Failed to fetch career submissions. Please check authentication.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  useEffect(() => {
    localStorage.setItem("careerCurrentPage", currentPage.toString());
  }, [currentPage]);

  const handleDownload = async (resumeId: string, userName: string) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${import.meta.env.VITE_CAREER_BACKEND_URL}/download/${resumeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,  
          },
          responseType: "blob",
        }
      );

      if (!response.data) {
        alert("No data received from server.");
        return;
      }

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `resume_${userName}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Failed to download resume. You may need to re-login.");
    }
  };

  const handleDownloadExcel = () => {
    const token = localStorage.getItem("token"); 
    window.open(`${import.meta.env.VITE_CAREER_BACKEND_URL}/career/excel?token=${token}`, "_blank");
  };

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = submissions.slice(firstIndex, lastIndex);
  const totalPages = Math.max(1, Math.ceil(submissions.length / recordsPerPage));

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="p-2 sm:p-4 text-white w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-2xl font-semibold">📄 Career Submissions</h2>
        <button
          onClick={handleDownloadExcel}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm sm:text-base"
        >
          📥 Download Applications Sheet
        </button>
      </div>

      {loading ? (
        <p className="text-center">⏳ Loading...</p>
      ) : error ? (
        <p className="text-red-400 text-center">{error}</p>
      ) : submissions.length === 0 ? (
        <p className="text-center">No submissions found.</p>
      ) : (
        <>
          <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse border border-gray-700 text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Sl. No</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Name</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Phone</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Email</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Role</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Current CTC</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Expected CTC</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Location</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Resume Action</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Applied Date</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((submission, index) => (
                  <tr key={submission.id} className="bg-gray-800 hover:bg-gray-700">
                    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center">
                      {firstIndex + index + 1}
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2">
                      {submission.name}
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2">
                      {submission.phone}
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2">{submission.email}</td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2">{submission.role}</td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center">
                      {submission.current_ctc}
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center">
                      {submission.expected_ctc}
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2">
                      {submission.applicant_location}
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2">
                      <div className="flex flex-col sm:flex-row sm:gap-2 items-center">
                        <button
                          onClick={() => handleDownload(submission.id, submission.name)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-2 sm:px-4 py-1 rounded text-xs sm:text-sm w-full sm:w-auto"
                        >
                          Download
                        </button>
                      </div>
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center">
                      {submission.applied_at ? new Date(submission.applied_at).toLocaleDateString() : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md font-semibold ${currentPage === 1 ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-yellow-500 text-white hover:bg-yellow-400"}`}
            >
              ⬅️ Previous
            </button>
            <span className="px-4 py-2 text-white font-semibold">Page {currentPage} of {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md font-semibold ${currentPage === totalPages ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-yellow-500 text-white hover:bg-yellow-400"}`}
            >
              Next ➡️
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default CareerSubmissions;