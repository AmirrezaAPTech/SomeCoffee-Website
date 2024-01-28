import { Box, Stack, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../utils/CartContext';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { cartItems } = useCart();
    const isSmallScreen = useMediaQuery('(max-width:640px)');

  return (
    <Box width="100vw" maxWidth="100%" sx={{position: isHomePage ? "absolute" : "relative",top: "0", backgroundColor: "#412A19", display: 'flex', justifyContent: 'center'}}>
  <Stack direction="row" alignItems="right"  sx={{display: "flex", justifyContent: "space-evenly", zIndex: 1000, width: {xl: "75%", lg: "80%",xs: "100%"}, py: {xl: 4, sm: 2, xs: 1} }}>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h3" fontWeight="bold" color="#a37858" pl='20px' sx={{fontSize: {lg: "48px", md: "35px", sm: "29px", xs: "24px"}}}>
            SomeCoffee
        </Typography>
    </Link>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight="bold" color="white" sx={{display: isSmallScreen ? 'none' : 'flex',fontSize: {lg: "28px", md: "18px", sm: "18px", xs: "12px"}, '&:hover': {
                            color: '#CBA68B',
                            transition: 'color 0.3s'
                        },}}>
            Home
        </Typography>
    </Link>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight="bold" color="white" sx={{ display: isSmallScreen ? 'none' : 'flex',fontSize: {lg: "28px", md: "18px", sm: "18px", xs: "12px"}, '&:hover': {
                            color: '#CBA68B',
                            transition: 'color 0.3s'
                        },}}>
            About Us
        </Typography>
    </Link>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight="bold" color="white" sx={{display: isSmallScreen ? 'none' : 'flex', fontSize:{lg: "28px", md: "18px", sm: "18px", xs: "12px"}, '&:hover': {
                            color: '#CBA68B',
                            transition: 'color 0.3s'
                        },}}>
            Features
        </Typography>
    </Link>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight="bold" color="white" sx={{display: isSmallScreen ? 'none' : 'flex',fontSize: {lg: "28px", md: "18px", sm: "18px", xs: "12px"}, '&:hover': {
                            color: '#CBA68B',
                            transition: 'color 0.3s'
                        },}}>
            Blog
        </Typography>
    </Link>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight="bold" color="white" pr="20px" sx={{display: isSmallScreen ? 'none' : 'flex',fontSize: {lg: "28px", md: "18px", sm: "18px", xs: "12px"}, '&:hover': {
                            color: '#CBA68B',
                            transition: 'color 0.3s'
                        },}}>
            Contact
        </Typography>
    </Link>
    <Link to="/basket" style={{ display: 'flex', alignItems: 'center',justifyContent:"flex-end" }}>
        <ShoppingCartIcon fontSize="large" sx={{color: "#a37858", fontSize: {md: "35px", xs: "28px", '&:hover': {
                color: "#CBA68B",
                transition: 'color 0.4s'
            },}}}/>
        <Typography variant="h5" fontWeight="bold" color="white" pr="20px">
        {cartItems.length}
        </Typography>
    </Link>
  </Stack>
  </Box>
  )
}

export default Navbar