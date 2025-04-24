import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/nexus-logo.png" alt="Nexus Solutions Logo" width={50} height={50} className="h-12 w-auto" />
    </Link>
  )
}
