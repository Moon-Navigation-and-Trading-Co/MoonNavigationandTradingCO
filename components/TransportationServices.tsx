import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const TransportationServices: React.FC = () => {
    const t = useTranslations('Services-2');

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20'>

            {/* Containers Card */}
            <div className='shadow-lg shadow-black relative rounded-2xl max-h-[250px] overflow-hidden bg-black'>

                <div className='absolute bg-black-overlay w-full h-full' ></div>
                <Image className='aspect-video' src={'/container-1.jpg'} width={1000} height={1000} alt='Container Services Image' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-3 md:p-5'>
                    <h1 className='text-primary-foreground font-semibold text-2xl'>Container Services</h1>

                    <div className='flex justify-between'>
                        <div className='px-2 text-gray-300 font-normal md:font-semibold flex flex-col gap-2'>
                            <p>  {t("container-s-1")}</p>
                            <p>  {t("container-s-2")}</p>
                            <p>  {t("container-s-3")}</p>
                            <p>  {t("container-s-4")}</p>
                        </div>
                        <div className='flex flex-col items-end justify-end'>
                            <Button variant={"outline"}>
                                <Link href="/container-services-forms">
                                    Get Quote
                                </Link>
                            </Button>
                            <button className='justify-center flex items-center text-white hover:text-primary w-full text-xs font-normal pt-1'>
                                <Link href="/learn-more/container">
                                    Learn More
                                </Link>
                                <ChevronRight width={15} height={15} />
                            </button>
                        </div>
                    </div>


                </div>

            </div>

            {/* Ship Agency Card */}
            <div className='shadow-lg shadow-black relative rounded-2xl max-h-[250px] overflow-hidden bg-black'>

                <div className='absolute bg-black-overlay w-full h-full' ></div>
                <Image className='aspect-video' src={'/ship-agency.jpeg'} width={1000} height={1000} alt='Container Services Image' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-3 md:p-5'>
                    <h1 className='text-primary-foreground font-semibold text-2xl'>Ship Agency Services</h1>


                    <div className='flex justify-between'>
                        <div className='px-2 text-gray-300 font-semibold flex flex-col gap-2'>
                            <p>  {t("ship-s-1")}</p>
                            <p>  {t("ship-s-2")}</p>
                            <p>  {t("ship-s-3")}</p>
                            <p>  {t("ship-s-4")}</p>
                        </div>
                        <div className='flex flex-col items-end justify-end'>
                            <Button variant={"outline"}>
                                <Link href="/ship-agency-forms">
                                    Get Quote
                                </Link>
                            </Button>
                            <button className='justify-center flex items-center text-white hover:text-primary w-full text-xs font-normal pt-1'>
                                <Link href="/learn-more/ship-agency">
                                    Learn More
                                </Link>
                                <ChevronRight width={15} height={15} />
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default TransportationServices;