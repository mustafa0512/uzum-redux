
import './App.css'
import Header from './components/Header'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutGoods from './pages/aboutGoods'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route  path='/' element={<Home />} />
        <Route  path='/product' element={<AboutGoods />} />
      </Route>
    </Routes>
  )
}

export default App
