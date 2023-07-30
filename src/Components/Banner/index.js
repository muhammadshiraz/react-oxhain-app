import React from "react";
import Container from '@mui/material/Container';
import {ReactComponent as DotEllipse} from '../../Assets/Icons/Banner/dot-ellipse.svg';
import { OxhainBanner, Title, Content, JoinUsEllipse, Button } from "./Banner.styled";

export default function Banner({title, content, buttonText, ellipseUrl}) {
	return (
    	<OxhainBanner className='flex flex-col justify-center items-center relative overflow-hidden'>
          {/* <div className="ellipseGreen absolute">
            <img src={EllipseGreen} alt="Ellipse Green" />
          </div> */}
          <div className="ellipseGreen absolute"></div>
          <Container maxWidth="lg" className='h-full'>
            <div className='flex flex-col relative h-full justify-center'>
              <JoinUsEllipse className='joinusEllipse'><img src={ellipseUrl} alt={title} width='140px' /></JoinUsEllipse>
              <Title className='uppercase font-prompt flex flex-row justify-center items-center mb-3'>
                <div className='mr-8'>
                  <DotEllipse />
                </div>
                  {title}
                <div className='ml-8'>
                  <DotEllipse />
                </div>
              </Title>
              <Content className='capitalize font-prompt mb-16'>{content}</Content>
              <Button type='button' className='mx-auto'><span>{buttonText}</span></Button>
            </div>
          </Container>
          {/* <div className="ellipsePurple absolute">
            <img src={EllipsePurple} alt="Ellipse Purple" />
          </div> */}
          <div className="ellipsePurple absolute"></div>
          {/* <div className="ellipseYellow absolute">
            <img src={EllipseYellow} alt="Ellipse Yellow" />
          </div> */}
          <div className="ellipseYellow absolute"></div>
      </OxhainBanner>
    )
}
