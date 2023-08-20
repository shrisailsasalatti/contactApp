import React, { useState } from "react";
import "./style.css";

interface ContactData {
  id: number;
  firstName: string;
  lastName: string;
}

const Contact = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [contact, setContact] = useState<ContactData[]>([]);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [createContact, setCreateContact] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("Active"); // Added state for status

  const handleChange = (e) => {
    if (e.target.name === "first-name") {
      setFirstName(e.target.value);
    }
    if (e.target.name === "last-name") {
      setLastName(e.target.value);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (editMode && editIndex !== null) {
      setContact((prevContacts) => {
        const updatedContacts = [...prevContacts];
        updatedContacts[editIndex] = {
          ...updatedContacts[editIndex],
          firstName,
          lastName,
          status, // Update status
        };
        return updatedContacts;
      });

      setEditMode(false);
      setEditIndex(null);
      setStatus("Active"); // Clear the status after save
    } else {
      const newContact: ContactData = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        status,
      };

      setContact((prevContacts) => [...prevContacts, newContact]);

      setFirstName("");
      setLastName("");
      setStatus("Active");
      setSave(true);
    }
  };

  const handleEdit = (index: number) => {
    setEditMode(true);
    setEditIndex(index);

    setFirstName(contact[index].firstName);
    setLastName(contact[index].lastName);
    setStatus(contact[index].status); // Set the status for editing
  };

  const handleDelete = (id: number) => {
    setContact((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-create mb-5">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => setCreateContact(true)}
          >
            Create Contact
          </button>
          <div className="">
            <div className=" text-xl md:text-2xl lg:text-3xl font-bold md-4">
              No Contact Found
            </div>
          </div>
        </div>

        {createContact && (
          <form className="border rounded mt-5 p-5 form">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create Contact
            </h2>

            <div className="  gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    value={firstName}
                    onChange={handleChange}
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    value={lastName}
                    onChange={handleChange}
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Status
                </legend>

                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Active" // Set the value for "Active"
                      checked={status === "Active"} // Check if it's "Active"
                      onChange={(e) => setStatus(e.target.value)} // Update status
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Active
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Inactive" // Set the value for "Inactive"
                      checked={status === "Inactive"} // Check if it's "Inactive"
                      onChange={(e) => setStatus(e.target.value)} // Update status
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Inactive
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleClick}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Users */}
      </div>
      {save && (
        <div className="  table  mt-5 mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto dark:text-gray-200 hover:dark:text-slate-50 dark:bg-slate-700 ">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="border-b border-gray-200">
                  <th
                    scope="col"
                    className="px-5 py-3 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 bg-white text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    User
                  </th>
                </tr>
              </thead>
              <tbody>
                {contact.map((ele: ContactData, index: number) => (
                  <tr key={ele.id}>
                    <td className="px-5 py-5 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                      <div className="flex items-center dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                        <div className="flex-shrink-0 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                          {/* You can add an image here */}
                        </div>
                        <div className="ml-3 flex flex-wrap">
                          <div className="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600 mr-2">
                            {ele.firstName}
                          </div>
                          <div className="text-gray-900 whitespace-no-wrap dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                            {ele.lastName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 border-b border-gray-200 dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                      <p
                        className={`text-gray-900 flex items-center justify-center rounded-md p-1 ${
                          ele.status === "Active"
                            ? "text-green-900 bg-green-200"
                            : "text-red-900 bg-red-200"
                        } hover:dark:text-slate-50 dark:bg-gray-600`}
                      >
                        {ele.status}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:bg-gray-700 bg-white text-sm dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-indigo-400 hover:text-indigo-900"
                      >
                        {editMode && editIndex === index ? "Save" : "Edit"}
                      </button>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:bg-gray-700 bg-white text-sm dark:text-gray-200 hover:dark:text-slate-50 dark:bg-gray-600">
                      <button
                        onClick={() => handleDelete(ele.id)}
                        className="text-indigo-400 hover:text-indigo-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
