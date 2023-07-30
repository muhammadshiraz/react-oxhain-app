import React from "react";
import Coin from '../../../../../../Assets/Images/Dashboard/TabsPanel/Welcome/coin.png';
import { ChartDonut } from '@patternfly/react-charts';
import {
    DashBoxText,
    DashBoxParagraph,
} from '../../../../Dashboard.styled';

const DoughnutChart01 = () => {
    return (
        <div className="flex flex-col items-center">
            <DashBoxText className="font-prompt font-medium text-base text-left">Lorem Ipsum</DashBoxText>
            <div
                className="bg-no-repeat bg-auto bg-center"
                style={{
                    backgroundImage: `url(${Coin})`,
                    height: '100%',
                    width: '100%'
                }}
            >
                <ChartDonut
                    colorScale={[
                        "hsla(6, 85%, 61%, 1)",
                        "hsla(0, 0%, 0%, 0.1)",
                    ]}
                    ariaDesc="Total"
                    ariaTitle="Donut utilization chart example"
                    constrainToVisibleArea
                    data={[
                        { 
                            x: 'Total', 
                            y: 20
                        },
                        { 
                            x: 'Total', 
                            y: 80
                        }
                    ]}
                    width={225}
                    height={225}
                    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                    thresholds={[{ value: 60 }, { value: 90 }]}
                />
            </div>
            <DashBoxParagraph className='font-prompt font-semibold text-5xl'>%25</DashBoxParagraph>
            <DashBoxParagraph className='font-prompt font-light text-xs w-max'>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</DashBoxParagraph>
        </div>
    );
};

export default DoughnutChart01;