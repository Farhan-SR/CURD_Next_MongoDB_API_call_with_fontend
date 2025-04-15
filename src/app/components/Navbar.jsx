import Link from "next/link"
export default function Navbar() {
  return (
    <div className="flex gap-5 justify-center">
    <Link href="/products">SEE Products</Link>
    <Link href="/users">ADD Products</Link>
    </div>
  )
}
