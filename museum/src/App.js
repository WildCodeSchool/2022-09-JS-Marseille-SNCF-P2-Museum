import "./App.css";
import PrimaryContainer from "./components/PrimaryContainer/PrimaryContainer";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#AE8E5F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E8DBCB",
      contrastText: "#000",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <PrimaryContainer />
        <Gallery />
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default App;
