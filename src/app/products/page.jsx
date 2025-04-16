
import ProductList from "./components/ProductList";

export default async function Product() {

    const res = await fetch("http://localhost:3000/api/items", {
        cache: "no-store"
    });
    const data = await res.json();
    return <ProductList data={data.data} />;

}


