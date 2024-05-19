import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { Navbar } from "../../components";

const Pie = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Navbar />
      <Box m={isMobile ? "10px" : "20px"} className="pt-14">
        <Header title="Pie Chart" subtitle="Simple Pie Chart" />
        <Box height={isMobile ? "50vh" : "75vh"}>
          <PieChart />
        </Box>
      </Box>
    </div>
  );
};

export default Pie;
