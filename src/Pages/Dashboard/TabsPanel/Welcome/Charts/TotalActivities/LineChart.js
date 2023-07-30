// import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 300,
        amt: 2290,
    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 9800,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 3908,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 4800,
        amt: 2500,
    },
    {
        name: 'Jul',
        uv: 3490,
        pv: 3800,
        amt: 2100,
    },
    {
        name: 'Aug',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Sep',
        uv: 3490,
        pv: 2400,
        amt: 2100,
    },
    {
        name: 'Oct',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Nov',
        uv: 3490,
        pv: 2400,
        amt: 1000,
    },
    {
        name: 'Dec',
        uv: 3490,
        pv: 1400,
        amt: 2100,
    },
  ];

const LineChart = () => {
    return (
        <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={330}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke="rgba(230, 230, 230, 1)" strokeLinecap='1 1' />
            <XAxis dataKey="name" stroke="rgba(0, 0, 0, 1)" />
            <YAxis dataKey="pv" stroke="rgba(0, 0, 0, 1)" />
            <Tooltip stroke="rgba(87, 254, 182, 2)" />
            <Area type="monotone" dataKey="pv" stroke="rgba(87, 254, 182, 1)" fill="rgba(87, 254, 182, 0.5)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
        // <div style={{ height: '320px', width: '100%' }}>
        //     <Chart
        //     ariaDesc="Average number of Total"
        //     ariaTitle="Line chart example"
        //     containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
        //     legendData={[{ name: 'Total' }, { name: 'Pipeline' }]}
        //     legendPosition="bottom"
        //     height={385}
        //     maxDomain={{y: 12}}
        //     minDomain={{y: 0}}
        //     padding={{
        //         bottom: 75, // Adjusted to accommodate legend
        //         left: 50,
        //         right: 50,
        //         top: 50
        //     }}
        //     themeColor={ChartThemeColor.green}
        //     width={1320}
        //     >
        //     <ChartAxis tickValues={[2, 4, 6, 8, 10, 12]} />
        //     <ChartAxis dependentAxis showGrid tickValues={[2, 4, 6, 8, 10, 12]} />
        //         <ChartGroup>
        //             <ChartLine
        //             data={[
        //                 { name: 'Total', x: 'Jan', y: 1 },
        //                 { name: 'Pipeline', x: 'Feb', y: 2 },
        //                 { name: 'Pipeline', x: 'Mar', y: 6 },
        //                 { name: 'Pipeline', x: 'Apr', y: 4 },
        //                 { name: 'Pipeline', x: 'May', y: 5 },
        //                 { name: 'Total', x: 'Jun', y: 6 },
        //                 { name: 'Pipeline', x: 'Jul', y: 7 },
        //                 { name: 'Total', x: 'Aug', y: 5 },
        //                 { name: 'Total', x: 'Sep', y: 9 },
        //                 { name: 'Total', x: 'Oct', y: 6 },
        //                 { name: 'Pipeline', x: 'Nov', y: 1 },
        //                 { name: 'Pipeline', x: 'Dec', y: 12 }
        //             ]}
        //             />
        //         </ChartGroup>
        //     </Chart>
        // </div>
    );
};

export default LineChart;