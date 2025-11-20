import React from "react";

const SendCode = () => {
  return (
    <div className="card-body mx-auto w-96">
      <h2 className="text-3xl font-bold">Enter Code</h2>
      <p>Enter 6 digit code that we sent in your email address</p>

      <fieldset className="fieldset">
        <div class="flex justify-between my-6">
          <input
            type="text"
            maxlength="1"
            class="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-[#caeb66]"
            value="6"
          />
          <input
            type="text"
            maxlength="1"
            class="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-[#caeb66]"
            value="6"
          />
          <input
            type="text"
            maxlength="1"
            class="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-[#caeb66]"
            value="6"
          />
          <input
            type="text"
            maxlength="1"
            class="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-[#caeb66]"
            value="6"
          />
          <input
            type="text"
            maxlength="1"
            class="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-[#caeb66]"
            value="6"
          />
          <input
            type="text"
            maxlength="1"
            class="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-[#caeb66]"
            value="6"
          />
        </div>

        <button className="btn bg-[#CAEB66] hover:bg-[#89a72c] mt-4">
          Verify Code
        </button>
      </fieldset>
    </div>
  );
};

export default SendCode;
