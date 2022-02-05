import React from 'react';
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
				<div className={classes['nav-container']}>
					<img src={logo} />
					<div className={classes['logo-title']}>Cardo</div>
					<ul>
						<li>Deposit</li>
						<li>Dashboard</li>
						<li>Company</li>
						<li>Pricing</li>
					</ul>
				</div>

				<div className={classes['main-container']}>
					<img className={classes.flower} src={flower} />
					<h1 className={classes.title}>
						All the <strong>experience</strong> <br />
						in the new credit card
					</h1>
					<img className={classes.arrow} src={arrow} />
					<p className={classes.summary}>
						Simple transfers, payments for utilities, functional statemement,
						card settings, for which you used to have to go too the brach
						oonline-banking
					</p>
					<div className={classes['btn-container']}>
						<button className={classes.btn}>Order a card</button>
						<button className={classes['btn-secondary']}>How it works ></button>
					</div>
					<div className={classes['active-bar']}>
						<div className={classes['bar-section']}>
							<h3>Active Users</h3>
							<p>5000+</p>
						</div>
						<div className={classes['bar-section']}>
							<h3>Download</h3>
							<p>30.3k</p>
						</div>
						<div className={classes['bar-section']}>
							<h3>Reviews</h3>
							<p>1200+</p>
						</div>
					</div>
				</div>
			</div>

			<div className={classes['background-container']}>
				<div className={classes['credit-card']}>
					<div className={classes['top-row']}>
						<div className={classes.col1}>
							<img className={classes['icon-1']} src={logo} />
							<h3>Cardo</h3>
						</div>
						<div className={classes.col2}>
							<img className={classes['icon-2']} src={icon2} />
							<img className={classes['icon-3']} src={icon3} />
						</div>
					</div>
					<div className={classes.name}>
						<p>
							Mauricio Lopez <br />
							5678
						</p>
						<img className src={icon4} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
