import React from 'react';
import './App.css';

function App() {
	const openSideMenu = () => {
		document.querySelector('.sidebar').classList.add('open');
	};

	const closeSideMenu = () => {
		document.querySelector('.sidebar').classList.remove('open');
	};
	return (
		<div className='grid-container'>
			<header className='header'>
				<div className='brand'>
					<button onClick={openSideMenu}>&#9776;</button>
					<a href='index.html'>Amazona</a>
				</div>
				<div className='header-links'>
					<a href='card.html'>cart</a>
					<a href='signin.html'>signin</a>
				</div>
			</header>

			<aside className='sidebar'>
				<h3>Shopping Categories</h3>
				<button className='sidebar-closemenu' onClick={closeSideMenu}>
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
					<ul className='products'>
						<li>
							<div className='product'>
								<img
									className='product-image'
									src='/images/shirtslim.jpg'
									alt='shirt'
								/>
								<a href='productItem.html'>
									<div className='product-name'>
										{' '}
										Slim Shirt
									</div>
								</a>
								<div className='product-brand'>Nike</div>
								<div className='product-price'>$60</div>
								<div className='product-rating'>
									4.5 stars (10 reviews)
								</div>
							</div>
						</li>
						<li>
							<div className='product'>
								<img
									className='product-image'
									src='/images/shirtslim.jpg'
									alt='shirt'
								/>
								<a href='productItem.html'>
									<div className='product-name'>
										{' '}
										Slim Shirt
									</div>
								</a>
								<div className='product-brand'>Nike</div>
								<div className='product-price'>$60</div>
								<div className='product-rating'>
									4.5 stars (10 reviews)
								</div>
							</div>
						</li>{' '}
						<li>
							<div className='product'>
								<img
									className='product-image'
									src='/images/shirtslim.jpg'
									alt='shirt'
								/>
								<a href='productItem.html'>
									<div className='product-name'>
										{' '}
										Slim Shirt
									</div>
								</a>
								<div className='product-brand'>Nike</div>
								<div className='product-price'>$60</div>
								<div className='product-rating'>
									4.5 stars (10 reviews)
								</div>
							</div>
						</li>{' '}
						<li>
							<div className='product'>
								<img
									className='product-image'
									src='/images/shirtslim.jpg'
									alt='shirt'
								/>
								<a href='productItem.html'>
									<div className='product-name'>
										{' '}
										Slim Shirt
									</div>
								</a>
								<div className='product-brand'>Nike</div>
								<div className='product-price'>$60</div>
								<div className='product-rating'>
									4.5 stars (10 reviews)
								</div>
							</div>
						</li>{' '}
						<li>
							<div className='product'>
								<img
									className='product-image'
									src='./images/shirtslim.jpg'
									alt='shirt'
								/>
								<a href='productItem.html'>
									<div className='product-name'>
										{' '}
										Slim Shirt
									</div>
								</a>
								<div className='product-brand'>Nike</div>
								<div className='product-price'>$60</div>
								<div className='product-rating'>
									4.5 stars (10 reviews)
								</div>
							</div>
						</li>{' '}
						<li>
							<div className='product'>
								<img
									className='product-image'
									src='./images/shirtslim.jpg'
									alt='shirt'
								/>
								<a href='productItem.html'>
									<div className='product-name'>
										{' '}
										Slim Shirt
									</div>
								</a>
								<div className='product-brand'>Nike</div>
								<div className='product-price'>$60</div>
								<div className='product-rating'>
									4.5 stars (10 reviews)
								</div>
							</div>
						</li>{' '}
						<li>
							<div className='product'>
								<img
									className='product-image'
									src='./images/shirtslim.jpg'
									alt='shirt'
								/>
								<a href='productItem.html'>
									<div className='product-name'>
										{' '}
										Slim Shirt
									</div>
								</a>
								<div className='product-brand'>Nike</div>
								<div className='product-price'>$60</div>
								<div className='product-rating'>
									4.5 stars (10 reviews)
								</div>
							</div>
						</li>{' '}
						<li>
							<div className='product'>
								<img
									className='product-image'
									src='./images/shirtslim.jpg'
									alt='shirt'
								/>
								<a href='productItem.html'>
									<div className='product-name'>
										{' '}
										Slim Shirt
									</div>
								</a>
								<div className='product-brand'>Nike</div>
								<div className='product-price'>$60</div>
								<div className='product-rating'>
									4.5 stars (10 reviews)
								</div>
							</div>
						</li>{' '}
						<li>
							<div className='product'>
								<img
									className='product-image'
									src='./images/shirtslim.jpg'
									alt='shirt'
								/>
								<a href='productItem.html'>
									<div className='product-name'>
										{' '}
										Slim Shirt
									</div>
								</a>
								<div className='product-brand'>Nike</div>
								<div className='product-price'>$60</div>
								<div className='product-rating'>
									4.5 stars (10 reviews)
								</div>
							</div>
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}

export default App;
