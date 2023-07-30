import React from 'react';
import Title01 from '../../../../Components/Title/Title01';

const PlanningScheduleTab = () => {
    return (
        <div className='container pb-32'>
            <Title01 className="block text-center mb-3">Planning Schedule</Title01>
            <p className='!font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tempus sed dictum at.</p>

            <div className='compliance-security-tab-table flex flex-col py-12 px-6 lg:px-12 mt-16 mr-3'>
                {/* No header - Content data */}
                <div className="flex flex-col lg:flex-row items-center">
                    <div className='w-72 h-44 bg-gray-300 lg:mr-12'></div>

                    <div className='flex flex-col flex-1 text-center lg:text-left mt-6 lg:mt-0'>
                        <span className='text-xl mb-3 !font-normal'>Blockchain Asset Tracking Platform</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus proin arcu duis ullamcorper sit etiam id.
                            Vitae tellus bibendum velit diam eget nisi. Dui sapien quis consectetur vitae. Sit quis diam aliquet viverra.
                            Non, at tortor commodo eu. Felis in enim sed massa proin facilisis. Pellentesque viverra eget amet habitasse
                            malesuada nec id in. Ultricies massa vel sodales sit scelerisque ut nunc, bibendum. At tristique sapien vulputate at.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanningScheduleTab;