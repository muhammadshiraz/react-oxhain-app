import React, { useState } from "react";
import Title01 from "../../Components/Title/Title01";
import { OxhainSubmitRequest, StyledSelect } from "./SubmitRequest.styled";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Breadcrumb01 from "../../Components/Breadcrumb/Breadcrumb01";
import { useRef } from "react";
import { useEffect } from "react";

const SubmitRequest = () => {
	const dropdownRef = useRef(null);
	const [showDropdown, setShowDropdown] = useState(false);
	const [dropdownValue, setDropdownValue] = useState('');

	const dropdownItems = ['Google 2fa issue', 'Account', 'Deposit issue', 'Withdrawal issue', 'Spot trading', 'Trading bot', 'Google 2fa issue', 'Deposit issue', 'Account']

	const dropdownItemClick = (value) => {
		setDropdownValue(value);
	}

	const closeDropdown = (e) => {
		if (e.target.classList.toString().includes('form-dropdown-inner-item')) {
			dropdownItemClick(e.target.innerText);
		}

		if (!dropdownRef.current.contains(e.target)) {
			setShowDropdown(false);
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', closeDropdown);
	}, [dropdownRef]);

	return (
		<OxhainSubmitRequest className="submit-request-page pt-40 pb-20">
			<div className="container mx-auto">
				<Breadcrumb01 label1="Support Center" label2="Submit a Ticket" link1="/support-center" link2="/submit-request" />

				<Title01 className="block text-left mb-20">Submit a Request</Title01>

				<div className="form flex flex-col px-6 pt-6 pb-6 lg:px-11 lg:pt-12 lg:pb-16">
					<span className="text-left block text-sm mb-7 !font-normal">
						Please select your issue type Accurately to expedite the process.
					</span>

					{/* Dropdown */}
					<div className="form-dropdown relative text-left">
						<div>
							<button ref={dropdownRef} type="button" className="inline-flex w-full items-center justify-between h-12 px-4" onClick={() => setShowDropdown(!showDropdown)} aria-expanded="true" aria-haspopup="true">
								<span>{dropdownValue ? dropdownValue : '―'}</span>
								<svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
								</svg>
							</button>
						</div>

						{showDropdown ? (
							<div className="form-dropdown-inner absolute z-10 w-full" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
								<div className="h-44 overflow-y-auto text-sm" role="none">
									{dropdownItems.map((item, i) => (
										<span href="#" className="form-dropdown-inner-item block px-4 py-1 cursor-pointer" key={'submit-request-dropdown-item-' + i}>{item}</span>
									))}
								</div>
							</div>
						) : ''}
					</div>
				</div>
			</div>
		</OxhainSubmitRequest>
	);
};

export default SubmitRequest;
