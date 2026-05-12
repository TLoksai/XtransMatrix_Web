import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://testing-xtmx.onrender.com";

interface Location {
  city: string;
  state: string;
  country: string;
}

interface Job {
  id: string;
  role: string;
  description: string;
  location: Location;
}

const JobPortal: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [newJob, setNewJob] = useState({ role: "", description: "", location: { city: "", state: "", country: "" } });
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/jobs`);
      setJobs(response.data);
    } catch (err) {
      setError(" Failed to fetch job listings.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    setError("");

    try {
      if (editingJob) {
        await axios.put(`${API_BASE_URL}/jobsput/${editingJob.id}`, newJob);
        setMessage(" Job updated successfully!");
      } else {
        await axios.post(`${API_BASE_URL}/jobsend`, newJob);
        setMessage(" Job added successfully!");
      }

      setNewJob({ role: "", description: "", location: { city: "", state: "", country: "" } });
      setEditingJob(null);
      fetchJobs();
    } catch (err) {
      setError(" Failed to save job. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    setMessage("");
    setError("");

    try {
      await axios.delete(`${API_BASE_URL}/jobsdelete/${id}`);
      setMessage(" Job deleted successfully!");
      fetchJobs();
    } catch (err) {
      setError(" Failed to delete job.");
    }
  };

  const handleEdit = (job: Job) => {
    setEditingJob(job);
    setNewJob({
      role: job.role,
      description: job.description,
      location: { ...job.location },
    });
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Job Portal</h1>

      {message && <p className="text-green-600 text-center mb-2">{message}</p>}
      {error && <p className="text-red-500 text-center mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="mb-4 space-y-4 bg-white p-4 shadow-md rounded-md">
        <div>
          <label className="block font-medium">Role</label>
          <input
            type="text"
            placeholder="Enter Job Role"
            value={newJob.role}
            onChange={(e) => setNewJob({ ...newJob, role: e.target.value })}
            className="border p-2 w-full text-black rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium">City</label>
          <input
            type="text"
            placeholder="Enter City"
            value={newJob.location.city}
            onChange={(e) => setNewJob({ ...newJob, location: { ...newJob.location, city: e.target.value } })}
            className="border p-2 w-full text-black rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium">State</label>
          <input
            type="text"
            placeholder="Enter State"
            value={newJob.location.state}
            onChange={(e) => setNewJob({ ...newJob, location: { ...newJob.location, state: e.target.value } })}
            className="border p-2 w-full text-black rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Country</label>
          <input
            type="text"
            placeholder="Enter Country"
            value={newJob.location.country}
            onChange={(e) => setNewJob({ ...newJob, location: { ...newJob.location, country: e.target.value } })}
            className="border p-2 w-full text-black rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            placeholder="Enter Job Description"
            value={newJob.description}
            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
            className="border p-2 w-full h-24 text-black rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-md">
          {submitting ? "Submitting..." : editingJob ? "Update Job" : "Add Job"}
        </button>
      </form>

      {loading ? (
        <p className="text-center">Loading jobs...</p>
      ) : (
        <ul className="space-y-2">
          {jobs.map((job) => (
            <li key={job.id} className="border p-4 rounded-md shadow-md bg-white">
              <p className="text-lg font-semibold text-black">{job.role} - {job.location.city}, {job.location.state}, {job.location.country}</p>
              <p className="text-black">{job.description}</p>
              <div className="mt-2">
                <button
                  onClick={() => handleEdit(job)}
                  className="bg-yellow-500 text-white p-1 mr-2 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="bg-red-500 text-white p-1 rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobPortal;
