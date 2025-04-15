import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <> 
   <div className="flex gap-5 justify-center">
    <Link href="/products">SEE Products</Link>
    <Link href="/products/add">ADD Products</Link>
    </div>
   </>
  );
}
