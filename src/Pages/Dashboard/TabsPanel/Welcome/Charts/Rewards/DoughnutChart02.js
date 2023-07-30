import React from "react";
import NFT from '../../../../../../Assets/Images/Dashboard/TabsPanel/Welcome/nft.png';
import { ChartDonut } from '@patternfly/react-charts';
import {
    DashBoxText,
    DashBoxParagraph,
} from '../../../../Dashboard.styled';

const DoughnutChart02 = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <DashBoxText className="font-prompt font-medium text-base text-left">Lorem Ipsum</DashBoxText>
            <div
                className="bg-no-repeat md:bg-[length:120px_120px] lg:bg-[length:120px_120px] xl:bg-[length:120px_120px] 2xl:bg-auto bg-center"
                style={{
                    backgroundImage: `url(${NFT})`,
                    height: '100%',
                    width: '100%'
                }}
            >
                <ChartDonut
                    colorScale={[
                        "hsla(284, 93%, 68%, 1)",
                        "hsla(0, 0%, 0%, 0.1)",
                    ]}
                    ariaDesc="Total"
                    ariaTitle="Donut utilization chart example"
                    constrainToVisibleArea
                    data={[
                        { 
                            x: 'Total', 
                            y: 80
                        },
                        { 
                            x: 'Total', 
                            y: 20
                        }
                    ]}
                    width={225}
                    height={225}
                    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                    thresholds={[{ value: 60 }, { value: 90 }]}
                />
            </div>
            <DashBoxParagraph className='font-prompt font-semibold text-5xl'>%75</DashBoxParagraph>
            <DashBoxParagraph className='font-prompt font-light text-xs w-max'>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</DashBoxParagraph>
        </div>
    );
};

export default DoughnutChart02;