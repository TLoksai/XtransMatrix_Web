import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

const ContactSubmissions = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(() => {
    return Number(localStorage.getItem("contactCurrentPage")) || 1;
  });
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteName, setDeleteName] = useState<string>("");
  const [expandedMessageId, setExpandedMessageId] = useState<string | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem("contactCurrentPage", currentPage.toString());
  }, [currentPage]);

  const fetchContacts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${API_URL}/submissions`, {
        headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
      });

      if (!response.data || !Array.isArray(response.data)) {
        setError(" Invalid data format received.");
        setContacts([]);
      } else {
        setContacts(response.data);
      }
    } catch (error: any) {
      setError(` Failed to fetch data: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await axios.delete(`${API_URL}/delete/${deleteId}`, {
        headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
      });

      setContacts((prev) => prev.filter((contact) => contact.id !== deleteId));
      alert(` Successfully deleted ${deleteName}`);
    } catch (error: any) {
      setError(` Failed to delete: ${error.response?.data?.message || error.message}`);
    } finally {
      setShowConfirm(false);
      setDeleteId(null);
    }
  };

  const handleDownloadExcel = () => {
    window.open(`${API_URL}/contacts-excel?token=${encodeURIComponent(AUTH_TOKEN)}`, "_blank");
  };

  const toggleMessageExpansion = (id: string) => {
    setExpandedMessageId(expandedMessageId === id ? null : id);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contacts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(contacts.length / itemsPerPage);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg relative w-full max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
        <h2 className="text-xl md:text-2xl font-bold text-white">📧 Contact Submissions</h2>
        <button
          onClick={handleDownloadExcel}
          className="px-3 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-500 text-sm"
        >
          📥 Download Contacts Sheet
        </button>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <p className="text-gray-900 text-lg font-semibold">
              Are you sure you want to delete <strong className="text-red-600">{deleteName}</strong>?
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 w-full mx-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 w-full mx-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <p className="text-center text-white text-lg">⏳ Loading...</p>
      ) : error ? (
        <p className="text-red-400 text-center">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse border border-gray-700 bg-gray-800 text-white text-sm">
            <thead>
              <tr className="bg-gray-700 text-white text-xs">
                <th className="border border-gray-600 px-2 py-2">Sl. No</th>
                <th className="border border-gray-600 px-2 py-2">👤 Name</th>
                <th className="border border-gray-600 px-2 py-2">📧 Email</th>
                <th className="border border-gray-600 px-2 py-2">💬 Message</th>
                <th className="border border-gray-600 px-2 py-2">🗑 Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((contact, index) => (
                <>
                  <tr key={contact.id} className="bg-gray-800 hover:bg-gray-700">
                    <td className="border border-gray-600 px-2 py-2 text-center">{indexOfFirstItem + index + 1}</td>
                    <td className="border border-gray-600 px-2 py-2">{contact.name}</td>
                    <td className="border border-gray-600 px-2 py-2">{contact.email}</td>
                    <td 
                      className="border border-gray-600 px-2 py-2 cursor-pointer"
                      onClick={() => toggleMessageExpansion(contact.id)}
                    >
                      <div className="truncate max-w-xs">
                        {contact.message}
                        {contact.message.length > 50 && (
                          <span className="text-blue-400 text-xs ml-1">
                            {expandedMessageId === contact.id ? ' (show less)' : ' (read more)'}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="border border-gray-600 px-2 py-2 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowConfirm(true);
                          setDeleteId(contact.id);
                          setDeleteName(contact.name);
                        }}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500"
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                  {expandedMessageId === contact.id && (
                    <tr className="bg-gray-750">
                      <td colSpan={5} className="border border-gray-600 px-4 py-3">
                        <div className="whitespace-pre-wrap break-words">
                          <strong>Full Message:</strong> {contact.message}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400 disabled:bg-gray-600"
        >
          ⬅️ Previous
        </button>
        <span className="px-4 py-2 text-white font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage >= totalPages}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400 disabled:bg-gray-600"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default ContactSubmissions;