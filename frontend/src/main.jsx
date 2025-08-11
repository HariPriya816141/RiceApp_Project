import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/theme.css"
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "/node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import 'antd/dist/reset.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './store/context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <AuthProvider> {/* provides user login status and role to components */}
    <App/>  {/* child component for AuthProvider */}
    </AuthProvider>
    </BrowserRouter>
  <ToastContainer position="top-center" autoClose={2000} />
  </>
)
