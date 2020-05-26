import React, { useState, useEffect } from 'react';
import './App.css';

import useFetch from './hooks/use-fetch';

function App() {
	
	const [ loading, setLoading ] = useState(true);
	const [ counts, setCounts ] = useState();
	const [ currentTerritory, setCurrentTerritory ] = useState();
	const [ cityLinks, setCityLinks ] = useState();

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
	
	const getCitiesInState = useFetch('http://localhost:8000/cities/links',
	{
		method: 'POST',
		body: JSON.stringify({ state: currentTerritory }),
		headers: {"Content-Type": "application/json"}
	});
	
	useEffect(() => {
		setCounts(getCounts.response);
		if(counts) {
			setCurrentTerritory(counts[0].territory_name)
		}
	}, [getCounts])

	return (
		<div>this is a div</div>
	);
}

export default App;
