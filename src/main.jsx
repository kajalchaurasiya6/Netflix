import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AuthProvider } from './context/AuthContext.jsx';
import FallbackComponent from './components/Errorboundary/ErrorBoundary.jsx';
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary      
     FallbackComponent={FallbackComponent}
>
    <BrowserRouter>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AuthProvider>
    </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
