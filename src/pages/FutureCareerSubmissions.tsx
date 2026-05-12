import { useEffect, useState } from "react";

interface CareerSubmission {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  motivation: string;
  resume_url: string;
  cover_letter_url?: string | null;
  created_at: string;
}

const FutureCareerSubmissions = () => {
  const [submissions, setSubmissions] = useState<CareerSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL_FUTURE}/careers`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error("Failed to fetch future job applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  if (loading) {
    return <p className="text-white">Loading future job applications...</p>;
  }

  if (submissions.length === 0) {
    return <p className="text-white">No submissions found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 text-white rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-700 text-left text-sm sm:text-base">
            <th className="p-3">Sl. No</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Motivation</th>
            <th className="p-3">Resume</th>
            <th className="p-3">Cover Letter</th>
            <th className="p-3">Applied On</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((sub, index) => (
            <tr key={sub.id} className="border-t border-gray-600 hover:bg-gray-700">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{sub.first_name} {sub.last_name}</td>
              <td className="p-3">{sub.email}</td>
              <td className="p-3 max-w-xs truncate">{sub.motivation}</td>
              <td className="p-3">
                <a
                  href={sub.resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View Resume
                </a>
              </td>
              <td className="p-3">
                {sub.cover_letter_url ? (
                  <a
                    href={sub.cover_letter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    View Cover
                  </a>
                ) : (
                  <span className="text-gray-400 italic">NA</span>
                )}
              </td>
              <td className="p-3">
                {new Date(sub.created_at).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FutureCareerSubmissions;
