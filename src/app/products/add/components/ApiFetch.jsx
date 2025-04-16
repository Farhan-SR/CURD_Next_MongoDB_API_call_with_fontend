import Product from "../../page";


export default async function ApiFetch() {
  const res = await fetch("http://localhost:3000/api/items")
  const data = await res.json();
  

    return <Product data={data}/> ;
}
