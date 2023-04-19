
import './App.css'
import Header from './components/Header'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutGoods from './pages/AboutGoods'
import Liked from './pages/Liked'
import Basket from './pages/Basket'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route  path='/' element={<Home />} />
        <Route  path='/product/:id' element={<AboutGoods />} />
        <Route  path='/liked' element={<Liked />} />
        <Route  path='/basket' element={<Basket />} />
      </Route>
    </Routes>
  )
}

export default App
