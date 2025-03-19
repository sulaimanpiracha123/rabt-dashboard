import React from "react";
import Layout from "../layout/Default";
import TextField from "../components/common/input/TextField";
import Textarea from "../components/common/input/Textarea";
import Button from "../components/common/Button";

const Help = () => {
  return (
    <Layout pageHeading="Help Center">
      <div className="grid auto-cols-max grid-flow-col justify-center bg-gray-50 dark:bg-gray-800">
        <h3 class="text-3xl font-bold dark:text-white">
          Tell us what you need
        </h3>
        <label class="text-lg mb-2 dark:text-white">Contact US</label>
        <TextField placeholder="Subject" labelText="Subject" />

        <Textarea
              name="formula"
              cols={20}
              rows={5}
              placeholder="Details..."
              labelText="Details"
            />
            <div className="flex justify-end mt-2">
                <Button>Submit</Button>

            </div>
      </div>
    </Layout>
  );
};

export default Help;
            //   onChange={handleFormData}
