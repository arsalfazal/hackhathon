import Image from "next/image"
import { Input } from "./ui/input"
import { ShoppingCartIcon } from "lucide-react"
import { Search } from 'lucide-react';
import { DropdownMenu } from "./ui/dropdown-menu";


export const Header = () => {
    return (
        <div className="flex justify-between ">
            <div>
            
                <Image src={'/Logo.webp'} alt="Logo" height={25} width={140} />
            </div>

            <div className="block lg:hidden md:hidden">
                <DropdownMenu/>

                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>

            <div className=" hidden md:hidden lg:block">
                <ul className="flex gap-x-10 font-medium">
                    <li>Female</li>
                    <li>Male</li>
                    <li>Kids</li>
                    <li>All Products</li>
                </ul>
            </div>

            <div className="relative w-1/3 hidden md:hidden lg:block">
                <Input className="h-6 w-[200] border-gray-300 rounded-md " />
                <Search className="w-4 h-4 absolute top-1 " />
            </div>

            <div className=" hidden md:hidden lg:block">
                <div className="h-9 w-9 rounded-full bg-gray-300 flex justify-center items-center">
                    <ShoppingCartIcon className="" />
                </div>
            </div>

        </div>
    )
}