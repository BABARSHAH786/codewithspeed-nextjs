'use client';
import React from 'react';
const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', type: 'Full-time' },
  { id: 2, title: 'Backend Developer', company: 'Innovate Ltd', location: 'New York, NY', type: 'Part-time' },
  { id: 3, title: 'UI/UX Designer', company: 'Design Studio', location: 'San Francisco, CA', type: 'Contract' },
  { id: 4, title: 'DevOps Engineer', company: 'Cloud Solutions', location: 'Remote', type: 'Full-time' }
];

const JobBoard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-600 text-white flex justify-center items-center p-4">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg text-gray-900">
        <h1 className="text-3xl font-bold text-center mb-6">Job Listings</h1>
        {jobs.map((job) => (
          <div key={job.id} className="p-4 mb-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-700">{job.company} - {job.location}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded">{job.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobBoard;
