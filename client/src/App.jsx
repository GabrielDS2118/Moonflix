import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import themeConfigs from './configs/theme.config.js';

import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  const { themeMode } = useSelector((state) => state.themeMode);
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme={themeMode}
      >
        <CssBaseline />
      </ToastContainer>
    </ThemeProvider>
  );
};

export default App;
