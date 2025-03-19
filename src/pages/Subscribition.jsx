import React from "react";
import Layout from "../layout/Default";

const Subscribition = () => {
  const requirements = [
    { id: 1, text: "Each profile is valid for a full year from the date of creation.", met: true },
    { id: 2, text: "The cost for a one-year subscription per profile is SAR 29.", met: true },
    {
      id: 3,
      text: "Promote your business profile with premium options.",
      met: false,
    },
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
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="basis-128 bg-gray-50 dark:bg-gray-800">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Subscription :
          </h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            {requirements.map((requirement) => (
              <li key={requirement.id} className="flex items-center">
                <svg
                  className={`w-3.5 h-3.5 me-2 ${
                    requirement.met
                      ? "text-green-500 dark:text-green-400"
                      : "text-gray-500 dark:text-gray-400"
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {requirement.text}
              </li>
            ))}
          </ul>
          <div className="flex justify-end ">

          <p class="text-xl text-gray-900 dark:text-white mt-5 bg-yellow-500 rounded p-2">Total Amount: SAR 29
          </p>

          </div>

        </div>
        <div class="basis-128 text-white bg-gray-800 hover:bg-gray-900 rounded p-4">
        <ul className="max-w-md space-y-1 text-white-500 list-inside dark:text-gray-400">
            {data.map((item) => (
              <li key={item.id} className="flex items-center">
            
                <p>{item.profile}
                    <br/>
                <span className="text-lg font-bold dark:text-white leading-4">{item.number}</span>
                </p>
              </li>
            ))}
          </ul>
          <h4 className="text-3xl font-medium text-yellow-500">You have no expired profiles at the moment.</h4>
        </div>
      </div>
    </Layout>
  );
};

export default Subscribition;
