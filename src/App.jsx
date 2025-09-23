import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoutes from './routes/PrivateRoutes';
import Loader from './components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Player = lazy(()=>import('./pages/Player/Player'));
const App = () => {
  const { loading} = useAuth();
  if (loading) {
    return <Loader/>
  }

  return (
    <>
      <Suspense fallback={<Loader/>}>
      <Routes>
        {/* Public Route */}
        <Route path="/login"  element={<Login />} />

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/player/:id" element={<Player />} />
        </Route>
      </Routes>
    </Suspense>
    <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  )
}

export default App