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
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

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
      <div className="flex justify-between p-4">
        <div className="p-4">
          <SearchField
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={handleInputChange}
            className="w-75 mb-4"
          />
          <p>You typed: {inputValue}</p>
        </div>
        <div className="inline-flex gap-4">
          <p>62 Available</p>
          <p> 1438 Consumed </p>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-64 h-88 p-4 max-w-sm bg-green-400 border border-gray-200 rounded-lg shadow-sm bg-green-400 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
              <br />
              <div className="mt-5">
                <button
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  className="w-24 h-24 mb-3 rounded-full bg-green-300 shadow-lg "
                  type="button"
                  onClick={handleAddModal}
                >
                  <span className="float-center   text-5xl text-white ">+</span>
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

          {users.map((user) => (
            <UserProfileCard key={user.id} user={user} />
          ))}
        </div>
      </div>
      {isShowModal && <AddUser setIsShowModal={setIsShowModal} />}
    </Layout>
  );
};

export default Profile;

const UserProfileCard = ({ user }) => {
  return (
    <div className="w-64 h-88 max-w-sm  border border-gray-200 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between px-4 pt-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
        {/* Dropdown menu */}
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          // src={user.imageUrl}
          // alt={`${user.name} image`}
        />
        <h6 className="text-lg font-semibold dark:text-white">{user.name}</h6>
        <p class="text-xs text-gray-900 dark:text-white">{user.arabicName}</p>
        <p class="text-sm text-gray-900 dark:text-white">{user.email}</p>
        <p class="text-base text-gray-900 dark:text-white">{user.phone}</p>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.role}
        </span>
      </div>
      <div className="flex justify-between p-2">
        <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="w-2.5 h-2.5 me-1.5"
          >
            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
          </svg>
          View Card
        </span>
        <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-2.5 h-2.5 me-1.5"
          >
            <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
          </svg>
          Lock Edit
        </span>
      </div>
    </div>
  );
};
