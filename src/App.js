import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import HomeIndex from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <HomeIndex />
    </>
  );
}

export default App;
