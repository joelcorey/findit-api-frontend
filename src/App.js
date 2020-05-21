import React, { useState, useEffect } from 'react';
import './App.css';

import CityTerritoryContainer from './components/city-territory-container/city-territory-container';

function App() {
	
	const [ loading, setLoading ] = useState(true);
	const [ counts, setCounts ] = useState();

	async function fetchCountsData() {
        // send HTTP request
        const response = await fetch('http://localhost:8000/counts',
        {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json();
        console.log(data);
		setCounts(data);
		setLoading(false);
	}

	useEffect(() => {
        fetchCountsData();
    }, [])
	
	if(!loading) {
		return (
			<div className="App">
	
				{counts.map((state, i) => 
					<CityTerritoryContainer 
						index={i}
						country={state.city_country}
						territory={state.territory_name}
						cityCount={state.total}
					/>
				)}
				
			</div>
		);
	}
	return (
		<div className="App">Loading</div>
	)
	
}

export default App;
