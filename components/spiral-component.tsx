import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"

export default function OtherServices() {
    return (
        <div className="bg-transparent mt-10 py-8 flex items-center justify-center px-2">
            <div className="flex flex-col items-start gap-10 sm:p-8 w-full">
                <h1 className="text-2xl font-semibold text-start text-foreground">Other <br /> Services</h1>
                <div className="h-[420px] flex items-center justify-start w-full px-4 sm:px-7">
                    <div className="w-auto  z-10">
                        <Separator className="bg-primary h-[420px] w-[3px] rounded-full border-t border-opacity- border-primary-light shadow-[0_0_4px] dark:shadow-[0_0_8px] dark:shadow-primary shadow-primary"
                            orientation="vertical" />

                    </div>
                    <div className="h-full w-full  text-base flex flex-col justify-around font-semibold dark:font-normal dark:text-white text-primary/80 -ml-[2px]">
                        <div className="flex gap-5 items-center ">
                            <div className="w-auto sm:w-full h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_4px] dark:shadow-[0_0_8px] dark:shadow-primary shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_8px] shadow-primary bg-primary "></div>
                            </div>
                            <p className="w-full">International Trading</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="w-auto sm:w-5/6 h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_4px] dark:shadow-[0_0_8px] dark:shadow-primary shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_8px] shadow-primary bg-primary "></div>
                            </div>
                            <p className="w-full">Ship Management</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="w-auto sm:w-4/6 h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_4px] dark:shadow-[0_0_8px] dark:shadow-primary shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_8px] shadow-primary bg-primary "></div>
                            </div>
                            <p className="w-full">Docking and Maintenance</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="w-auto sm:w-3/6 h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_4px] dark:shadow-[0_0_8px] dark:shadow-primary shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_8px] shadow-primary bg-primary "></div>
                            </div>
                            <p className="w-full">Buy/Sell Containers and Vessels</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="w-auto sm:w-2/6 h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_4px] dark:shadow-[0_0_8px] dark:shadow-primary shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_8px] shadow-primary bg-primary "></div>
                            </div>
                            <p className="w-full">Container Handling, Stevedoring and Storage</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="w-auto sm:w-1/6 h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_4px] dark:shadow-[0_0_8px] dark:shadow-primary shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_8px] shadow-primary bg-primary "></div>
                            </div>
                            <p className="w-full">Handling, Stevedoring and Storage</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="w-auto sm:w-[40px] h-full flex relative items-center p-0">
                                <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_4px] dark:shadow-[0_0_8px] dark:shadow-primary shadow-primary" />
                                <div className="w-2 h-2 absolute -right-1 rounded-full shadow-[0_0_8px] shadow-primary bg-primary "></div>
                            </div>
                            <p className="w-full">Customs Clearance</p>
                        </div>

                    </div>
                </div>
                <div className="pl-[2px] sm:pl-[14px]">
                    <Button className=" rounded-full overflow-hidden w-8 h-8 shadow-[0_0_8px] dark:shadow-primary p-0 hover:bg-white hover:text-primary">
                        <Link className="items-center flex justify-center w-full h-full" href="/learn-more/other" >
                            <ChevronRight />
                        </Link>
                    </Button>
                </div>




            </div>
            <div className="flex w-full max-w-[350px] mt-20">

                <Image src={'/boxes.png'} alt="Container with open doors" className=" objectr-cove " width={1000} height={1000} />

            </div>

        </div >
    )
}