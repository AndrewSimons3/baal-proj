import React from 'react';
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid';
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
      const slicedData = responseData.slice(0, 6);
			setFeatures(slicedData);

			const loadedFeatures = [];

			for (const key in slicedData) {
				loadedFeatures.push({
					id: key,
					title: slicedData[key].title,
					description: slicedData[key].description,
					text: slicedData[key].button.text,
					link: slicedData[key].button.link,
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

	console.log(featuresList);

	return (
		<section className={classes['features-wrapper']}>
			<div className={classes['features-title']}>
				<h1>Experience the Cardo</h1>
			</div>
			<div className={classes['grid-container']}>
				<GridRow wrap='wrap'>{featuresList}</GridRow>
			</div>
		</section>
	);
};

export default Features;
