import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import themeConfigs from './configs/theme.config.js';

import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes/routes.jsx';

import PageWrapper from './components/common/PageWrapper';
import MainLayout from './components/layout/MainLayout';

const App = () => {
  const { themeMode } = useSelector((state) => state.themeMode);
  console.log(themeMode);
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
      />
      <CssBaseline />

      {/* app routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map((route, index) =>
              route.index ? (
                <Route
                  index
                  key={index}
                  element={
                    route.state ? (
                      <PageWrapper state={route.state}>
                        {route.element}
                      </PageWrapper>
                    ) : (
                      route.element
                    )
                  }
                />
              ) : (
                <Route
                  path={route.path}
                  key={index}
                  element={
                    route.state ? (
                      <PageWrapper state={route.state}>
                        {route.element}
                      </PageWrapper>
                    ) : (
                      route.element
                    )
                  }
                />
              )
            )}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* app routes */}
    </ThemeProvider>
  );
};

export default App;
