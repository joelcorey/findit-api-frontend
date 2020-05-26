import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	
	const [ loading, setLoading ] = useState(true);
	// Get how many cities are in each state, not entirely necessary
	const [ counts, setCounts ] = useState();
	const [ currentTerritory, setCurrentTerritory ] = useState();
	const [ cityLinks, setCityLinks ] = useState();

	 // Temp hard coded
	 const categories = [
        "/d/software-qa-dba-etc/search/sof",  // software
        "/d/web-html-info-design/search/web",  // web / info design
        "/d/computer-gigs/search/cpg",  // gigs - computer 
	];
	
	async function fetchCountsData() {
        // send HTTP request
        const response = await fetch('http://localhost:8000/counts',
			{
				method: 'GET',
				headers: {"Content-Type": "application/json"}
			});
        const data = await response.json();
		//console.log(data);
		setCurrentTerritory("Oregon")
		setCounts(data);
		
		setLoading(false);
		
	}	

	// Get list of cities to build necessary links for scraping
	// Passed down as a prop
    async function fetchCitiesInStateUrls() {
        // send HTTP request
        const response = await fetch('http://localhost:8000/cities/links',
        {
			method: 'POST',
			body: JSON.stringify({ state: currentTerritory }),
            headers: {"Content-Type": "application/json"}
        });
        const stateCityJobLinks = await response.json();
        setCityLinks(stateCityJobLinks);
	}

	useEffect(() => {
		fetchCountsData();
	}, [])

	useEffect(() => {
		fetchCitiesInStateUrls();
	}, [counts])

	return (
		<div>this is a div</div>
	);
}

export default App;
