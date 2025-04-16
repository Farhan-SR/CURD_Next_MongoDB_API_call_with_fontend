"use client";

import { useRouter } from "next/navigation";

export default function Productaddform() {
    const router = useRouter();
  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const mobile = form.mobile.value;
    const address = form.address.value;

    const payload = { name, age: parseInt(age), mobile, address };

    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await res.json();
    console.log(result);
    form.reset();
    // alert(" added successfully");
    router.push('/products')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder='Name' required />
        <input name="age" type="number" placeholder='Age' required />
        <input name="mobile" type="text" placeholder='Mobile' required />
        <input name="address" type="text" placeholder='Address' required />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

