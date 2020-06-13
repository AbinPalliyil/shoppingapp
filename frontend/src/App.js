import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

import './App.css';

function App() {
	const openSideMenu = () => {
		document.querySelector('.sidebar').classList.add('open');
	};

	const closeSideMenu = () => {
		document.querySelector('.sidebar').classList.remove('open');
	};
	return (
		<BrowserRouter>
			<div className='grid-container'>
				<header className='header'>
					<div className='brand'>
						<button onClick={openSideMenu}>&#9776;</button>
						<Link to="/" >Amazona</Link>
					</div>
					<div className='header-links'>
						<a href='card.html'>cart</a>
						<a href='signin.html'>signin</a>
					</div>
				</header>

				<aside className='sidebar'>
					<h3>Shopping Categories</h3>
					<button
						className='sidebar-closemenu'
						onClick={closeSideMenu}>
						x
					</button>
					<ul>
						<li>
							<a href='index.html'>pants</a>
						</li>
						<li>
							<a href='index.html'>shirts</a>
						</li>
					</ul>
				</aside>

				<main className='main'>
					<div className='content'>
						<Route
							path='/products/:id'
							exact={true}
							component={ProductScreen}
						/>
						<Route path='/' exact={true} component={HomeScreen} />
					</div>
				</main>
				<footer className='footer'>All right reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
