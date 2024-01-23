import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Order from './pages/Order/Order'
import Cart from './pages/cart/Cart'
import NoPage from './pages/nopage/NoPage'
import Dashboard from './pages/admin/dashboard/Dashboard'
import MyState from './context/data/myState'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import ProductInfo from './pages/productInfo/ProductInfo'
import UpdateProduct from './pages/admin/page/UpdateProduct'
import AddProduct from './pages/admin/page/AddProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/AllProducts'


function App() {


  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<ProtectedRoute>
            <Order />
          </ProtectedRoute>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={<ProtectedRouteForAdmin>
            <Dashboard />
          </ProtectedRouteForAdmin>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/productinfo/:id' element={<ProductInfo />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/addproduct' element={<ProtectedRouteForAdmin>
            <AddProduct />
          </ProtectedRouteForAdmin>} />
          <Route path='/updateproduct' element={<ProtectedRouteForAdmin>
            <UpdateProduct />
          </ProtectedRouteForAdmin>} />
          <Route path='/allproducts' element={<Allproducts />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>

    </MyState>
  )
}

export default App
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}
export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if (admin.user.email === "jenil1@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }

}