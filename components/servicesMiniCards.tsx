import React from 'react';
import Image from 'next/image';

interface ServicesMiniCardProps {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
}

const ServicesMiniCard: React.FC<ServicesMiniCardProps> = ({ icon, title, description, buttonText, onButtonClick }) => {
    return (
        <div className="bg-[#6A908D] w-full text-white py-3 px-4 rounded-2xl shadow-xl shadow-black ">
            <div className="flex items-center mb-4">
                <Image alt='card icon' src={icon} width={50} height={50} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm mb-4">{description}</p>
            <button
                onClick={onButtonClick}
                className="bg-[#243642] text-white py-2 px-4 rounded-lg hover:bg-[#334d5e] transition-colors duration-300"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default ServicesMiniCard;