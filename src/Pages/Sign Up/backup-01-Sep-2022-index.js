import React from 'react';
import SignUpImage from '../../Assets/Images/SignUp/SignUp.jpg';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Checkbox from "../../Components/Checkbox";
import HaveAnAccount from "../../Components/Have An Account";
import OxhainPhoneField from '../../Components/Phone field';
import Select05 from '../../Components/Select/Select05';
import OxhainTextField from '../../Components/Text field';
import OxhainTextField03 from '../../Components/Text field/TextField03';
import OxhainEmailField from '../../Components/Email field';
import OxhainPasswordField from '../../Components/Password field';
import Button from '../../Components/Button/Button01';
import ValidationLabel from "../../Components/ValidationLabel";
import {
    OxhainSignUp,
    GradientText,
    Title,
    Paragraph,
} from "./SignUp.styled";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { initUserIdFromStorage } from '../../Store/Slices/UserSlice';

const SignUp = () => {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        name: '',
        surname: '',
        email: '',
        country_code: '90',
        phone_number: '',
        birthday: '',
        birth_place: '',
        city: '',
        country: '',
        address: '',
        id_type: 'id',
        id_number: '',
        password: '',
        password_again: '',
        termsOfUse: false
    });

    const changeFormData = (prop, value) => {
        setFormData({ ...formData, [prop]: value });
        console.log(formData);
    }

    // const [isPhone, setPhone] = React.useState("");
    const [isCodeValid, setCodeValid] = React.useState("");
    const [isDisabled, setDisabled] = React.useState(false);
    const [isOpacity, setOpacity] = React.useState("1");
    const [isLabelDisplay, setLabelDisplay] = React.useState("hidden");

    React.useEffect(() => {
        document.getElementById("header").style.display = "none";
        document.getElementById("footer").style.display = "none";
    }, []);

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    function formatDate(date) {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('-');
    }

    // const phoneChange = (event) => {
    //     var phoneChangeInput = event.target.value
    //     if (phoneChangeInput.length == 6) {
    //         if (phoneChangeInput === "123456") {
    //             setPhone(event);
    //             setCodeValid("correct-code");
    //             setDisabled(false);
    //             setLabelDisplay("hidden");
    //             setOpacity("1");
    //         } else {
    //             setPhone(event);
    //             setCodeValid("wrong-code");
    //             setDisabled(true);
    //             setLabelDisplay("flex");
    //             setOpacity("0.5");
    //         }
    //     } else {
    //         setPhone(event);
    //         setCodeValid("wrong-code");
    //         setDisabled(true);
    //         setLabelDisplay("hidden");
    //         setOpacity("0.5");
    //     }
    // };

    const signupHandle = (e) => {
        e.preventDefault();
        let { name, surname, email, country_code, phone_number, birthday, birth_place, city, country, address, id_type, id_number, password, password_again, termsOfUse } = formData;
        const api_key = "28b4b56939b14fdf30bcefeb3e935193b0f07ce22523ab5d32afcf3f4151edc0";

        //if (!termsOfUse) return Swal.fire({ icon: 'warning', title: 'Warning', text: 'Please accept the terms.' });

        if (!name, !surname, !email, !country_code, !phone_number, !birthday, !birth_place, !city, !country, !address, !id_type, !id_number, !password, !password_again) {
            return Swal.fire({ icon: 'warning', title: 'Oops...', text: 'Please fill in the blank fields.' });
        }

        if (password !== password_again) {
            return Swal.fire({ icon: 'error', title: 'Oops...', text: 'Password not equals!' });
        }

        const requstObj = {
            name, surname, email, country_code, phone_number, birthday, birth_place, city, country, address, id_type, id_number, password, api_key
        }

        axios.post('http://18.118.138.191:9595/register', requstObj).then((res) => {
            console.log(res.data);
            if (res.data.status === 'success') {
                Swal.fire({ icon: 'success', title: 'Success', text: 'Your registration has been successfully created.' });

                const userId = res.data.data.user_id;
                localStorage.setItem('user_id', userId);

                setTimeout(() => {
                    window.location.href = "/login";
                }, 1000);
            } else if (res.data.status === 'fail') {
                let emailError = 0;
                let phoneError = 0;

                if (res.data.message.emailUnique === 'false') {
                    emailError = 1;
                }
                if (res.data.message.phoneUnique === 'false') {
                    phoneError = 1;
                    // Swal.fire({ icon: 'error', title: 'Exist Phone', text: 'This phone  address already exists.' });
                }

                if (emailError === 1 && phoneError === 1) {
                    Swal.fire({ icon: 'error', title: 'Email and Phone Exist', text: 'This email address and phone already exists.' });
                } else if (emailError === 1 && phoneError === 0) {
                    Swal.fire({ icon: 'error', title: 'Email Exist', text: 'This email address already exists.' });
                } else if (emailError === 0 && phoneError === 1) {
                    Swal.fire({ icon: 'error', title: 'Phone Exist', text: 'This phone already exists.' });
                }
            } else {
                Swal.fire({ icon: 'error', title: 'Something went wrong', text: 'Please refresh the page and try again.' });
            }
        }).catch((err) => {
            Swal.fire({ icon: 'error', title: 'Network Error!', text: 'Please refresh the page and try again.' });
        });

        console.log('submit', formData);
    }

    return (
        <OxhainSignUp className='flex flex-row h-screen'>
            <div className='flex'><img src={SignUpImage} className="h-full" alt="Sign Up" /></div>
            <div className='flex flex-col bg-[#FFFFFF] w-full justify-center relative'>
                <HaveAnAccount />
                <div className='py-24 flex flex-col text-left w-full mx-auto xsm:scale-50 sm:scale-50 md:scale-75 xmd:scale-75 lg:scale-50 xl:scale-75 2xl:scale-1 overflow-y-auto'>
                    <Box sx={{ width: '90%' }} className="mx-auto">
                        <Title className='text-5xl font-medium font-prompt mb-[30px]'>Sign Up</Title>
                        <Box
                            component="form"
                            className='flex flex-col'
                        >
                            <div className='flex flex-row mb-5'>
                                <OxhainTextField label="Email" x="100" placeholder="Email" className="mr-4" onChange={(e) => changeFormData('email', e.target.value)} />
                                <div className='flex flex-col w-full ml-4'>
                                    <OxhainPhoneField isCodeValid={isCodeValid} phoneChange={(e) => changeFormData('phone_number', e.target.value)} />
                                    <ValidationLabel
                                        mtop="2"
                                        mleft="5"
                                        text="Phone number doesn’t match."
                                        isLabelDisplay={isLabelDisplay}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-row mb-5'>
                                <OxhainTextField label="Name" placeholder="Name" className={'mr-4'} onChange={(e) => changeFormData('name', e.target.value)} />
                                <OxhainTextField label="Surname" placeholder="Surname" className={'ml-4'} onChange={(e) => changeFormData('surname', e.target.value)} />
                            </div>
                            <div className='flex flex-row mb-5'>
                                <OxhainTextField03 type="date" min="01-01-1900" id="start" name="trip-start" max="01-01-2023" label="DOB" placeholder="DOB" onChange={(e) => changeFormData('birthday', formatDate(new Date(e.target.value)))} />
                                <OxhainTextField label="Birth Place" placeholder="Birth Place" className={'ml-10'} onChange={(e) => changeFormData('birth_place', e.target.value)} />
                            </div>
                            <div className='flex flex-row mb-5'>
                                <OxhainTextField label="City" placeholder="City" className={'mr-4'} onChange={(e) => changeFormData('city', e.target.value)} />
                                <OxhainTextField label="Country" placeholder="Country" className={'ml-4'} onChange={(e) => changeFormData('country', e.target.value)} />
                            </div>
                            <div className='flex flex-col items-center mb-5'><OxhainTextField label="Address" placeholder="Address" onChange={(e) => changeFormData('address', e.target.value)} /></div>
                            <div className='flex flex-row mb-5'>
                                <Select05 
                                    label="Verification" 
                                    dropdown={
                                        <select className='text-black w-full' onChange={(e) => changeFormData('id_type', e.target.value)}>
                                            <option value="id">ID Card</option>
                                            <option value="passport">Passport</option>
                                            <option value="driver_license">Driver's License</option>
                                        </select>
                                    }
                                />
                                <OxhainTextField label="ID Number" placeholder="ID Number" className="ml-10" onChange={(e) => changeFormData('id_number', e.target.value)} />
                            </div>
                            <div className='flex flex-row mb-5'>
                                <div className='flex flex-col mb-3 w-full'>
                                    <OxhainPasswordField isCodeValid={isCodeValid} label="Password" placeholder="Password" passwordChange={(e) => changeFormData('password', e.target.value)} inputBoxClassName="mr-4" />
                                    <ValidationLabel
                                        mtop="2"
                                        mleft="5"
                                        text="Password doesn’t match."
                                        isLabelDisplay={isLabelDisplay}
                                    />
                                </div>
                                <div className='flex flex-col mb-5 w-full'>
                                    <OxhainPasswordField isCodeValid={isCodeValid} label="Password Again" placeholder="Password Again" passwordChange={(e) => changeFormData('password_again', e.target.value)} inputBoxClassName="ml-4" />
                                    <ValidationLabel
                                        mtop="2"
                                        mleft="5"
                                        text="Password doesn’t match."
                                        isLabelDisplay={isLabelDisplay}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-row mb-5 w-full'>
                                <OxhainTextField label="Referral Code (Optional)" placeholder="Referral Code (Optional)" />
                            </div>
                            <Checkbox mtop="1" textcolor="#606060" fsize="base" labeltext="I have read and agree to the" Checkboxbtn={<button type='button' className='ml-1 underline'>Terms of Use.</button>} onChange={(event) => changeFormData('termsOfUse', event.target.checked)} />
                            <div className="pt-10 w-[250px]">
                                <Button
                                    btnType="submit"
                                    isDisabled={isDisabled}
                                    isOpacity={isOpacity}
                                    handleButton={signupHandle}
                                    text="Sign Up"
                                    x="250"
                                    y="55"
                                />
                            </div>
                        </Box>
                    </Box>
                </div>
            </div>
        </OxhainSignUp>
    );
};

export default SignUp;