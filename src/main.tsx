import './index.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { SidebarProvider } from './contexts/sidebar-context.tsx';
import { ThemeContextProvider } from './contexts/theme-context.tsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <ThemeContextProvider>

      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
