import { getAuth } from "firebase/auth";
import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const auth = getAuth();
  const user = auth?.currentUser;
  const visa = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const appliedDate = form.appliedDate.value;
    const fee = form.fee.value;

    const newUser = {
      email,
      firstName,
      lastName,
      appliedDate,
      fee,
      image: image,
      countryName: countryName,
      visaType: visaType,
      processingTime: processingTime,
      validity: validity,
      applicationMethod: applicationMethod,
      name: firstName + " " + lastName,
    };
    fetch("https://visa-navigator-server-zeta.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    console.log("newUser", newUser);

    // Close the modal after submission
    document.getElementById("my_modal_5").close();
  };

  const {
    _id,
    image,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = visa;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <div className="text-center">
        <img
          src={image}
          alt={countryName}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-3xl font-bold mt-4">{countryName}</h2>
        <div className="text-right">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Apply for Visa
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="modal-action">
                <form onSubmit={handleSubmit}>
                  {/* Email field */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium mb-1"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded"
                      readOnly
                      value={user.email}
                    />
                  </div>

                  {/* First Name field */}
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="block text-lg font-medium mb-1"
                    >
                      First Name:
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  {/* Last Name field */}
                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="block text-lg font-medium mb-1"
                    >
                      Last Name:
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  {/* Applied Date field */}
                  <div className="mb-4">
                    <label
                      htmlFor="appliedDate"
                      className="block text-lg font-medium mb-1"
                    >
                      Applied Date:
                    </label>
                    <input
                      type="text"
                      id="appliedDate"
                      name="appliedDate"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>

                  {/* Fee field */}
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-1">
                      Visa Fee:
                    </label>
                    <input
                      type="text"
                      id="fee"
                      name="fee"
                      readOnly
                      value={fee}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <strong className="text-lg">Visa Type:</strong>{" "}
          <span>{visaType}</span>
        </div>
        <div>
          <strong className="text-lg">Processing Time:</strong>{" "}
          <span>{processingTime}</span>
        </div>
        <div>
          <strong className="text-lg">Required Documents:</strong>
          <ul className="list-disc list-inside ml-6">
            {requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong className="text-lg">Description:</strong>
          <p>{description}</p>
        </div>
        <div>
          <strong className="text-lg">Age Restriction:</strong>{" "}
          <span>{ageRestriction}</span>
        </div>
        <div>
          <strong className="text-lg">Fee:</strong> <span>${fee}</span>
        </div>
        <div>
          <strong className="text-lg">Validity:</strong> <span>{validity}</span>
        </div>
        <div>
          <strong className="text-lg">Application Method:</strong>
          <p>{applicationMethod}</p>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
