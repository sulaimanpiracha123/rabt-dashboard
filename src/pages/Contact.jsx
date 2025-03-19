import React from "react";
import Layout from "../layout/Default";
import SearchField from "../components/common/SearchField";
import Button from "../components/common/Button";
import Dropdown from "../components/common/input/DropDown";

const Contact = () => {
  const options = ["10", "25", "50", "100"];
  const users = [
    {
      id: 1,
      name: "Bonnie Green",
      email: "ali@gmail.com",
      phone: "+123-456-789",
      company: "CodeEpics",
      dateTime: "11/02/2025",
      imageUrl: "/docs/images/people/profile-picture-3.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      email: "ali@gmail.com",
      phone: "+123-456-789",
      company: "CodeEpics",
      dateTime: "11/02/2025",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      email: "ali@gmail.com",
      phone: "+123-456-789",
      company: "CodeEpics",
      dateTime: "11/02/2025",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      email: "ali@gmail.com",
      phone: "+123-456-789",
      company: "CodeEpics",
      dateTime: "11/02/2025",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 5,
      name: "John Doe",
      email: "ali@gmail.com",
      phone: "+123-456-789",
      company: "CodeEpics",
      dateTime: "11/02/2025",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
    },
    // Add more users as needed
  ];

  return (
    <Layout pageHeading="Contacts">
      <div className="flex p-4 justify-between">
        <SearchField placeholder="Search" />
        <Button>Download Leads</Button>
      </div>
      <div className="p-4">
        <Dropdown options={options} className="w-5" />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone No
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Date & Time
              </th>
              <th scope="col" className="px-6 py-3">
                Shared With
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.company}</td>
                <td className="px-6 py-4">{item.dateTime}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      // src={item.imageUrl}
                      alt={item.name}
                    />
                    <div className="ps-3">
                      <p className="text-base font-semibold">{item.name}</p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Contact;