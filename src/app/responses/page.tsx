

"use client"
import { useEffect, useState } from 'react';
import { Typography } from '../components/atoms/Typography';
import moment from 'moment';

interface ResponseData {
  id: number;
  name: string;
  email: string;
  contactNumber: string;
  message: string;
  createdAt: string;
}

const ResponsesTablePage = () => {
  const [responses, setResponses] = useState<ResponseData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const res = await fetch('/api/contact');
        const data: ResponseData[] = await res.json();
        setResponses(data);
      } catch (error) {
        console.error('Failed to fetch responses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResponses();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="mb-8">
          <Typography 
            variant="heading"
            className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-[#383961] 
                       text-transparent bg-clip-text mb-2"
          >
            Contact Form Responses
          </Typography>
          <Typography
            variant="body"
            className="text-gray-600"
          >
            View and manage all contact form submissions
          </Typography>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        ) : responses.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Typography
              variant="body"
              className="text-gray-600"
            >
              No responses yet.
            </Typography>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-indigo-600 to-[#383961]">
                  <tr>
                    <th className="px-6 py-4">
                      <Typography variant="body" className="text-white font-medium text-left">
                        Name
                      </Typography>
                    </th>
                    <th className="px-6 py-4">
                      <Typography variant="body" className="text-white font-medium text-left">
                        Email
                      </Typography>
                    </th>
                    <th className="px-6 py-4">
                      <Typography variant="body" className="text-white font-medium text-left">
                        Contact Number
                      </Typography>
                    </th>
                    <th className="px-6 py-4">
                      <Typography variant="body" className="text-white font-medium text-left">
                        Message
                      </Typography>
                    </th>
                    <th className="px-6 py-4">
                      <Typography variant="body" className="text-white font-medium text-left">
                        Date
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {responses.map((response) => (
                    <tr 
                      key={response.id} 
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <Typography variant="body" className="text-gray-800">
                          {response.name}
                        </Typography>
                      </td>
                      <td className="px-6 py-4">
                        <Typography variant="body" className="text-gray-800">
                          {response.email}
                        </Typography>
                      </td>
                      <td className="px-6 py-4">
                        <Typography variant="body" className="text-gray-800">
                          {response.contactNumber}
                        </Typography>
                      </td>
                      <td className="px-6 py-4">
                        <Typography variant="body" className="text-gray-800">
                          {response.message}
                        </Typography>
                      </td>
                      <td className="px-6 py-4">
                        <Typography variant="body" className="text-gray-800">
                          {moment(response.createdAt).format("MMM Do YY")}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsesTablePage;