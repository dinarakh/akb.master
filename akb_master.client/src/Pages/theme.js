import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
            html, body {
              min-height: 100vh;
              margin: 0;
            }
          `,
    },
  },
});

export default theme;
