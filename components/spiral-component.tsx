import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"

export default function SpiralLogo() {
    return (
        <div className="bg-transparent mt-10 py-8 flex items-center justify-center px-2">
            <div className="flex flex-col items-start gap-4 sm:p-8 w-full">
                <h1 className="text-2xl font-semibold text-start text-foreground">Other <br /> Services</h1>
                <div className="h-96 flex items-center justify-start w-full  py-4 px-4 sm:px-12">
                    <div className="w-auto  z-10">
                        <Separator className="bg-primary h-96 w-[3px] rounded-full border-t border-opacity- border-primary-light shadow-[0_0_10px] shadow-primary"
                            orientation="vertical" />

                    </div>
                    <div className="h-full w-full  text-base flex flex-col justify-around font-semibold -ml-[2px]">
                        <div className="flex gap-3 items-center">
                            <div className="w-full h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_10px] shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_10px] shadow-black bg-teal-700 "></div>
                            </div>
                            <p className="w-full">Ship Agency and Management</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="w-3/4 h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_10px] shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_10px] shadow-black bg-teal-700 "></div>
                            </div>
                            <p className="w-full">International Trading</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="w-2/4 h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_10px] shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_10px] shadow-black bg-teal-700 "></div>
                            </div>
                            <p className="w-full">Docking and Maintenance</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="w-1/4 h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_10px] shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_10px] shadow-black bg-teal-700 "></div>
                            </div>
                            <p className="w-full">Containers and Vessels</p>
                        </div>

                    </div>
                </div>
                <div className="pl-[2px] sm:pl-[36px]">
                    <Button className=" rounded-full overflow-hidden w-8 h-8 shadow-[0_0_10px] dark:shadow-primary p-0 hover:bg-white hover:text-primary">
                        <Link className="items-center flex justify-center w-full h-full" href="/other" >
                            <ChevronRight />
                        </Link>
                    </Button>
                </div>




            </div>
            <div className="w-full max-w-[500px] mt-20">

                <Image src={'/boxes.png'} alt="Container with open doors" className=" objectr-cove " width={1000} height={1000} />

            </div>

        </div >
    )
}