import React from "react";
import Layout from "../layout/Default";
import Dropdown from "../components/common/input/DropDown";
import { DateRangePicker } from "rsuite";
import Button from "../components/common/Button";
import ColumnChart from "../components/ColumnChart";

const Dashboard = () => {
  const data = [
    { id: 1, profile: "Used ProfiTle", number: "1438 of 1500" },
    { id: 2, profile: "Profile Visits", number: "1706" },
    { id: 3, profile: "New Leads", number: "5" },
  ];
  const datas = [
    { id: 1, profile: "Total Views", number: "2402" },
    { id: 2, profile: "Last 30 Days", number: "1686" },
    { id: 3, profile: "Top City", number: "Riydah" },
  ];
  const options = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  const handleSelect = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };

  return (
    <Layout pageHeading="Dashboard">
      {/* Responsive Grid for Data Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center h-24 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <svg
              className="w-3.5 h-3.5 mb-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <p className="text-lg text-gray-400 dark:text-gray-500 text-center">
              {item.profile}
            </p>
            <p className="text-black-400 dark:text-gray-500 text-center">
              {item.number}
            </p>
          </div>
        ))}
      </div>

      {/* Responsive Grid for Dropdown, DatePicker, and Button */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 bg-gray-50 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center">
          <Dropdown options={options} onSelect={handleSelect} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <DateRangePicker block />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button>Apply</Button>
        </div>
      </div>

      {/* Responsive Stats Section */}
      <div className="p-5 mt-3 h-60 w-full mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
        <div className="flex justify-between p-4">
          <h2>Stats</h2>
          <p>Last 30 Days</p>
        </div>
        <div className="flex items-center justify-center mt-2">
          <ColumnChart />
        </div>
      </div>

      {/* Responsive Grid for Additional Data Cards */}
      <div className="h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {datas.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center h-24 mt-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              <p className="text-lg text-gray-400 dark:text-gray-500 text-center">
                {item.profile}
              </p>
              <p className="text-black-400 dark:text-gray-500 text-center">
                {item.number}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <p>Google Maps</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;