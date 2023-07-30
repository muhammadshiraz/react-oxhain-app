import React from "react";
import Blockchain from '../../../../../../Assets/Images/Dashboard/TabsPanel/Welcome/blockchain.png';
import { ChartDonut } from '@patternfly/react-charts';
import {
    DashBoxText,
    DashBoxParagraph,
} from '../../../../Dashboard.styled';

const DoughnutChart01 = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <DashBoxText className="font-prompt font-medium text-base text-left">Lorem Ipsum</DashBoxText>
            <div
                className="bg-no-repeat md:bg-[length:120px_120px] lg:bg-[length:120px_120px] xl:bg-[length:120px_120px] 2xl:bg-auto bg-center"
                style={{
                    backgroundImage: `url(${Blockchain})`,
                    height: '100%',
                    width: '100%'
                }}
            >
                <ChartDonut
                    colorScale={[
                        
                        "rgba(255, 207, 45, 1)",
                        "hsla(0, 0%, 0%, 0.1)",
                    ]}
                    ariaDesc="Total"
                    ariaTitle="Donut utilization chart example"
                    constrainToVisibleArea
                    data={[
                        { 
                            x: 'Total', 
                            y: 95
                        },
                        { 
                            x: 'Total', 
                            y: 15
                        }
                    ]}
                    width={225}
                    height={225}
                    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                    thresholds={[{ value: 60 }, { value: 90 }]} 
                />
            </div>
            <DashBoxParagraph className='font-prompt font-semibold text-5xl'>%95</DashBoxParagraph>
            <DashBoxParagraph className='font-prompt font-light text-xs w-max'>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</DashBoxParagraph>
        </div>
    );
};

export default DoughnutChart01;