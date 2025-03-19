import React from "react";
import Layout from "../layout/Default";

const Subscribition = () => {
  const requirements = [
    { id: 1, text: "Each profile is valid for a full year from the date of creation.", met: true },
    { id: 2, text: "The cost for a one-year subscription per profile is SAR 29.", met: true },
    { id: 3, text: "Promote your business profile with premium options.", met: false },
    { id: 4, text: "Update and manage your business profile information from mobile app and dashboard", met: true },
  ];

  const data = [
    { id: 1, profile: "Total Profiles", number: "1500" },
    { id: 2, profile: "Consumed Profile", number: "1438" },
    { id: 3, profile: "Available Profile", number: "62" },
    { id: 4, profile: "Expired Profile", number: "0" },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4">
        {/* Subscription Section */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Subscription :
          </h2>
          <ul className="space-y-3 text-gray-500 list-inside dark:text-gray-400">
            {requirements.map((requirement) => (
              <li key={requirement.id} className="flex items-start">
                <svg
                  className={`w-4 h-4 mt-1 me-2 flex-shrink-0 ${
                    requirement.met
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-sm md:text-base">{requirement.text}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-6">
            <p className="text-lg md:text-xl text-gray-900 dark:text-white bg-yellow-500 rounded-lg px-4 py-2">
              Total Amount: SAR 29
            </p>
          </div>
        </div>

        {/* Data Section */}
        <div className="bg-gray-800 hover:bg-gray-900 rounded-lg p-6 shadow-md">
          <ul className="space-y-4 text-white list-inside">
            {data.map((item) => (
              <li key={item.id} className="flex items-center">
                <p className="text-sm md:text-base">
                  {item.profile}
                  <br />
                  <span className="text-lg md:text-xl font-bold text-yellow-500">
                    {item.number}
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 text-lg md:text-2xl font-medium text-yellow-500">
            You have no expired profiles at the moment.
          </h4>
        </div>
      </div>
    </Layout>
  );
};

export default Subscribition;