import './App.css';
import { RouterProvider } from 'react-router';
import router from './routes/router';
import ThemeProvider from './components/themes/theme-provider';

function App() {

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
