

export default async function Product() {
    const res = await fetch("http://localhost:3000/api/items")
    const data = await res.json();

    return (
        <ul className="text-center mt-10 text-2xl font-light ">{
            data.data.map((item) => (
                <li key={item._id}>
                    <p>{item.name} --  {item.age}  -- {item.mobile} -- {item.address}  </p>
                    <button className="border bg-red-400 rounded-md p-2 m-2">Delete</button>
                </li>
            ))
        }

        </ul>
    )
}


