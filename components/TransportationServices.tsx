import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const TransportationServices: React.FC = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

            {/* Containers Card */}
            <div className='shadow-lg shadow-black relative rounded-2xl max-h-[250px] overflow-hidden bg-black'>

                <div className='absolute bg-black-overlay w-full h-full' ></div>
                <Image className='aspect-video' src={'/cargoAir.png'} width={1000} height={1000} alt='Container Services Image' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 md:p-5'>
                    <h1 className='text-primary-foreground font-semibold text-2xl'>Container Services</h1>

                    <div className='text-gray-300'>
                        <li>hi</li>
                        <li>hi</li>
                        <li>hi</li>
                        <li>hi</li>
                    </div>

                </div>

            </div>

            {/* Ship Agency Card */}
            <div className='shadow-lg shadow-black relative rounded-2xl max-h-[250px] overflow-hidden bg-red-500'>

                <div className='absolute bg-black-overlay w-full h-full' ></div>
                <Image className='aspect-video' src={'/cargoAir.png'} width={1000} height={1000} alt='Container Services Image' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 md:p-5'>
                    <h1 className='text-primary-foreground font-semibold text-2xl'>Ship Agency Services</h1>

                    <div className='text-gray-300'>
                        <li>hi</li>
                        <li>hi</li>
                        <li>hi</li>
                        <li>hi</li>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default TransportationServices;