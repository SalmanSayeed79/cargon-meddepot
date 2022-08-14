import { Box, Paper, Typography, Button } from "@mui/material";
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallCard from "../Components/Landing/SmallCard";
import Footer from "../Components/Landing/Footer";

export default function Landing() {
  AOS.init();
  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          maxWidth: "100vw",
          height: "7vh",
          backgroundColor: "#f4f4f4",
          position: "sticky",
          top: 0,
          zIndex: 5,
        }}
      >
        <Typography variant="h4">Cargon</Typography>
        <Box
          sx={{
            display: {xs:"none",md:"flex"},
            width: "40vw",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6">Products</Typography>
          <Typography variant="h6">Pricing</Typography>
          <Typography variant="h6">Contact</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" sx={{ fontSize: {xs:"22px",md:"36px"} }}>
            Re-design Your Supply Chain With
          </Typography>
          <ReactTypingEffect
            text={["CARGON"]}
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              fontColor: "primary.main",
            }}
            speed={120}
          >
            <Typography variant="h1" color="primary">
              CARGON
            </Typography>
          </ReactTypingEffect>
        </Box>
        <Box
          component="img"
          src="https://i.postimg.cc/xTjPmS52/1911-i039-014-metal-industry-metalworking-isometric.jpg"
          sx={{ width: {xs:"75vw",md:"35vw"},marginTop:{xs:"10vh",md:"0px"} }}
          data-aos="fade-in"
          data-aos-delay="100"
          data-aos-duration="750"
          data-aos-easing="ease-in"
        />
      </Box>
      
      <Box
        sx={{
          display: "flex",
          
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100vw",
          minHeight: "100vh",
          padding: "2vh 0",
        }}
      >
        {/** OUR PRODUCTS */}
        <Box
          sx={{
            display: "flex",
            flexDirection:{xs:"column",md:"row"},
            alignItems: "center",
            backgroundColor: "#f4f4f4",
            justifyContent: "center",
            width: "100vw",
            minHeight: "100vh",
          }}
        >
          <Box sx={{ width: {xs:"80vw",md:"40vw"} ,margin:"2vh 0"}} data-aos="fade-right">
            <Typography
              variant="h2"
              sx={{ fontSize: {xs:"48px",md:"64px"}, fontWeight: "bold" }}
            >
              Our Products
            </Typography>
            <Typography variant="p" sx={{ maxWidth: "10vw", fontSize: {xs:"16px",md:"22px"} }}>
              Pharmacutical industry has always faced problems dealing with
              counterfeit products. Millions of people are affected each year
              owing to fake drugs With 5 partner products of cargon we plan on
              changing the pharmacutical industry with help of tech
            </Typography>
            <Box sx={{display:"flex",flexWrap:"wrap", margin:"2vh 0"}}>
            <SmallCard link="https://i.postimg.cc/DymrXSpQ/medpilot.png" name="MedPilot"/>
              <SmallCard link="https://i.postimg.cc/cJVBVgf7/medchant.png" name="MedChant"/>
              <SmallCard link="https://i.postimg.cc/4xxPtTJc/millhouse.png" name="MillHouse"/>
              <SmallCard link="https://i.postimg.cc/137HrYtj/ssf.png" name="MedDepot"/>
              <SmallCard link="https://i.postimg.cc/Prcmzd0g/apo.png" name="Apothecary"/>
            </Box>
          </Box>

          <Box
            component="img"
            src="https://i.postimg.cc/dQC84DyR/Untitled-5000-5000-px.png"
            sx={{ width: {xs:"0",md:"600px"} }}
            data-aos="fade-left"
          />
        </Box>
        {/**MedPilot */}
        <Box
          sx={{
            display: "flex",
            flexDirection:{xs:"column",md:"row"},
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            minHeight: "100vh",
            backgroundColor:{xs:"#b39ddb",md:"white"}
          }}
        >
          
          <Box sx={{width:"50vw",height:{xs:"40vh",md:"100vh"},display:{xs:"flex"},alignItems:"center",justifyContent:"center",backgroundColor:{md:"#b39ddb"}}}>
          <Box
            component="img"
            src="https://i.postimg.cc/j5n5dp4y/Deliverymdpi.png"
            sx={{ width:{xs:"75vw", md:"25vw"} }}
            data-aos="fade-left"
          />
          </Box>
          <Box sx={{ width: {xs:"100vw",md:"50vw"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }} data-aos="fade-right">

            <Box sx={{ width: {xs:"80vw",md:"40vw"} ,margin:"2vh 0",marginLeft:{md:"2vw"}}}>
                <Typography
                variant="h2"
                sx={{ fontSize: {xs:"48px",md:"64px"}, fontWeight: "bold",color:"#673ab7" }}
                >
                MedPilot
                </Typography>
                <Typography variant="p" sx={{ maxWidth: "40vw", fontSize: {xs:"16px",md:"22px"} }}>
                Cargon service for product distributors. That helps manage all the necessities for a distributor including live tracking of riders
                </Typography>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:{xs:"center",md:"flex-start"},flexWrap:"wrap", margin:"2vh 0",width: {xs:"80vw",md:"40vw"}}}>
            <Button variant="contained" sx={{backgroundColor:"#673ab7"}}><Typography sx={{fontSize:{xs:"24px",md:"36px"},fontWeight:"bold"}}>VISIT MEDPILOT </Typography></Button>
            </Box>
          </Box>
        </Box>

        {/**MillHouse */}
        <Box
          sx={{
            display: "flex",
            flexDirection:{xs:"column",md:"row"},
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            minHeight: "100vh",
          }}
        >
          
          
          <Box sx={{ width: {xs:"100vw",md:"50vw"},display:"flex",flexDirection:"column",alignItems:{xs:"center",md:"flex-end"} }} data-aos="fade-right">
          <Box sx={{width:{xs:"80vw",md:"40vw"},display:"flex",flexDirection:"column",alignItems:{md:"flex-end"},justifyContent:"flex-end",margin:"2vh 0",marginRight:{md:"4vw"}}} >
            <Typography
              variant="h2"
              sx={{ fontSize: {xs:"48px",md:"64px"}, fontWeight: "bold",color:"#009688" }}
            >
              MillHouse
            </Typography>
            <Typography variant="p" sx={{ maxWidth: {md:"40vw"}, fontSize: {xs:"16px",md:"22px"} }}>
              Cargon service for product distributors. That helps manage all the necessities for a distributor including live tracking of riders
            </Typography>
            </Box>
            <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:{md:"flex-end"}, margin:"2vh 0",width: {xs:"80vw",md:"40vw"},marginRight:{md:"4vw"}}}>
            <Button variant="contained" sx={{backgroundColor:"#009688"}}><Typography sx={{fontSize:{xs:"24px",md:"36px"},fontWeight:"bold"}}>VISIT MILLHOUSE </Typography></Button>
            </Box>
          </Box>
          <Box sx={{width:"50vw",height:{xs:"40vh",md:"100vh"},display:{xs:"flex"},alignItems:"center",justifyContent:"center",backgroundColor:{md:"#80cbc4"}}}>
          <Box
            component="img"
            src="https://i.postimg.cc/xdC8BJkx/Factorymdpi.png"
            sx={{ width: {xs:"75vw", md:"25vw"}  }}
            data-aos="fade-left"
          />
          </Box>
        </Box>
          
        {/**MedChant */}
        <Box
          sx={{
            display: "flex",
            flexDirection:{xs:"column",md:"row"},
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            minHeight: "100vh",
            backgroundColor:{xs:"#ffab91",md:"white"}
          }}
        >
          
          <Box sx={{width:"50vw",height:{xs:"45vh",md:"100vh"},display:{xs:"flex"},alignItems:"center",justifyContent:"center",backgroundColor:{md:"#ffab91"}}}>
          <Box
            component="img"
            src="https://i.postimg.cc/2jvypf6D/Shopmdpi.png"
            sx={{ width: {xs:"75vw",md:"25vw"} }}
            data-aos="fade-left"
          />
          </Box>
          <Box sx={{ width: {xs:"100vw",md:"50vw"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }} data-aos="fade-right">

            <Box sx={{ width: {xs:"80vw",md:"40vw"} ,margin:"2vh 0",marginLeft:{md:"2vw"}}}>
                <Typography
                variant="h2"
                sx={{ fontSize: {xs:"48px",md:"64px"}, fontWeight: "bold",color:"#ff5722" }}
                >
                MedChant
                </Typography>
                <Typography variant="p" sx={{ maxWidth: "40vw", fontSize: {xs:"16px",md:"22px"} }}>
                Cargon service for product distributors. That helps manage all the necessities for a distributor including live tracking of riders
                </Typography>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:{xs:"center",md:"flex-start"},flexWrap:"wrap", margin:"2vh 0",width: {xs:"80vw",md:"40vw"}}}>
                <Button variant="contained" sx={{backgroundColor:"#ff5722"}}><Typography sx={{fontSize:{xs:"24px",md:"36px"},fontWeight:"bold"}}>VISIT MEDCHANT </Typography></Button>
            </Box>
          </Box>
        </Box>

        {/**MedDepot */}
        <Box
          sx={{
            display: "flex",
            flexDirection:{xs:"column",md:"row"},
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            minHeight: "100vh",
            
          }}
        >
          
          
          <Box sx={{ width: {xs:"100vw",md:"50vw"},display:"flex",flexDirection:"column",alignItems:{xs:"center",md:"flex-end"} }} data-aos="fade-right">
          <Box sx={{width:{xs:"80vw",md:"40vw"},display:"flex",flexDirection:"column",alignItems:{md:"flex-end"},justifyContent:"flex-end",margin:"2vh 0",marginRight:{md:"4vw"}}} >
            <Typography
              variant="h2"
              sx={{ fontSize: {xs:"48px",md:"64px"}, fontWeight: "bold",color:"#ff9800" }}
            >
                MedDepot
            </Typography>
            <Typography variant="p" sx={{ maxWidth: {md:"40vw"}, fontSize: {xs:"16px",md:"22px"} }}>
              Cargon service for product distributors. That helps manage all the necessities for a distributor including live tracking of riders
            </Typography>
            </Box>
            <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:{md:"flex-end"}, margin:"2vh 0",width: {xs:"80vw",md:"40vw"},marginRight:{md:"4vw"}}}>
            <Button variant="contained" sx={{backgroundColor:"#ff9800"}}><Typography sx={{fontSize:{xs:"24px",md:"36px"},fontWeight:"bold"}}>VISIT MEDDEPOT </Typography></Button>
            </Box>
          </Box>
          <Box sx={{width:"50vw",height:{xs:"40vh",md:"100vh"},display:{xs:"flex"},alignItems:"center",justifyContent:"center",backgroundColor:{md:"#ffcc80"}}}>
          <Box
            component="img"
            src="https://i.postimg.cc/d3M0755p/Warehousemdpi.png"
            sx={{ width: {xs:"75vw", md:"25vw"}  }}
            data-aos="fade-left"
          />
          </Box>
        </Box>
          {/**Apothecary */}
        <Box
        sx={{
          display: "flex",
          flexDirection:{xs:"column",md:"row"},
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        
        <Box sx={{width:"50vw",height:{xs:"40vh",md:"100vh"},display:{xs:"flex"},alignItems:"center",justifyContent:"center",backgroundColor:{md:"#90caf9"}}}>
        <Box
          component="img"
          src="https://i.postimg.cc/8PmC5BMX/Apothecarymdpi.png"
          sx={{ width:{xs:"75vw", md:"25vw"} }}
          data-aos="fade-left"
        />
        </Box>
        <Box sx={{ width: {xs:"100vw",md:"50vw"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }} data-aos="fade-right">

          <Box sx={{ width: {xs:"80vw",md:"40vw"} ,margin:"2vh 0",marginLeft:{md:"2vw"}}}>
              <Typography
              variant="h2"
              sx={{ fontSize: {xs:"48px",md:"64px"}, fontWeight: "bold",color:"#2196f3" }}
              >
              Apothecary
              </Typography>
              <Typography variant="p" sx={{ maxWidth: "40vw", fontSize: {xs:"16px",md:"22px"} }}>
              Cargon service for product distributors. That helps manage all the necessities for a distributor including live tracking of riders
              </Typography>
          </Box>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:{xs:"center",md:"flex-start"},flexWrap:"wrap", margin:"2vh 0",width: {xs:"80vw",md:"40vw"}}}>
          <Button variant="contained" sx={{backgroundColor:"#2196f3"}}><Typography sx={{fontSize:{xs:"24px",md:"36px"},fontWeight:"bold"}}>VISIT APOTHECARY </Typography></Button>
          </Box>
        </Box>
      </Box>
















        
      </Box>
      <Footer/>
      
    </Paper>
  );
}

