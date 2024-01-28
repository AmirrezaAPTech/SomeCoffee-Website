import { Box, Typography } from '@mui/material';
import { coffeeProducts, cakeProducts, iceCoffeeProducts  } from "../utils/constants";
import ProductCard from "./ProductCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CakeBanner from '../assets/img/CakeBanner.png';
import WorkBanner from '../assets/img/WorkBanner.png';
import { useCart } from '../utils/CartContext';

const ProductList = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };

  const { addToCart } = useCart();

  return (
    <Box >
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "100px"}}>
            <img src={WorkBanner} alt="offer banner" width="1480px" style={{borderRadius: "1rem", marginTop: "80px", maxWidth: "120%"}} />
        </Box>

    <Box sx={{ width: "92%", marginLeft: "auto",marginRight: "auto", mb: "5rem" }}>
      <Typography variant="h3" sx={{mt: "10px", mb: "30px", typography: {sm: 'h3', xs: 'h4' }, fontWeight: {xs: "bold"}}}>Hot Coffee</Typography>
      {coffeeProducts.length > responsive.mobile.items && (
        <Carousel
        containerClass="carousel-container"
        responsive={responsive}
        infinite={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
>
  {coffeeProducts.map((product, index) => (
    <ProductCard key={index} product={product} addToCart={addToCart} marginTop={"0px"} />
  ))}
</Carousel>
      )}
      
        <Typography sx={{mt: "80px", mb: "30px", typography: {sm: 'h3', xs: 'h4' }, fontWeight: {xs: "bold"}}}>Iced Coffee</Typography>
      {iceCoffeeProducts.length > responsive.mobile.items && (
        <Carousel
        containerClass="carousel-container"
        responsive={responsive}
        infinite={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        >
  {iceCoffeeProducts.map((product, index) => (
    <ProductCard key={index} product={product} addToCart={addToCart} marginTop={"0px"} />
  ))}
</Carousel>

      )}
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src={CakeBanner} alt="offer banner" width="1480px" style={{borderRadius: "1rem", marginTop: "80px", maxWidth: "120%"}} />
        </Box>
<Typography variant="h3" sx={{mt: "10px", mb: "30px", typography: {sm: 'h3', xs: 'h4' }, fontWeight: {xs: "bold"}}}>Cake and Dessert</Typography>
{cakeProducts.length > responsive.mobile.items && (
  <Carousel
  containerClass="carousel-container"
  responsive={responsive}
  infinite={false}
  removeArrowOnDeviceType={["tablet", "mobile"]}
>
{cakeProducts.map((product, index) => (
    <ProductCard key={index} product={product} addToCart={addToCart} marginTop={"0px"} />
  ))}
</Carousel>

)}

</Box>
        </Box>
  );

}

export default ProductList;
