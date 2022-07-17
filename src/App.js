import { Route, Routes } from "react-router-dom";
import HomeIndex from "./pages/Home";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/auth/LoginPage";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import themes from "./theme";
import { Container } from "@mui/system";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
          bgcolor: "background.default",
        }}
      >
        <Navbar />
        <div className="App">
          <Box sx={{ p: 3 }}>
            <Routes>
              <Route path="/home" element={<HomeIndex />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
          </Box>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
