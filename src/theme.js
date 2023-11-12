import { blue, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: blue,  //TODO: Change to pokerfreunde blue
    secondary: grey,
  },
});

export default theme;
