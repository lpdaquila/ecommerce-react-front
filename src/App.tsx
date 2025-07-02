import { Provider } from 'react-redux';
import './App.css';
import { store } from './services/redux/store';
import { RouterProvider } from 'react-router';
import router from './routes/router';
import ThemeProvider from './components/themes/theme-provider';

function App() {

  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  )
}

export default App;
