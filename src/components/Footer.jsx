import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Grid
        component="footer"
        container
        justifyContent="center"
        alignItems="flex-start"
        color="#a37858"
        spacing={2}
        sx={{
          p: 2,
          backgroundColor: '#584435',
          flexWrap: "wrap",
        }}
      >
        <Grid item xs={12} sm={0} lg={3} md={3} >
          <Link to="/">
          <Typography fontWeight="bold" color="#a37858" pl={{ sm: "0px", xl: '50px', lg: '20px' }} sx={{ typography: { lg: "h3", sm: 'h4', xs: 'h6' } }}>
              SomeCoffee
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={6} sm={2} lg={2} md={2}>
          <Typography sx={{ typography: { lg: "h6", sm: 'h6', xs: 'subtitle2' }, fontWeight: { xs: "bold" } }}>
            About
          </Typography>
          <ul>
            <li>
              <Link to="/">
                <Typography variant="body2" color="#a37858">
                  Group
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/careers">
                <Typography variant="body2" color="#a37858">
                  Careers
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/accessibility">
                <Typography variant="body2" color="#a37858">
                  Digital Accessibility
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/brand-protection">
                <Typography variant="body2" color="#a37858">
                  Brand Protection
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/press">
                <Typography variant="body2" color="#a37858">
                  Press
                </Typography>
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={2} lg={2} md={2}>
          <Typography sx={{typography: { lg: "h6",sm: 'h6', xs: 'body2' }, fontWeight: {xs: "bold"}}} >
            Collections
          </Typography>
          <ul>
            <li>
              <Link to="/new-york">
                <Typography variant="body2" color="#a37858">
                  New York
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/lefkada">
                <Typography variant="body2" color="#a37858">
                  Lefkada
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/marseille">
                <Typography variant="body2" color="#a37858">
                  Marseille
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/venice">
                <Typography variant="body2" color="#a37858">
                  Venice
                </Typography>
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={2} lg={2} md={2}>
          <Typography sx={{typography: { lg: "h6",sm: 'h6', xs: 'body2' }, fontWeight: {xs: "bold"}}} >
            Our Politics
          </Typography>
          <ul>
            <li>
              <Link to="/sitemap">
                <Typography variant="body2" color="#a37858">
                  Sitemap
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions">
                <Typography variant="body2" color="#a37858">
                  Term & Conditions
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy">
                <Typography variant="body2" color="#a37858">
                  Policy Privacy
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/returns">
                <Typography variant="body2" color="#a37858">
                  Returns
                </Typography>
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={2} lg={2} md={2}>
          <Typography sx={{typography: { lg: "h6",sm: 'h6', xs: 'body2' }, fontWeight: {xs: "bold"}}} >
            Follow Us
          </Typography>
          <ul>
            <li>
              <Link to="https://instagram.com">
                <Typography variant="body2" color="#a37858">
                  Instagram
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="https://facebook.com">
                <Typography variant="body2" color="#a37858">
                  Facebook
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com">
                <Typography variant="body2" color="#a37858">
                  Twitter
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="https://pinterest.com">
                <Typography variant="body2" color="#a37858">
                  Pinterest
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="https://youtube.com">
                <Typography variant="body2" color="#a37858">
                  Youtube
                </Typography>
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={1} lg={1} md={1} sx={{ display: {xs: "none", md: "block"}}}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" color="#a37858">
              Up
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;