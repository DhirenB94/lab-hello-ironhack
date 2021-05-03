import React from 'react';
import Components from './components/Components';
import Declarative from './components/Declarative';
import Jsx from './components/Jsx';
import Singleway from './components/Singleway';
import './app.css';


function App() {
    return (
        <div className="app">
            <div className="intro">
                <div className="navbar">
                    <div className="ironhack-logo">
                        <img src="public/images/ironhack-logo.svg" />
                    </div>
                    <div className="menu-icon">
                        <img src="public/images/menu-top.svg" />
                    </div>
                </div>

                <div className="react">
                    <img src="public/images/react-logo.svg" className="logo-1"/>
                    <img src="public/images/react-logo.svg" className="logo-2" />
                    <img src="public/images/react-logo.svg" className="logo-3" />
                    
                </div>

                <div className="intro-text">
                    <h1 className="heading">Say hello to ReactJS</h1>
                    <article className="heading-caption">You will learn how to use the most popular frontend library,
                        and become a super Ninja developer.</article>
                    <h3 className="awesome">Awesome!</h3>
                </div>
            </div>

            <div className="icons">
                <div className="box">
                    <Declarative />
                </div>
                <div className="box">
                    <Components />
                </div>
                <div className="box">
                    <Singleway />
                </div>
                <div className="box">
                    <Jsx />    
                </div>
            </div>
        </div>
    )
}
export default App;

