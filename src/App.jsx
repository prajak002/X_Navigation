import './App.scss'
import 'boxicons/css/boxicons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Committee from './pages/Committee'
import AboutUs from './pages/AboutUs'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='committee' element={<Committee />} />
                    <Route path='AboutUs' element={<AboutUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
