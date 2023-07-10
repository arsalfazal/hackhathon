import react from 'react'
import { Badge } from "@/components/ui/badge"
import lady from "/public/lady.webp"
import Image from "next/image"
const Hero = () => {
    return (
        <section className='flex flex-col gap-y-10 md:flex-row mt-20'>
{/*Left side text  */}
            <div className='flex-1 mt-8'>
                <Badge variant={'outline'} className="bg-blue-100 rounded text-blue-600 h-8 px-4 py-4 text-lg">Sale 70%</Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-5">
                An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
            </div>

{/* Right side pic */}
            <div className='flex-1 mt-8'>
            <Image src={lady } alt="lady" className="w-200 bg-pink-100 rounded-full" />
            </div>
        </section>


    )
}
export default Hero