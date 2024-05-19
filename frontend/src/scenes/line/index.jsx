import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { Navbar } from "../../components";

const Line = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Navbar />
      <Box m={isMobile ? "10px" : "20px"} className="pt-14">
        <Header title="Line Chart" subtitle="Simple Line Chart" />
        <Box height={isMobile ? "60vh" : "75vh"}>
          <LineChart />
        </Box>
      </Box>
    </div>
  );
};

export default Line;
