import Link from "next/link"
import logo from "/public/logo.webp"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Search } from 'lucide-react';
import lady from "/public/lady.webp"
const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <Image src={logo} alt="logo" className="w-40" />
           
            <div className="block lg:hidden md:hidden">

                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>

            <div className=" hidden md:hidden lg:block">
                <ul className="flex gap-x-10 text-lg">
                    <li >
                        <Link href={"/"}>Female</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Male</Link>

                    </li>
                    <li>
                        <Link href={"/"}>Kids</Link>

                    </li>
                    <li>
                        <Link href={"/"}>All Products</Link>

                    </li>
                </ul>
            </div>
            <div className="relative w-1/3 hidden md:hidden lg:block">
                <Input className="h-6 w-[200] border-gray-300 rounded-md " />
                <Search className="w-4 h-4 absolute top-1 " />
            </div>

            <div className=" hidden md:hidden lg:block">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
                    <ShoppingCart className="h-6 w-6" />
                </div>
            </div>
        </div>
    )
}

export default Header