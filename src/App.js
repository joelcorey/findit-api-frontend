import React, { useState, useEffect } from 'react';
import './App.css';

import CityTerritoryContainer from './components/city-territory-container/city-territory-container';

function App() {
	
	const [ loading, setLoading ] = useState(true);
	// Get how many cities are in each state, not entirely necessary
	const [ counts, setCounts ] = useState();
	// used to tell each cityTerritory that it is done loading when the currentTerritory changes
	const [ currentTerritory, setCurrentTerritory ] = useState();
	// master list of all cities, used to build category links per city
	const [ cityLinks, setCityLinks ] = useState();

	async function fetchCountsData() {
        // send HTTP request
        const response = await fetch('http://localhost:8000/counts',
        {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json();
		//console.log(data);
		setCurrentTerritory(data[0].territory_name);
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
