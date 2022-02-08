import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import classes from './Main.module.css';
import arrow from '../images/arrow.svg';
import '@fontsource/plus-jakarta-sans';
import flower from '../images/flower.svg';
import logo from '../images/logo.svg';
import icon2 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';
import icon4 from '../images/icon4.svg';

const Main = () => {

	return (
		<div className={classes.wrapper}>
			<div className={classes['content-container']}>
				<header>
					<div className={classes['nav-container']}>
						<img src={logo} alt='logo' />
						<div className={classes['logo-title']}>Cardo</div>
						<ul>
							<li>Deposit</li>
							<li>Dashboard</li>
							<li>Company</li>
							<li>Pricing</li>
						</ul>
						<MenuIcon fontSize='large' className={classes.burger} />
					</div>
				</header>
				<main>
					<div className={classes['main-container']}>
						<img className={classes.flower} src={flower} alt='flower' />
						<h1 className={classes.title}>
							All the <strong>experience</strong> <br />
							in the new credit card
						</h1>
						<img className={classes.arrow} src={arrow} alt='arrow' />
						<p className={classes.summary}>
							Simple transfers, payments for utilities, functional statemement,
							card settings, for which you used to have to go too the brach
							oonline-banking
						</p>

						<div className={classes['btn-container']}>
							<button className={classes.btn}>Order a card</button>
							<button className={classes['btn-secondary']}>
								How it works{' '}
							</button>
						</div>
						<div className={classes['active-bar']}>
							<div className={classes['bar-section']}>
								<h2>Active Users</h2>
								<p>5000+</p>
							</div>
							<div className={classes['bar-section']}>
								<h2>Download</h2>
								<p>30.3k</p>
							</div>
							<div className={classes['bar-section']}>
								<h2>Reviews</h2>
								<p>1200+</p>
							</div>
						</div>
					</div>
				</main>
			</div>

      
			<div className={classes['background-container']}>
				<div className={classes['credit-card']}>
					<div className={classes['top-row']}>
						<div className={classes.col1}>
							<img className={classes['icon-1']} src={logo} alt='cardo logo' />
							<h3>Cardo</h3>
						</div>
						<div className={classes.col2}>
							<img
								className={classes['icon-2']}
								src={icon2}
								alt='bottom icon'
							/>
							<img
								className={classes['icon-3']}
								src={icon3}
								alt='bottom left icon'
							/>
						</div>
					</div>
					<div className={classes.name}>
						<p>
							Mauricio Lopez <br />
							5678
						</p>
						<img src={icon4} alt='bottom right icon' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
