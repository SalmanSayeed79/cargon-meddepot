import React,{useContext} from 'react'
import './Animations/Animation.css'
import {BrowserRouter, Navigate, Route,Routes,useLocation} from 'react-router-dom'
import {createTheme} from "@mui/material/styles"
import { ThemeProvider } from '@mui/system';
import Dashboard from './Pages/Dashboard';
import { amber, blueGrey, green, indigo, orange, purple, red, teal, yellow } from '@mui/material/colors';
import Orders from './Pages/Orders';
import DistributorList from './Pages/DistributorList';
import Products from './Pages/Products';
import Inventory from './Pages/Inventory';
import Factory from './Pages/Factory';
import AdminDetails from './Pages/AdminDetails';
import { ColorContextProvider } from './Context/ColorModeContext';
import ProductDetails from './Pages/ProductDetails';
import AddBatch from './Pages/AddBatch';
import ScrollHelper from './Context/ScrollHelper'
import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';
import Landing from './Pages/Landing';
import { AdminIDContext, IDContextProvider } from './Context/IDContextProvider';
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import OrderDetails from './Pages/OrderDetails';
function App() {
  const adminIDSaved=useContext(AdminIDContext)
  return (
    <AuthContextProvider>
    <IDContextProvider>
      <ColorContextProvider>
        
        <BrowserRouter>
            <ScrollHelper/>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/create_acc" element={<CreateAccount/>}/>
              <Route path="/home" element= {<ProtectedRoute><Dashboard/> </ProtectedRoute>}/>
              <Route path="/landing" element={<ProtectedRoute><Landing/></ProtectedRoute>}/>
              <Route path="/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>}/>
              <Route path="/distributors" element={<ProtectedRoute><DistributorList/></ProtectedRoute>}/>
              <Route path="/products" element={<ProtectedRoute><Products/></ProtectedRoute>}/>
              <Route path="/product/:id" element={<ProtectedRoute><ProductDetails/></ProtectedRoute>}/>
              <Route path="/order/:id" element={<ProtectedRoute><OrderDetails/></ProtectedRoute>}/>
              <Route path="/inventory" element={<ProtectedRoute><Inventory/></ProtectedRoute>}/>
              <Route path="/factory" element={<ProtectedRoute><Factory/></ProtectedRoute>}/>
              <Route path="/admin" element={<ProtectedRoute><AdminDetails/></ProtectedRoute>}/>
              <Route path="/addbatch" element={<ProtectedRoute><AddBatch/></ProtectedRoute>}/>
              
            </Routes>
            
        </BrowserRouter>
      </ColorContextProvider>
    </IDContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
