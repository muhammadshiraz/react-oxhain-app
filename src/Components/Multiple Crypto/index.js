import * as React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import EducationVector from "../../Assets/Images/CryoptoEductaion/education.png";
import CopyTradingVector from "../../Assets/Images/CryoptoEductaion/copy-trading.png";
import SecurityVector from "../../Assets/Images/CryoptoEductaion/security.png";
import RightArrow from "../../Assets/Icons/CryoptoEductaion/right-arrow.svg";
import MultipleCryptoBg from "../../Assets/Images/CryoptoEductaion/multiple-crypto-bg.svg";
import EducationEllipseLight from '../../Assets/Icons/CryoptoEductaion/Light/education-ellipse.png';
import EducationEllipseDark from '../../Assets/Icons/CryoptoEductaion/Dark/education-ellipse.png';
import { OxhainMultipleCrypto, Title, Paragraph } from "./MultipleCrypto.styled";

const MultipleCrypto = () => {
  const currentTheme = window.localStorage.getItem('theme');
  const [educationEllipse, seteducationEllipse] = React.useState(EducationEllipseLight);
  const [value, setValue] = React.useState("1");
  const MINUTE_MS = 5000;

  React.useEffect(() => {
    if (currentTheme === 'dark') {
      seteducationEllipse(EducationEllipseDark);
    } else if (currentTheme === 'light') {
      seteducationEllipse(EducationEllipseLight);
    }

    const interval = setInterval(() => {
      if(value === "1") {
        setValue("2");
      } if (value === "2") {
        setValue("3");
      } if (value === "3") {
        setValue("1");
      }
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.    
  },[value, currentTheme]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <OxhainMultipleCrypto className="relative">
      <div className="mb-14">
        <Title className="text-center text-4xl font-medium font-exo">
          Multiple Ways to Buy Crypto
        </Title>
      </div>
      <Box
        className="h-full flex flex-col justify-center items-center mt-5 cryoptoEductaionMainBox"
        sx={{
          width: "100%",
        }}
      >
        <TabContext value={value} className="multipleTabContext">
          <Box sx={{ borderBottom: 0 }} className="multipleTabContextBox"
            style={{ backgroundImage:`url(${MultipleCryptoBg})`}}
          >
            <Container
              maxWidth="lg"
              className="h-full flex justify-center items-center"
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                className="justify-around"
                id="tablist"
              >
                <Tab className="capitalize" label="Education" value="1" />
                <Tab className="capitalize" label="Copy Trading" value="2" />
                <Tab className="capitalize" label="Security" value="3" />
              </TabList>
            </Container>
          </Box>
          <Container
            maxWidth="lg"
            className="h-full flex justify-center items-center"
          >
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabPanel value="1">
                <Box sx={{ flexGrow: 1 }} className="h-full flex flex-col">
                  <Grid
                    container
                    spacing={2}
                    marginTop="0"
                    className="flex flex-row justify-between items-center multipleCryptoGridRoot"
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      className="flex flex-row justify-between p-0 relative multipleCryptoGridBox"
                    >
                      <div className="educationEllipse">
                        <img src={educationEllipse} width='100%' alt='Education' />
                      </div>
                      <div className="mt-12 mr-11">
                        <Title className="font-exo text-4xl font-medium text-left mt-8 mb-3">
                          Education
                        </Title>
                        <Paragraph className="text-[#3F3F3F] font-exo text-base font-normal text-left mb-16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. magna consequat enim. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit.magna consequat
                          enim.Lorem ipsum dolor amet, consectetur adipiscing
                          elit.magna consequat enim.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </Paragraph>
                        <button
                          type="button"
                          className="moreEducationBtn mt-16"
                        >
                          <span className="text-[#FFFFFF] font-exo">
                            more on education
                          </span>
                          <img src={RightArrow} alt="Arrow Right" />
                        </button>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      className="justify-between p-0 relative multipleCryptoGridBox"
                    >
                      <div className="educationVector flex justify-center items-center h-[630px]">
                        <img src={EducationVector} width='100%' alt='Education' />
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel value="2">
                <Box sx={{ flexGrow: 1 }} className="h-full flex flex-col">
                  <Grid
                    container
                    spacing={2}
                    marginTop="0"
                    className="flex flex-row justify-between items-center multipleCryptoGridRoot"
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      className="flex flex-row justify-between p-0 relative multipleCryptoGridBox"
                    >
                      <div className="tradingEllipse">
                        <img src={educationEllipse} width='100%' alt='Education' />
                      </div>
                      <div className="mt-12 mr-11">
                        <Title className="text-[#000000] font-exo text-4xl font-medium text-left mt-8 mb-3">
                          Copy Trading
                        </Title>
                        <Paragraph className="text-[#3F3F3F] font-exo text-base font-normal text-left mb-16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. magna consequat enim. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit.magna consequat
                          enim.Lorem ipsum dolor amet, consectetur adipiscing
                          elit.magna consequat enim.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </Paragraph>
                        <button
                          type="button"
                          className="moreEducationBtn mt-16"
                        >
                          <span className="text-[#FFFFFF] font-exo">
                            more on copy trading
                          </span>
                          <img src={RightArrow} alt="Arrow Right" />
                        </button>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      className="justify-between p-0 relative multipleCryptoGridBox"
                    >
                      <div className="tradingVector mr-11 flex justify-center items-center h-[630px]">
                        <img
                          src={CopyTradingVector}
                          width="100%"
                          alt="Copy Trading Vector"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel value="3">
                <Box sx={{ flexGrow: 1 }} className="h-full flex flex-col">
                  <Grid
                    container
                    spacing={2}
                    marginTop="0"
                    className="flex flex-row justify-between items-center multipleCryptoGridRoot"
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      className="flex flex-row justify-between p-0 relative multipleCryptoGridBox"
                    >
                      <div className="securityEllipse">
                        <img src={educationEllipse} width='100%' alt='Education' />
                      </div>
                      <div className="mt-12 mr-11">
                        <Title className="text-[#000000] font-exo text-4xl font-medium text-left mt-8 mb-3">
                          Security
                        </Title>
                        <Paragraph className="text-[#3F3F3F] font-exo text-base font-normal text-left mb-16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. magna consequat enim. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit.magna consequat
                          enim.Lorem ipsum dolor amet, consectetur adipiscing
                          elit.magna consequat enim.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </Paragraph>
                        <button
                          type="button"
                          className="moreEducationBtn mt-16"
                        >
                          <span className="text-[#FFFFFF] font-exo">
                            more on spot trading
                          </span>
                          <img src={RightArrow} alt="Arrow Right" />
                        </button>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      className="justify-between p-0 relative multipleCryptoGridBox"
                    >
                      <div className="spotVector flex justify-center items-center h-[630px]">
                        <img
                          src={SecurityVector}
                          width="100%"
                          alt="Security Vector"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
            </Box>
          </Container>
        </TabContext>
      </Box>
    </OxhainMultipleCrypto>
  );
};

export default MultipleCrypto;