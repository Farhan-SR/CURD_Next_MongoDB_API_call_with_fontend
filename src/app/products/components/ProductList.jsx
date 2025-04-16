"use client";

import { useState } from "react";


export default function ProductList({ data }) {
  const [loaded_data, setloaded_data] = useState(data);

  const fetch_agin = async () => {
    const res = await fetch("http://localhost:3000/api/items", {
      cache: "no-store",
    });
    const data = await res.json();
    setloaded_data(data.data);
  }


  const handleDelete = async (id) => {
    console.log(id);

    const res = await fetch(`http://localhost:3000/api/items/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    console.log(result);


    if (result.deletedCount === 1) {
      await fetch_agin();
    }

  }
  return (
    <ul className="text-center mt-10 text-xl w-full font-light">
      {loaded_data.map((item,idx) => (
        <li className={`${idx % 2 === 0 ? "bg-#[2e2e2e]" : "bg-black"} `} key={item._id}>
          <p>{item.name} -- {item.age} -- {item.mobile} -- {item.address} <button onClick={() => handleDelete(item._id)} className="border bg-red-400 rounded-md p-2 m-2">Delete</button></p>

          <button  className="border bg-green-400 rounded-md p-1 m-1">Edit</button>
          
        </li>
      ))}
    </ul>
  );
}
