import React from 'react';
import Header from '../../components/Header/Header';
import style from '../HomePage/HomePage.css';
import Logo from './Logo/backgroundimg.jpg';

function HomePage(props) {
    return (
        <div className="component">
            <Header />
            <p className="center">Welcome to my recipe app</p>
            <img src={Logo} height="100%" width="100%"/>
        </div>
    );
    }
    export default HomePage;