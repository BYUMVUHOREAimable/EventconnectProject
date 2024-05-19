import { Box, useTheme, useMediaQuery } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Navbar } from "../../components";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Navbar />
      <Box m={isMobile ? "10px" : "20px"} className="pt-14">
        <Header title="Geography" subtitle="Simple Geography Chart" />

        <Box
          height={isMobile ? "50vh" : "75vh"}
          border={`1px solid ${colors.grey[100]}`}
          borderRadius="4px"
        >
          <GeographyChart />
        </Box>
      </Box>
    </div>
  );
};

export default Geography;
