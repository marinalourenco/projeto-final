import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './styles/global';
import AppProvider from './hooks';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
          <AppRoutes />
          <GlobalStyle />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
