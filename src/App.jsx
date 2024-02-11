import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componenets/Header/Header'
import Banner from './componenets/Banner/Banner'
import Product from './componenets/Product/Product'
import Gallery from './componenets/Gallery/Gallery'
import Popular from './componenets/Popular-itams/Popular-iteams'
import WatchArea from './componenets/watch-area/Watch-area'
import Shop from './componenets/Shop/Shop'
import Footer from './componenets/Footer/Footer'
import Video from './componenets/Video/Video'
import { Route, Routes } from 'react-router'
import ContactUs from './componenets/Container/Contact-us/ContactUs'
import Home from './componenets/Container/Home/Home'
import About from './componenets/Container/About/About'
import Blog from './componenets/Container/Blog/Blog'
import WatchShop from './componenets/Container/WatchShop/WatchShop'
import CartList from './componenets/Container/CartList/CartList'
import Login from './componenets/Container/Login/Login'
import { Provider } from 'react-redux'
import { store } from './store'



function App() {

    return (
        <>
        <Provider store={store}>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/About' element={<About />}></Route>
                    <Route path='/ContactUs' element={<ContactUs />}></Route>
                    <Route path='/Blog' element={<Blog />}></Route>
                    <Route path='/WatchShop' element={<WatchShop />}></Route>
                    <Route path='/CartList' element={<CartList />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                </Routes>
            </main>
            <Footer />
        </Provider>
        </>
    )

}

export default App
