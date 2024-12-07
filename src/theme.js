import { blue, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingLeft: "0",
          paddingRight: "0",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: blue,  //TODO: Change to pokerfreunde blue
    secondary: grey,
  },
});

export default theme;
