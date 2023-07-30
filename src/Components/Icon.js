import React, { useEffect } from "react";

// Light
import { ReactComponent as LightRightArrow } from "./../Assets/Icons/CryoptoEductaion/Light/right-arrow.svg";
import { ReactComponent as LightOrderBook } from "./../Assets/Icons/Trade/Light/order-book.svg";
import { ReactComponent as LightBuyOrder } from "./../Assets/Icons/Trade/Light/buy-order.svg";
import { ReactComponent as LightSellOrder } from "./../Assets/Icons/Trade/Light/sell-order.svg";
import { ReactComponent as LightPlayVideo } from "./../Assets/Icons/Trade/Light/play-video.svg";
import { ReactComponent as LightVerticalThreeDot } from "./../Assets/Icons/Trade/Light/vertical-three-dot.svg";
import { ReactComponent as LightDownArrow } from "./../Assets/Icons/Select/Light/down-arrow.svg";
import { ReactComponent as LightSettings } from "./../Assets/Icons/TradeStickyFooter/Light/settings.svg";
import { ReactComponent as LightDownload } from "./../Assets/Icons/TradeStickyFooter/Light/download.svg";
import { ReactComponent as LightNotification } from "./../Assets/Icons/TradeStickyFooter/Light/notification.svg";
import { ReactComponent as LightStats } from "./../Assets/Icons/TradeStickyFooter/Light/stats.svg";
import { ReactComponent as LightSupport } from "./../Assets/Icons/TradeStickyFooter/Light/support.svg";

// Dark
import { ReactComponent as DarkRightArrow } from "./../Assets/Icons/CryoptoEductaion/Dark/right-arrow.svg";
import { ReactComponent as DarkOrderBook } from "./../Assets/Icons/Trade/Dark/order-book.svg";
import { ReactComponent as DarkBuyOrder } from "./../Assets/Icons/Trade/Dark/buy-order.svg";
import { ReactComponent as DarkSellOrder } from "./../Assets/Icons/Trade/Dark/sell-order.svg";
import { ReactComponent as DarkPlayVideo } from "./../Assets/Icons/Trade/Dark/play-video.svg";
import { ReactComponent as DarkVerticalThreeDot } from "./../Assets/Icons/Trade/Dark/vertical-three-dot.svg";
import { ReactComponent as DarkDownArrow } from "./../Assets/Icons/Select/Dark/down-arrow.svg";
import { ReactComponent as DarkSettings } from "./../Assets/Icons/TradeStickyFooter/Dark/settings.svg";
import { ReactComponent as DarkDownload } from "./../Assets/Icons/TradeStickyFooter/Dark/download.svg";
import { ReactComponent as DarkNotification } from "./../Assets/Icons/TradeStickyFooter/Dark/notification.svg";
import { ReactComponent as DarkStats } from "./../Assets/Icons/TradeStickyFooter/Dark/stats.svg";
import { ReactComponent as DarkSupport } from "./../Assets/Icons/TradeStickyFooter/Dark/support.svg";


const lightIconTypes = {
    rightArrow: LightRightArrow,
    orderBook: LightOrderBook,
    buyOrder: LightBuyOrder,
    sellOrder: LightSellOrder,
    playVideo: LightPlayVideo,
    verticalThreeDot: LightVerticalThreeDot,
    downArrow: LightDownArrow,
    settings: LightSettings,
    download: LightDownload,
    notification: LightNotification,
    stats: LightStats,
    support: LightSupport
};

const darkIconTypes = {
    rightArrow: DarkRightArrow,
    orderBook: DarkOrderBook,
    buyOrder: DarkBuyOrder,
    sellOrder: DarkSellOrder,
    playVideo: DarkPlayVideo,
    verticalThreeDot: DarkVerticalThreeDot,
    downArrow: DarkDownArrow,
    settings: DarkSettings,
    download: DarkDownload,
    notification: DarkNotification,
    stats: DarkStats,
    support: DarkSupport
};

const Icon = ({ name, ...props }) => {
    const theme = localStorage.getItem("theme");

    let Icon = theme === 'light' ? lightIconTypes[name] : darkIconTypes[name];
    return <Icon {...props} />;
};

export default Icon;