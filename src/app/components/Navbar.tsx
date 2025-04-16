import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex gap-5 justify-center font-bold text-xl bg-slate-400" >
    <Link href="/">Home</Link>
    <Link href="/products">SEE Products</Link>
    <Link href="/products/add">ADD Products</Link>
    
    </div>
  )
}


