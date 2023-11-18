import React from "react";

const ApplicationForm = () => {
  return (
    <div>
      <form action="">
        <form action="#" method="POST">
          {/* <!-- Personal Information --> */}
          <div class="mb-4">
            <label
              for="full_name"
              class="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* <!-- Date of Birth --> */}
          <div class="mb-4">
            <label for="dob" class="block text-sm font-medium text-gray-600">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* <!-- Contact Information --> */}
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {/* Mobile Number */}
          <div class="mb-4">
            <label for="number" class="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="number"
              id="number"
              name="number"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* <!-- Membership Type --> */}
          <div class="mb-4">
            <label
              for="membership_type"
              class="block text-sm font-medium text-gray-600"
            >
              Membership Type
            </label>
            <select
              id="membership_type"
              name="membership_type"
              class="mt-1 p-2 w-full border rounded-md"
            >
              <option value="regular">Regular</option>
              <option value="associate">Associate</option>
              {/* <!-- Add more options as needed --> */}
            </select>
          </div>

          {/* <!-- Emergency Contact --> */}
          <div class="mb-4">
            <label
              for="emergency_contact"
              class="block text-sm font-medium text-gray-600"
            >
              Emergency Contact
            </label>
            <input
              type="text"
              id="emergency_contact"
              name="emergency_contact"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* <!-- Membership Fee Payment Details --> */}
          <div class="mb-4">
            <label
              for="fee_payment"
              class="block text-sm font-medium text-gray-600"
            >
              Membership Fee Payment Details
            </label>
            <input
              type="text"
              id="fee_payment"
              name="fee_payment"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* <!-- Volunteer Interest --> */}
          <div class="mb-4">
            <label
              for="volunteer_interest"
              class="block text-sm font-medium text-gray-600"
            >
              Areas of Interest for Volunteering
            </label>
            <textarea
              id="volunteer_interest"
              name="volunteer_interest"
              rows="3"
              class="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>

          {/* <!-- Declaration and Consent --> */}
          <div class="mb-4">
            <label
              for="consent"
              class="block text-sm font-medium text-gray-600"
            >
              Consent to Membership Terms and Conditions
            </label>
            <input type="checkbox" id="consent" name="consent" class="ml-2" />
          </div>

          {/* <!-- Submit Button --> */}
          <div class="mt-6">
            <button
              type="submit"
              class="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Submit Application 
            </button>
          </div>
        </form>
        {/* <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type you full name here"
            className="input input-bordered w-full max-w-xs"
          />
          
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type you name here"
            className="input input-bordered w-full max-w-xs"
          />
          
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type you name here"
            className="input input-bordered w-full max-w-xs"
          />
          
        </div> */}
      </form>
    </div>
  );
};

export default ApplicationForm;
