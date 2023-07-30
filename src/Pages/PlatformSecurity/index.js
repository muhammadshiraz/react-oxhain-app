import React, { useState } from "react";
import OxhainBanner from "../../Components/Banner/Banner01";
import Search01 from "../../Components/Search/Search01";
import Title01 from "../../Components/Title/Title01";
import AccountSecurityTab from "./ContentTabs/AccountSecurity";
import AssetSafetyTab from "./ContentTabs/AssetSafetyTab";
import ComplianceSecurityTab from "./ContentTabs/ComplianceSecurityTab";
import PlanningScheduleTab from "./ContentTabs/PlanningScheduleTab";
import PlatformSecurityTab from "./ContentTabs/PlatformSecurityTab";
import VulnerabilityPlanTab from "./ContentTabs/VulnerabilityPlanTab";
import { OxhainPlatformSecurity } from "./PlatformSecurity.styled";

const PlatformSecurity = () => {
    const [contentTabIndex, setContentTabIndex] = useState(0);

    function renderTabsContent() {
        if (contentTabIndex === 0) return <PlatformSecurityTab />;
        if (contentTabIndex === 1) return <AccountSecurityTab />;
        if (contentTabIndex === 2) return <AssetSafetyTab />;
        if (contentTabIndex === 3) return <ComplianceSecurityTab />;
        if (contentTabIndex === 4) return <VulnerabilityPlanTab />;
        if (contentTabIndex === 5) return <PlanningScheduleTab />;
    }

    return (
        <OxhainPlatformSecurity className="pt-16">
            <OxhainBanner
                className="h-[300px]"
                breadcrumblink01="/news"
                breadcrumb01="Service"
                breadcrumblink02="/support-center"
                breadcrumb02="Support Center"
                breadcrumblink03="/platform-security"
                breadcrumb03="Platform Security"
                title="Security"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

            <div className="content-tabs background65">
                <div className="container mx-auto px-2 overflow-x-auto">
                    <div className="flex flex-row items-center justify-between text-xs lg:text-base xl:text-lg w-[700px] md:w-auto">
                        <button onClick={() => setContentTabIndex(0)} className={`h-[80px] ${contentTabIndex === 0 ? 'active' : ''}`}>
                            <p className="">Platform Security</p>
                        </button>
                        <button onClick={() => setContentTabIndex(1)} className={`h-[80px] ${contentTabIndex === 1 ? 'active' : ''}`}>
                            <p className="">Account Security</p>
                        </button>
                        <button onClick={() => setContentTabIndex(2)} className={`h-[80px] ${contentTabIndex === 2 ? 'active' : ''}`}>
                            <p className="">Asset Safety</p>
                        </button>
                        <button onClick={() => setContentTabIndex(3)} className={`h-[80px] ${contentTabIndex === 3 ? 'active' : ''}`}>
                            <p className="">Compliance Security</p>
                        </button>
                        <button onClick={() => setContentTabIndex(4)} className={`h-[80px] ${contentTabIndex === 4 ? 'active' : ''}`}>
                            <p className="">Vulnerability Plan</p>
                        </button>
                        <button onClick={() => setContentTabIndex(5)} className={`h-[80px] ${contentTabIndex === 5 ? 'active' : ''}`}>
                            <p className="">Planning Schedule</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="pt-12">
                {renderTabsContent()}
            </div>
        </OxhainPlatformSecurity>
    );
};

export default PlatformSecurity;
