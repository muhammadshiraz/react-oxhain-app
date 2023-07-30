import React from "react";
import { OxhainBgBanner, OverlayBg, Title, Content } from "./BgBanner.styled";

export default function BgBanner({title, content, aboutusbg}) {
    return (
        <OxhainBgBanner
            className="flex items-center"
            style={{
                backgroundImage: `url(${aboutusbg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
            }}
        >
            <OverlayBg className='flex flex-col relative h-full justify-center'>
                <Title className='uppercase font-prompt flex flex-row justify-center items-center mb-2 mx-auto'>{title}</Title>
                <Content className='capitalize font-prompt mt-2'>{content}</Content>
            </OverlayBg>
        </OxhainBgBanner>
    );
}
