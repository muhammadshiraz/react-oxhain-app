import React from "react";
import {ReactComponent as DownArrow} from '../../Assets/Icons/Dashboard/Navbar/down-arrow.svg';
import Profile from '../../Assets/Icons/Dashboard/Navbar/profile.svg';
import {ReactComponent as Moon} from '../../Assets/Icons/Dashboard/Navbar/moon.svg';
import {ReactComponent as Help} from '../../Assets/Icons/Dashboard/Navbar/help.svg';
import {ReactComponent as Setting} from '../../Assets/Icons/Dashboard/Navbar/setting.svg';
import { NavLayoutComponent, NavButton, NavTitle } from "./Dashboard.styled";

export default function Navbar({title}) {
	return (
        <NavLayoutComponent className='flex flex-row justify-between items-center relative pl-12 pr-8 py-3'>
            <NavTitle className="font-prompt text-2xl font-medium">{title}</NavTitle>
            <div className="flex flex-row">
                <NavButton type="button" className="flex flex-row items-center font-normal text-sm font-prompt mr-2">Wallet <DownArrow className="ml-1"/></NavButton>
                <NavButton type="button" className="flex flex-row items-center font-normal text-sm font-prompt mx-2">Orders <DownArrow className="ml-1" /></NavButton>
                <NavButton type="button" className="flex flex-row justify-center items-center mx-2"><img src={Profile} alt="Profile" className="w-[17px]" /></NavButton>
                <NavButton type="button" className="flex flex-row justify-center items-center mx-2">Downloads</NavButton>
                <NavButton type="button" className="flex flex-row justify-center items-center mx-2">English</NavButton>
                <NavButton type="button" className="flex flex-row justify-center items-center mx-2">USD</NavButton>
                <NavButton type="button" className="flex flex-row justify-center items-center mx-2"><Moon /></NavButton>
                <NavButton type="button" className="flex flex-row justify-center items-center mx-2"><Help /></NavButton>
                <NavButton type="button" className="flex flex-row justify-center items-center ml-2"><Setting /></NavButton>
            </div>
        </NavLayoutComponent>
    )
}