import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as RightArrow} from '../../../Assets/Icons/Banner/Banner02/right-arrow.svg';
import { OxhainBanner, Title, Content } from "./Banner02.styled";

export default function Banner02({title, content, breadcrumblink01, breadcrumb01, breadcrumblink02, breadcrumb02, userinput01, userinput02, tabcontext}) {
	return (
    	<OxhainBanner className='flex flex-col justify-center items-center bg-[#121212] relative overflow-hidden font-prompt w-full h-max py-8'>
          <div className="flex flex-col container mx-auto px-2 justify-between">
            <div className="flex flex-row items-center justify-start text-[#FFFFFF] mb-12">
                <Link to={`${breadcrumblink01}`} className="text-lg font-normal mr-3.5">{breadcrumb01}</Link>
                <RightArrow className="svg-fill-05" />
                <Link to={`${breadcrumblink02}`} className="text-lg font-normal ml-3.5">{breadcrumb02}</Link>
            </div>
            <div className="flex flex-col w-1/3">
              <Title className='font-medium capitalize text-[40px] text-left'>{title}</Title>
              <Content className='font-normal text-xl mt-3 text-left'>{content}</Content>
            </div>
            <div className="flex flex-row items-start justify-start mt-6">
              {userinput01}
              {userinput02}
            </div>
            {tabcontext}
          </div>
      </OxhainBanner>
    )
}
