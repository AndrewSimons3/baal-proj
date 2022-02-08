import React from 'react';
// import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid';
import classes from './Features.module.css';
// import FeatureItem from './FeatureItem';
import Card from '../UI/Card';
import FeatureItem from '../components/FeatureItem';
import { useEffect, useState } from 'react';

const Features = () => {
	const [features, setFeatures] = useState([]);

	useEffect(() => {
		const fetchFeatures = async () => {
			const response = await fetch(
				'https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf'
			);

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const responseData = await response.json();
			setFeatures(responseData);

			const loadedFeatures = [];

			for (const key in responseData) {
				loadedFeatures.push({
					id: key,
					title: responseData[key].title,
					description: responseData[key].description,
					text: responseData[key].button.text,
					link: responseData[key].button.link,
				});
			}
			setFeatures(loadedFeatures);
		};
		fetchFeatures().catch((error) => {
			throw new Error(error);
		});
	}, []);

	const featuresList = features.map((feature) => (
		<FeatureItem
			id={feature.id}
			key={feature.id}
			title={feature.title}
			description={feature.description}
			text={feature.text}
			link={feature.link}
		/>
  ));

  console.log(featuresList)

	return (
		<section className={classes['features-wrapper']}>
			<div className={classes['features-title']}>
				<h1>Experience the Cardo</h1>
			</div>
			<Card>
				<ul>{featuresList}</ul>
			</Card>
		</section>
	);
};

export default Features;
