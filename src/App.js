import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './styles/global';
import AppProvider from './hooks';
import AppRoutes from './routes';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
          <Header />
          <AppRoutes />
          <Footer />
          <GlobalStyle />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
