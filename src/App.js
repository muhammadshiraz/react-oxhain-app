import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./Theme/Global";
import DashboardLayoutSideBar from "./Pages/Dashboard/index";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import ModalManager from "./Components/Modal";
import Footer from "./Layouts/Footer";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Theme/useDarkMode";
import { light, dark } from "./Theme/Theme.styled";
import { useDispatch } from "react-redux";
import { setWallet } from "./Store/Slices/UserSlice";
import { setPair } from "./Store/Slices/TradeSlice";
import { getPairs, getWallet } from "./Utils/API";
import { ToastContainer } from "react-toastify"; 

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
  const [modalOpen, setModal] = React.useState(false);
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? light : dark;
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [isTitleChange, seTitleChange] = React.useState("");
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem("isAuth"));

  const dispatch = useDispatch();

  const data = {
    isAuth,
    setIsAuth,
  };

  const openModal = event => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal }
      }
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal(true);
  };

  function handleTitleButtons(id) {
    if (id === "1") { seTitleChange("Dashboard"); }
    if (id === "2") { seTitleChange("My Profile"); }
    if (id === "3") { seTitleChange("Security"); }
    if (id === "4") { seTitleChange("Referrals"); }
    if (id === "5") { seTitleChange("API Management"); }
    if (id === "6") { seTitleChange("Settings"); }
  }

  const dashboard = window.location.pathname === "/dashboard";
  const myprofile = window.location.pathname === "/dashboard/my-profile";
  const security = window.location.pathname === "/dashboard/security";
  const referrals = window.location.pathname === "/dashboard/referrals";
  const apimanagement = window.location.pathname === "/dashboard/api-management";
  const settings = window.location.pathname === "/dashboard/settings";

  React.useEffect(() => {
    if (dashboard || myprofile || security || referrals || apimanagement || settings) {
      setShowSidebar(true);
    }
    if (dashboard) {
      seTitleChange("Dashboard");
    }
    if (window.location.pathname === "/") {
      setShowSidebar(false);
    }
    if (window.location.pathname === "/gifting") {

    }
  }, [isAuth, theme, themeMode]);

  /*
  React.useEffect(() => {
    initPairs();
  }, []);

  const initPairs = async () => {
    const pairsResponse = await getPairs();
    dispatch(setPair(pairsResponse.data));
  }
  */

  return (
    <ThemeProvider theme={themeMode} value={data}>
      <>
        <BrowserRouter>
          <div className="App" onClick={openModal}>
            <GlobalStyles />
            <div className="flex flex-row w-full">
              {showSidebar ? <DashboardLayoutSideBar handleTitleButtons={handleTitleButtons} /> : null}
              <div className="flex flex-col w-full relative">
                <ToastContainer
                  className={'mt-20 text-xs'}
                  position="top-right"
                  autoClose={7000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />

                <Header
                  isDashTitle={isTitleChange}
                  theme={theme}
                  toggleTheme={toggleTheme}
                />
                <Main />
              </div>
            </div>
            <ModalManager closeFn={closeModal} modal={modalOpen} />
            <Footer />
          </div>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
