import React from 'react';
import classes from './FeatureItem.module.css';

const FeatureItem = (props) => {
  return (
	
				<div className={classes.feature}>
					<h3>{`${props.title}`}</h3>
					<p>{props.description}</p>
					<button>
						<a href='{props.link}'>Learn More</a>
					</button>
				</div>
		
	);
};

export default FeatureItem;
