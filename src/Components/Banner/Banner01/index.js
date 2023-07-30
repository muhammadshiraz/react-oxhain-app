import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from '../../../Assets/Icons/Banner/Banner01/right-arrow.svg';
import { OxhainBanner, Title, Content } from "./Banner01.styled";

export default function Banner01({ className, titleclassname, title, content, breadcrumblink01, breadcrumb01, breadcrumblink02, breadcrumb02, breadcrumblink03, breadcrumb03, userinput }) {
  return (
    <OxhainBanner className={`flex flex-col justify-center items-center relative overflow-hidden font-prompt w-full ${className}`}>
      <div className="ellipseLeft absolute"></div>
      <div className="flex flex-col container mx-auto mobile:px-5 tablet:px-5 ipad:px-2 laptop:px-2 desktop:px-2">
        <div className="flex flex-row items-center justify-start ipad:absolute laptop:absolute desktop:absolute top-0 lef-0 tablet:mt-3 laptop:mt-9 desktop:mt-9">
          <Link to={`${breadcrumblink01}`} className="text5 laptop:text-base desktop:text-lg font-normal mr-3.5">{breadcrumb01}</Link>
          <RightArrow className="svg-fill-05" />
          <Link to={`${breadcrumblink02}`} className="text5 laptop:text-base desktop:text-lg font-normal mx-3.5">{breadcrumb02}</Link>
          {breadcrumb03 ? (
            <>
              <RightArrow className="svg-fill-05" />
              <Link to={`${breadcrumblink03}`} className="text5 laptop:text-base desktop:text-lg font-normal ml-3.5">{breadcrumb03}</Link>
            </>
          ) : ""}
        </div>
        <Title className={`font-medium capitalize mobile:text-left tablet:text-left mobile:text-[20px] tablet:text-[26px] ipad:text-[36px] laptop:text-[38px] desktop:text-[40px] ${titleclassname}`}>{title}</Title>
        <Content className='font-normal mobile:text-left tablet:text-left mobile:text-sm tablet:text-base ipad:text-xl laptop:text-xl desktop:text-xl mobile:mt-1 tablet:mt-2 ipad:mt-2 laptop:mt-2 desktop:mt-2'>{content}</Content>
        {userinput}
      </div>
      <div className="ellipseRight absolute"></div>
      <div className="ellipseBottom absolute"></div>
    </OxhainBanner>
  )
}
