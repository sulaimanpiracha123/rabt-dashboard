import React, { useState } from "react";
import Layout from "../layout/Default";
import Button from "../components/common/Button";
import SearchField from "../components/common/SearchField";
import FlexiableModal from "../components/modals/FlexiableModal";
import classNames from "classnames";
import AddUser from "../components/modals/AddUser";

const Profile = () => {
  const [inputValue, setInputValue] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Country:", country);
    console.log("Entered Number:", number);
  };

  const handleAddModal = () => {
    setIsShowModal((prev) => !prev);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const users = [
    {
      id: 1,
      name: "Bonnie Green",
      arabicName: "نائب الرئيس للعمليات",
      email: "ali@gmail.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-3.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      arabicName: "نائب الرئيس للعمليات",

      email: "ali@gmail.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      arabicName: "نائب الرئيس للعمليات",

      email: "ali@gmail.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      arabicName: "نائب الرئيس للعمليات",

      email: "ali@gmail.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 5,
      name: "John Doe",
      arabicName: "نائب الرئيس للعمليات",

      email: "ali@gmail.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 6,
      name: "John Doe",
      arabicName: "نائب الرئيس للعمليات",

      email: "ali@gmail.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
    },
    {
      id: 7,
      name: "John Doe",
      arabicName: "نائب الرئيس للعمليات",

      email: "ali@gmail.com",
      phone: "+123-456-789",
      imageUrl: "/docs/images/people/profile-picture-2.jpg",
    },
    // Add more users as needed
  ];

  return (
    <Layout pageHeading="My Profiles">
      {/* Search and Stats Section */}
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="p-4">
          <SearchField
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full md:w-75 mb-4"
          />
          <p>You typed: {inputValue}</p>
        </div>
        <div className="inline-flex gap-4 p-4">
          <p>62 Available</p>
          <p>1438 Consumed</p>
        </div>
      </div>

      {/* User Cards Section */}
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Add New Profile Card */}
          <div className="w-full h-88 p-4 max-w-sm bg-green-400 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <br />
              <div className="mt-5">
                <button
                  className="w-24 h-24 mb-3 rounded-full bg-green-300 shadow-lg"
                  type="button"
                  onClick={handleAddModal}
                >
                  <span className="float-center text-5xl text-white">+</span>
                </button>
              </div>
              <div>
                <h5 className="text-xl font-bold text-white text-center">
                  Create New <br /> Profile
                </h5>
              </div>
              <div>
                <p className="text-white">1438 of 1500</p>
              </div>
            </div>
          </div>

          {/* User Profile Cards */}
          {users.map((user) => (
            <UserProfileCard key={user.id} user={user} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isShowModal && <AddUser setIsShowModal={setIsShowModal} />}
    </Layout>
  );
};

export default Profile;

const UserProfileCard = ({ user }) => {
  return (
    <div className="w-full h-88 max-w-sm border border-gray-200 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between px-4 pt-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />

        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt={`${user.name} image`}
        />
        <h6 className="text-lg font-semibold dark:text-white">{user.name}</h6>
        <p className="text-xs text-gray-900 dark:text-white">{user.arabicName}</p>
        <p className="text-sm text-gray-900 dark:text-white">{user.email}</p>
        <p className="text-base text-gray-900 dark:text-white">{user.phone}</p>
      </div>
      <div className="flex justify-between p-2">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
          View Card
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
          Lock Edit
        </span>
      </div>
    </div>
  );
};