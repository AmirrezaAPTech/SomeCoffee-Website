import { Box, Paper, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from "react-router-dom"


const ProductCard = ({ product, addToCart, marginTop }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { image } = product;

  return (
    <Paper sx={{ position: "relative", display: "flex", justifyContent: "left", alignItems: "center", width: "90%", maxWidth: "600px",minHeight: "200px", maxHeight: "320px", px: "10px", py: "5px", borderRadius: "1rem", backgroundColor: "#584435", marginTop: {marginTop} }}>
      {isHomePage ? <AddIcon fontSize="medium" sx={{ position: "absolute", top: "10px", right: "10px", color: "white", cursor: "pointer", ":hover": { color: "#CBA68B" } }} onClick={() => {addToCart(product) }} /> : 
      <CloseIcon fontSize="medium" sx={{ position: "absolute", top: "10px", right: "10px", color: "white", cursor: "pointer", ":hover": { color: "#F45656" } }} onClick={() => {addToCart(product) }} />}
      <img src={image} alt={product.title} width="45%" height="auto" style={{ borderRadius: "1rem" }} />
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", pl: "20px", color: "white" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: "30px" }}>{product.title}</Typography>
        <Typography variant="body2" fontWeight="bold" >{product.price}</Typography>
      </Box>
    </Paper>
  );
};

export default ProductCard;