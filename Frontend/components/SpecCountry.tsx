import React from 'react';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import StarRating from './ui/StarRating'
import Image from 'next/image'
import Googles from '../assets/google.png'

const SpecCountry = () => {
    return (
        <div className="flex flex-col justify-start items-start gap-4 pt-20 px-20">
            <div>
                <h1 className='text-4xl font-bold text-[#072343]'>Visa From Dubai, UAE</h1>
                <p>Get complete assistance for your visa from Dubai.</p>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <ResizablePanelGroup
                    direction="horizontal"
                    className="max-w-2xl rounded-lg border h-[500px] overflow-hidden"
                >
                    <ResizablePanel>
                        <div className="w-full h-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                                alt="Nature"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </ResizablePanel>

                    <ResizableHandle />

                    <ResizablePanel defaultSize={35}>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={50}>
                                <div className="w-full h-full overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                                        alt="Mountains"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </ResizablePanel>

                            <ResizableHandle />

                            <ResizablePanel defaultSize={50}>
                                <div className="w-full h-full overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                                        alt="Beach"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>

                <div className="flex gap-2">
                    <h2 className="text-xl font-bold text-[#072343]">EXCELLENT</h2>
                    <StarRating value={5} />
                    <Image src={Googles} alt="Google logo" width={80} />
                </div>
            </div>
        </div>
    );
};

export default SpecCountry;
