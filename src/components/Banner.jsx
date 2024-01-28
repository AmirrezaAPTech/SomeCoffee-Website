import { Box, Button, Stack, useTheme } from "@mui/material";
import HeroBannerXl from "../assets/img/HeroBannerBBGr.png";
import HeroBannerSM from "../assets/img/HeroBannerBB.png";
import useMediaQuery from '@mui/material/useMediaQuery';

const Banner = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        margin: 0,
        padding: 0,
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Stack
        direction={"row"}
        spacing={{ xs: 1, lg: 3 }}
        sx={{
          position: "absolute",
          bottom: {md : "30%", xs: "30%"},
          right: {md : "26%", xs: "26%"},
          width: "22%"
        }}
      >
          <Button
            variant="contained"
            sx={{
              borderRadius: '1rem',
              backgroundColor: "white",
              color: "#a37858",
              fontWeight: "bold",
              width: "35%",
              fontSize: {md: `clamp(0.5vw, 0.7vw, 1.5vw)`, sm: `clamp(0.6vw, 0.7vw, 1.2vw)`, xs: `clamp(1vw, 1.2vw, 1.7vw)`}, '&:hover': {
                backgroundColor: '#a37858',
                color: "white",
                transition: 'backgroundColor 0.4s'
            },
          }}
          >
            Order Now
          </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: '1rem',
            color: "white",
            borderColor: "white",
            width: "35%",
            fontSize: {md: `clamp(0.5vw, 0.7vw, 1.5vw)`, sm: `clamp(0.6vw, 0.7vw, 1.2vw)`, xs: `clamp(1vw, 1.2vw, 1.7vw)`}, '&:hover': {
              borderColor: '#a37858',
              color: '#a37858',
              transition: 'backgroundColor 0.4s'
          },
          }}
        >
          <span style={{display: "flex", flexWrap: "nowrap"}}>Shop Now</span>
          
        </Button>
      </Stack>
      <img
        src={isSmScreen ? HeroBannerSM : HeroBannerXl}
        alt="HeroBanner"
        style={{ display: "block", objectFit: "cover", width: "100%", height: "100%",maxWidth: "100%" }}
      />
    </Box>
  );
};

export default Banner;