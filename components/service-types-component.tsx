import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function ServicesComponent({ services }: { services: { title: string; description: string; image: string; link: string }[] }) {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto mt-16 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Freight Services</h1>
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div key={index} className="bg-background rounded-lg shadow-lg shadow-gray-900 overflow-hidden">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={600}
                                        height={400}
                                        className="h-48 w-full object-cover md:h-full md:w-[250px]"
                                    />
                                </div>
                                <div className="p-8">
                                    <h2 className="text-2xl font-semibold text-primary mb-4">{service.title}</h2>
                                    <p className="mt-2 text-muted-foreground leading-relaxed">{service.description}</p>
                                    <div className="mt-6">
                                        <Link href={service.link}>
                                            <Button className="bg-primary hover:bg-[#275e63] text-white font-semibold py-2 px-4 rounded">
                                                Get Quote
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
