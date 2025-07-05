import './index.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { SidebarProvider } from './contexts/sidebar-context.tsx';
import { ThemeContextProvider } from './contexts/theme-context.tsx';
import { Provider } from 'react-redux';
import { store } from './services/redux/store.ts';

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <ThemeContextProvider>
      <SidebarProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SidebarProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
