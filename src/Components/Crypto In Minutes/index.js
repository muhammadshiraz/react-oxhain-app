import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CryptoInMinutes, Title, Paragraph } from "./CryptoInMinutes.styled";
import BgComponent from "../../Assets/Images/CryptoInMinutes/bg-component.svg";
import RightGradientArrow from "../../Assets/Icons/CryptoInMinutes/right-gradient-arrow.svg";
import BottomButtonLine from "../../Assets/Icons/CryptoInMinutes/bottom-button-line.svg";

const index = () => {
  return (
    <CryptoInMinutes className="relative">
      <Box
        className="h-full flex justify-center items-center"
        sx={{
          width: "100%",
        }}
      >
        <Container
          maxWidth="lg"
          className="h-full flex justify-center items-center"
        >
          <Box sx={{ flexGrow: 1 }} className="h-full flex flex-col">
            <div className="mb-20">
              <Title className="text-left text-4xl font-semibold font-exo">
                Get Your First Crypto In Minutes!
              </Title>
            </div>
            <Grid
              container
              spacing={2}
              marginTop="0"
              className="flex flex-row justify-between"
              style={{ backgroundImage:`url(${BgComponent})`}}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                className="justify-center relative createAnAccount"
              >
                <Title className="text-left text-2xl font-semibold mb-5 font-exo">
                  Create An Account
                </Title>
                <Paragraph className="text-left text-xl font-normal mb-5 font-exo">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. magna
                  consequatenim. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.magna consequat enim.
                </Paragraph>
                <button
                  type="button"
                  className="flex flex-col viewMoreBtn text-left font-medium text-xl"
                >
                  <div className="flex flex-row mr-3">
                    <span className="font-exo">View More</span>
                    <img
                      className="ml-3"
                      src={RightGradientArrow}
                      alt="Right Gradient Arrow"
                    />
                  </div>
                  <img
                    className="mt-1 bottomButtonLine"
                    src={BottomButtonLine}
                    alt="Bottom Button Line"
                  />
                </button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                className="justify-center relative startTrading"
              >
                <Title className="text-left text-2xl font-semibold mb-5 font-exo">
                  Start Trading
                </Title>
                <Paragraph className="text-left text-xl font-normal mb-5 font-exo">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. magna
                  consequatenim. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.magna consequat enim.
                </Paragraph>
                <button
                  type="button"
                  className="flex flex-col viewMoreBtn text-left font-medium text-xl"
                >
                  <div className="flex flex-row mr-3">
                    <span className="font-exo">View More</span>
                    <img
                      className="ml-3"
                      src={RightGradientArrow}
                      alt="Right Gradient Arrow"
                    />
                  </div>
                  <img
                    className="mt-1 bottomButtonLine"
                    src={BottomButtonLine}
                    alt="Bottom Button Line"
                  />
                </button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </CryptoInMinutes>
  );
};

export default index;
