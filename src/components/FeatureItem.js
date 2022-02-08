import React from 'react';
import classes from './FeatureItem.module.css';

const FeatureItem = (props) => {
  return (
	
				<div className={classes.feature}>
					<h2>{`${props.title}`}</h2>
					<p>{props.description}</p>
					
						<a href='{props.link}'>Learn More</a>
					
				</div>
		
	);
};

export default FeatureItem;
