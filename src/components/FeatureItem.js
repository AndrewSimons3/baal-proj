import React from 'react';
import classes from './FeatureItem.module.css';

const FeatureItem = (props) => {
  return (
		<li className={classes.feature}>
			<h3>{`${props.title}`}</h3>
			<p>{props.description}</p>
			<button>
				<a href='{props.link}'>{props.text}</a>
			</button>
		</li>
	);
};

export default FeatureItem;
