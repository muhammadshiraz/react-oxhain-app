import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from '../../../Assets/Icons/Banner/Banner01/right-arrow.svg';
import { OxhainBanner, Title, Content } from "./Banner04.styled";

export default function Banner04({ className, titleclassname, title, halftitle, content, breadcrumblink01, breadcrumb01, breadcrumblink02, breadcrumb02 }) {
  return (
    <OxhainBanner className={`flex flex-col justify-center items-center relative overflow-hidden font-prompt w-full ${className}`}>
      <div className="flex flex-col container mx-auto xsm:px-5 lg:px-2 xl:px-2 2xl:px-2">
        <div className="flex flex-row items-center justify-start mt-9">
          <Link to={`${breadcrumblink01}`} className="text5 xl:text-base 2xl:text-lg font-normal mr-3.5">{breadcrumb01}</Link>
          <RightArrow className="svg-fill-05" />
          <Link to={`${breadcrumblink02}`} className="text5 xl:text-base 2xl:text-lg font-normal mx-3.5">{breadcrumb02}</Link>
        </div>
        <Title className={`font-medium capitalize text-left xsm:text-[20px] sm:text-[22px] lg:text-[36px] xl:text-[38px] 2xl:text-[40px] ${titleclassname}`}>{title}<br />{halftitle}</Title>
        <Content className='font-normal text-left xsm:text-sm lg:text-sm xl:text-base 2xl:text-base xsm:mt-1 lg:mt-2 xl:mt-2 2xl:mt-2 text4'>{content}</Content>
      </div>
    </OxhainBanner>
  )
}
