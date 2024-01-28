import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import ProductCard from './ProductCard'
import { useCart } from '../utils/CartContext'

const Basket = () => {
    const {cartItems, removeFromCart} = useCart()

  return (
    <Box sx={{ minHeight: "85vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      {cartItems.length === 0 ? (
        <Typography variant='h3' color="white" sx={{ p: "20px", textAlign: "left" }}>
          Your cart is empty. Continue shopping!
        </Typography>
      ) : (
        <Box sx={{ my: "60px",display: "flex", justifyContent: "center", alignItems: "center" ,flexDirection: "column" }}>
          {cartItems.map((product, index) => (
            <ProductCard key={index} product={product} addToCart={removeFromCart} marginTop={"35px"}  />
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
            <Typography variant="h5" color="white">
              Total: {cartItems.length}
            </Typography>
          </Box>
          <Button variant="contained" color="success" size='Large' sx={{width: "100%", borderRadius: "2rem", marginTop: "30px", py: "10px", backgroundColor: "#a37858"}}>
          Confirm Purchase
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Basket