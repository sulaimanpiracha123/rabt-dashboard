import React, { useState } from "react";
import Layout from "../layout/Default";
import Button from "../components/common/Button";

const Theme = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];
  const [txtselectedColor, settxtSelectedColor] = useState(null);
  const txtcolors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          // Check dimensions
          if (img.width === 1100 && img.height === 700) {
            setImage(file);
            setPreviewImage(event.target.result);
            setError("");
          } else {
            setError(
              "Image dimensions must be 1100px (width) x 700px (height)."
            );
            setImage(null);
            setPreviewImage(null);
          }
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout pageHeading="Theme">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Left Section - Image Upload and Color Picker */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-35 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 1100x700px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </label>
          </div>

          {/* Icon Colors */}
          <p className="text-sm font-medium mt-4">Icon Colors</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-8 h-8 cursor-pointer border-2 ${
                  selectedColor === color
                    ? "border-black"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
          {selectedColor && (
            <p className="mt-4">
              Selected Color:{" "}
              <span style={{ color: selectedColor }}>{selectedColor}</span>
            </p>
          )}

          {/* Text Colors */}
          <p className="text-sm font-medium mt-4">Text Colors</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {txtcolors.map((color, index) => (
              <div
                key={index}
                className={`w-8 h-8 cursor-pointer border-2 ${
                  txtselectedColor === color
                    ? "border-black"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => settxtSelectedColor(color)}
              ></div>
            ))}
          </div>
          {txtselectedColor && (
            <p className="mt-4">
              Selected Color:{" "}
              <span style={{ color: txtselectedColor }}>
                {txtselectedColor}
              </span>
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Button className="w-full md:w-auto">Save Changes</Button>
            <Button className="w-full md:w-auto">Reset Changes</Button>
          </div>
        </div>

        {/* Right Section - Preview */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg text-gray-900">
            {previewImage && (
              <div className="rounded-t-lg h-48 overflow-hidden">
                <img
                  className="object-cover object-top w-full h-full"
                  src={previewImage}
                  alt="Uploaded"
                />
              </div>
            )}

            <div className="mx-auto w-24 h-24 relative -mt-12 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Profile"
              />
            </div>
            <div className="text-center mt-2" style={{ color: txtselectedColor }}>
              <h6 className="text-lg font-bold dark:text-white">Heading 6</h6>
              <p className="text-sm">Position</p>
              <p className="text-sm">email@xyz.com</p>
              <p className="text-sm">+966541115116</p>
            </div>
            <div
              className="flex flex-wrap justify-center gap-4 mt-4"
              style={{ color: selectedColor }}
            >
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-200 rounded-xl p-2">
                  <svg
                    className="w-8 h-8"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className="flex flex-col p-4 gap-4 mt-4">
              <button
                className="w-full md:w-1/2 mx-auto rounded bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
                style={{ backgroundColor: selectedColor }}
              >
                Save Contacts
              </button>
              <button
                type="button"
                className="w-full md:w-1/2 mx-auto text-red-700 hover:text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                style={{
                  outlineColor: selectedColor,
                  border: `2px solid ${selectedColor}`,
                }}
              >
                Exchange Contacts
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Theme;