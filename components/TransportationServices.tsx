import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const TransportationServices: React.FC = () => {
    const t = useTranslations('Services-2');

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

            {/* Containers Card */}
            <div className='shadow-lg shadow-black relative rounded-2xl max-h-[250px] overflow-hidden bg-black'>

                <div className='absolute bg-black-overlay w-full h-full' ></div>
                <Image className='aspect-video' src={'/container-1.jpg'} width={1000} height={1000} alt='Container Services Image' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 md:p-5'>
                    <h1 className='text-primary-foreground font-semibold text-2xl'>Container Services</h1>

                    <div className='px-2 text-gray-300 font-semibold flex flex-col gap-2'>
                        <p>  {t("container-s-1")}</p>
                        <p>  {t("container-s-2")}</p>
                        <p>  {t("container-s-3")}</p>
                        <p>  {t("container-s-4")}</p>
                    </div>

                </div>

            </div>

            {/* Ship Agency Card */}
            <div className='shadow-lg shadow-black relative rounded-2xl max-h-[250px] overflow-hidden bg-red-500'>

                <div className='absolute bg-black-overlay w-full h-full' ></div>
                <Image className='aspect-video' src={'/ship-agency.jpeg'} width={1000} height={1000} alt='Container Services Image' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 md:p-5'>
                    <h1 className='text-primary-foreground font-semibold text-2xl'>Ship Agency Services</h1>

                    <div className=''>
                        <div className='px-2 text-gray-300 font-semibold flex flex-col gap-2'>
                            <p>  {t("ship-s-1")}</p>
                            <p>  {t("ship-s-2")}</p>
                            <p>  {t("ship-s-3")}</p>
                            <p>  {t("ship-s-4")}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TransportationServices;