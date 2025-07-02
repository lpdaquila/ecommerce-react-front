import './index.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { SidebarProvider } from './contexts/sidebar-context.tsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </StrictMode>,
)
