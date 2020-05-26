import React, { useState, useEffect } from 'react';
import './App.css';

import useFetch from './hooks/use-fetch';

import CityTerritoryContainer from './components/city-territory-container/city-territory-container';

function App() {
	
	const [ loading, setLoading ] = useState(true);
	const [ counts, setCounts ] = useState();

	 // Temp hard coded
	 const categories = [
        "/d/software-qa-dba-etc/search/sof",  // software
        "/d/web-html-info-design/search/web",  // web / info design
        "/d/computer-gigs/search/cpg",  // gigs - computer 
	];
	
	const getCounts = useFetch('http://localhost:8000/counts',
	{
		method: 'GET',
		headers: {"Content-Type": "application/json"}
	});
		
	useEffect(() => {
		setCounts(getCounts.response);
		if(counts) {
			setLoading(false)
		}
	}, [getCounts])

	if(!loading) {
		return (
			<div className="App">
	
				{counts.map((state, i) => 
					<CityTerritoryContainer 
						index={i}
						country={state.city_country}
						territory={state.territory_name}
						cityCount={state.total}
						categories={categories}
						useFetch={useFetch}
					/>
				)}
				
			</div>
		);
	}
	return (
		<div className="fullscreen-loading">Loading...</div>
	);
}

export default App;
