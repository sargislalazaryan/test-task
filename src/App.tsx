import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// import components
import Home from './pages/home';
import Users from './pages/users';
import NotFound from './pages/notFound';
import Header from './components/header';

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
