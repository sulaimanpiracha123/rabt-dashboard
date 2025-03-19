import React from "react";
import Layout from "../layout/Default";
import QRCODE from "../assets/qrCode.png";

const EmailSign = () => {
  const users = [
    {
      id: 1,
      name: "Bonnie Green",
      email: "bonnie.green@example.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-3.jpg",
      position: "Software Engineer",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
      position: "Product Manager",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-1.jpg",
      position: "UX Designer",
    },
    {
      id: 4,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-4.jpg",
      position: "Data Scientist",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-5.jpg",
      position: "Marketing Specialist",
    },
  ];

  return (
    <Layout pageHeading="Email Signature">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="max-w-lg flex flex-col bg-white border border-gray-200 border-t-4 border-t-blue-600 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70"
          >
            <div className="p-4 md:p-5">
              <div className="flex flex-row justify-between p-4 bg-white border border-gray-200 border-t-4 border-t-blue-600 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                <div className="flex flex-col">
                  <img
                    className="rounded-full w-20 h-20"
                    // src={user.imageUrl}
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"

                    alt={`${user.name}'s profile`}
                  />
                  <label className="inline-flex items-center cursor-pointer mt-5">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex flex-col text-nowrap mr-5">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.position}</p>
                  <p className="text-sm text-gray-500 text-nowrap">
                    {user.phone}
                  </p>
                </div>
                <div className="w-24">
                  <img src={QRCODE} alt="QR Code" />
                  <p className="text-nowrap text-sm">Lets Connect</p>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  className="text-blue-700 hover:text-white text-center border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  Save Email Signature
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default EmailSign;