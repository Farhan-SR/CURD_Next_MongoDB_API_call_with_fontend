"use client";

import { useState } from "react";

export default function ProductList({ data }) {
  const [loaded_data, setloaded_data] = useState(data);

  const [editId, setEditId] = useState(null); // 🔵 Added: Track which item is being edited
  const [formData, setFormData] = useState({   // 🔵 Added: Track form values
    name: "",
    age: "",
    mobile: "",
    address: "",
  });

  const fetch_agin = async () => {
    const res = await fetch("http://localhost:3000/api/items", {
      cache: "no-store",
    });
    const data = await res.json();
    setloaded_data(data.data);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/items/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.deletedCount === 1) {
      await fetch_agin();
    }
  };

  // 🔵 Added: When user clicks "Edit"
  const handleEditClick = (item) => {
    setEditId(item._id);
    setFormData(item); // Pre-fill form with existing data
  };

  // 🔵 Added: Update form data as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔵 Added: Save updated data
  const handleEditSave = async () => {
    const res = await fetch(`http://localhost:3000/api/items/${editId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (result.updated || result.modifiedCount === 1) {
      setEditId(null);
      setFormData({ name: "", age: "", mobile: "", address: "" });
      fetch_agin();
    }
  };

  return (
    <ul className="text-center mt-10 text-xl w-full font-light">
      {loaded_data.map((item, idx) => (
        <li
          className={`${idx % 2 === 0 ? "bg-[#2e2e2e]" : "bg-black"} text-white p-4`}
          key={item._id}
        >
          {editId === item._id ? ( // 🔵 Added: If this item is being edited
            <div className="space-y-1">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="text-black px-1"
              />
              <input
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="text-black px-1"
              />
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="text-black px-1"
              />
              <input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="text-black px-1"
              />
              <div className="mt-1">
                <button onClick={handleEditSave} className="bg-green-500 px-2 py-1 m-1 rounded">
                  Save
                </button>
                <button onClick={() => setEditId(null)} className="bg-gray-400 px-2 py-1 m-1 rounded">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <p>
                {item.name} -- {item.age} -- {item.mobile} -- {item.address}
              </p>
              <button onClick={() => handleDelete(item._id)} className="bg-red-400 px-2 py-1 m-1 rounded">
                Delete
              </button>
              <button onClick={() => handleEditClick(item)} className="bg-green-400 px-2 py-1 m-1 rounded">
                Edit
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
