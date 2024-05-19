import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { Navbar } from "../../components";

const Bar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  
  return (
    <div>
      <Navbar />
      <Box 
        m={isMobile ? "10px" : "20px"} 
        className="pt-14"
      >
        <Header 
          title="Bar Chart" 
          subtitle="Simple Bar Chart" 
        />
        <Box 
          height={isMobile ? "50vh" : "75vh"} 
        >
          <BarChart />
        </Box>
      </Box>
    </div>
  );
};

export default Bar;
