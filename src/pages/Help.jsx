import React from "react";
import Layout from "../layout/Default";
import TextField from "../components/common/input/TextField";
import Textarea from "../components/common/input/Textarea";
import Button from "../components/common/Button";

const Help = () => {
  return (
    <Layout pageHeading="Help Center">
      <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 min-h-screen">
        {/* Heading */}
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold dark:text-white text-center mb-4">
          Tell us what you need
        </h3>

        {/* Contact Us Label */}
        <label className="text-lg md:text-xl lg:text-2xl dark:text-white mb-4">
          Contact Us
        </label>

        {/* Form Container */}
        <div className="w-full max-w-xl bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          {/* Subject Field */}
          <div className="mb-6">
            <TextField
              placeholder="Subject"
              labelText="Subject"
              className="w-full"
            />
          </div>

          {/* Details Textarea */}
          <div className="mb-6">
            <Textarea
              name="formula"
              cols={20}
              rows={5}
              placeholder="Details..."
              labelText="Details"
              className="w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button className="w-full md:w-auto">Submit</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;