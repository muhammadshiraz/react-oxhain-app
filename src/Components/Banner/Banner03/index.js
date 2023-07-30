import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as RightArrow} from '../../../Assets/Icons/Banner/Banner01/right-arrow.svg';
import { OxhainBanner, Title, Content } from "./Banner03.styled";

export default function Banner03({title, content, breadcrumblink01, breadcrumb01, breadcrumblink02, breadcrumb02, userinput, bgsrc}) {
	return (
    	<OxhainBanner className='flex flex-col justify-center items-center relative overflow-hidden font-prompt w-full bg-no-repeat bg-cover'
        style={{backgroundImage: `url(${bgsrc})`}}
      >
          <div className="ellipseLeft absolute"></div>
            <div className="flex flex-col container mx-auto px-2">
              <div className="flex flex-row items-center justify-start absolute top-0 lef-0 mt-9">
                  <Link style={{color: "rgba(255, 255, 255, 0.87)"}} to={`${breadcrumblink01}`} className="text-lg font-normal mr-3.5">{breadcrumb01}</Link>
                  <RightArrow className="svg-fill-05" />
                  <Link style={{color: "rgba(255, 255, 255, 0.87)"}} to={`${breadcrumblink02}`} className="text-lg font-normal ml-3.5">{breadcrumb02}</Link>
              </div>
            </div>
            <div className="flex flex-col items-center w-full py-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
              <Title className='font-medium capitalize'>{title}</Title>
              <Content className='font-normal text-xl mt-2'>{content}</Content>
            </div>
            {userinput}
          <div className="ellipseRight absolute"></div>
      </OxhainBanner>
    )
}
