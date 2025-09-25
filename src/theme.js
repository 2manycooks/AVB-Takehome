import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8c34eb", // basically twitch purple
    },
    secondary: {
      main: "#a39ea8", // wasn't sure what other color to pick, so just chose first shade of grey i landed on
    },
  },
});

export default theme;
