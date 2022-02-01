import Modal from 'react-modal';
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks';
import AppRoutes from './routes';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
          <Header />
          <AppRoutes />
          <Footer />
          <GlobalStyle />
          <ToastContainer />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
