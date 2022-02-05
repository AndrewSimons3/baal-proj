import React from 'react';
import './App.css';
import { getLCP, getFID, getCLS } from 'web-vitals';
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid';
import Main from './components/Main';
import Features from './components/Features';

if (typeof window !== 'undefined') {
	getCLS(console.log);
	getFID(console.log);
	getLCP(console.log);

	const Axe = require('@axe-core/react');
	Axe(React, 1000);
}

function App() {
	return (
		<div className='App'>
      <Main />
      <Features />
		</div>
	);
}

export default App;
