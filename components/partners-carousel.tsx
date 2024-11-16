'use client'

import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

// In a real-world scenario, replace these with actual partner logo URLs
const partnerLogos = Array(20).fill(null).map((_, index) => `/placeholder.svg?height=100&width=200&text=Partner${index + 1}`)
const partnerLogos1 = [
    "/logos/petrojet.png",
    "/logos/satorp.png",
    "/logos/potash.png",
    "/logos/bavaria.png",
    "/logos/elsewedy.png",
    "/logos/arish.png",
    "/logos/westerngeco.png",
    "/logos/jordansteel.png",
    "/logos/ncmp.png",
    "/logos/safa.png",
    "/logos/dolphin.png",
    "/logos/sinaiwhite.png",
    "/logos/alamia.png",
    "/logos/suezcement.png",
    "/logos/bavariatrade.png",
    "/logos/royalcement.png",
    "/logos/mohsenbros.png",
    "/logos/basateen.png",
    "/logos/egyfrench.png",
    "/logos/fert.png",
    "/logos/wataniafoods.png",
    "/logos/manhary.png",
    "/logos/azaan.png"

]

export default function PartnerLogoCarousel() {
    return (
        <div className='flex flex-col gap-10'>
            <div className='w-full '>
                <h1 className='w-full text-center px-3 text-3xl font-bold'>Our Partners</h1>

            </div>
            <Carousel
                opts={{
                    align: 'center',
                    loop: true,

                }}
                // plugins={[
                //     Autoplay({
                //         delay: 2000,
                //     }),
                // ]}
                className="w-full relative h-full max-w-5xl py-10 px-1 gap-0"
            >
                <CarouselContent className='basis-[150px] '>
                    {partnerLogos1.map((logo, index) => (
                        <CarouselItem key={index} className="basis-[full]  max-w-[200px] min-w-[100px]">
                            <div className="rounded-xl pointer-events-none overflow-hidden">
                                <Image
                                    src={logo}
                                    alt={`Partner logo ${index + 1}`}
                                    width={200}
                                    height={100}
                                    className="object-contain rounded-xl pointer-events-none w-full h-[100px]"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <div className='absolute right-0 bottom-0'> */}
                <div className='w-full flex justify-end gap-1 absolute  left-0 top-[100%]'>
                    <CarouselPrevious className='static border-0' />
                    <CarouselNext className='static border-0' />
                </div>
                {/* </div> */}
            </Carousel>
        </div>

    )
}