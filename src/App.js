import React, { useState, useEffect } from 'react';
import './App.css';

import useFetch from './hooks/use-fetch';

import CityTerritoryContainer from './components/city-territory-container/city-territory-container';

function App() {
	
	const [ loading, setLoading ] = useState(true);
	const [ counts, setCounts ] = useState();

	 // Temp hard coded
	 const categories = [
		//"/d/accounting-finance/search/acc", // accounting - finance
		//"/d/admin-office/search/ofc", // admin - office
		//"/d/architect-engineer-cad/search/egr", // architect - engineer - cad
		//"/d/art-media-design/search/med", // art - media - design
		//"/d/science-biotech/search/sci", // biotech - science
		//"/d/business-mgmt/search/bus", // business - mgmt
		//"/d/customer-service/search/csr", // customer service
		//"/d/education-teaching/search/edu", // education - teaching
		//"/d/et-cetera/search/etc", // et cetera
		//"/d/food-beverage-hospitality/search/fbh", // food - beverage - hospitality
		//"/d/general-labor/search/lab", // general labor
		//"/d/government/search/gov", // government
		//"/d/human-resource/search/hum", // human resources
		//"/d/legal-paralegal/search/lgl", // legal - paralegal
		//"/d/manufacturing/search/mnu", // manufacturing
		//"/d/marketing-advertising-pr/search/mar", // marketing - advertising - pr
		//"/d/healthcare/search/hea", // healthcare
		//"/d/nonprofit/search/npo", // nonprofit
		//"/d/real-estate/search/rej", // real estate
		//"/d/retail-wholesale/search/ret", // retail - wholesale
		//"/d/sales/search/sls", // sales - biz dev
		//"/d/salon-spa-fitness/search/spa", // salon - spa - fitness
		//"/d/security/search/sec", // security
		//"/d/skilled-trades-artisan/search/trd", // skilled trade - artisan
		"/d/software-qa-dba-etc/search/sof",  // software - qa - dba - etc
		"/d/systems-networking/search/sad", // systems - networking
		//"/d/technical-support/search/tch", // technical support
		//"/d/transportation/search/trp", // transport
		//"/d/tv-film-video-radio/search/tfr", // tv - film - video - radio
		"/d/web-html-info-design/search/web",  // web - info design
		//"/d/writing-editing/search/wri", // writing - editing
		"/d/computer-gigs/search/cpg",  // gigs - computer
		//"/d/creative-gigs/search/crg", // gigs - creative
		//"/d/crew-gigs/search/cwg", // gigs - crew
		//"/d/domestic-gigs/search/dmg", // gigs - domestic
		//"/d/event-gigs/search/evg", // gigs - events
		//"/d/labor-gigs/search/lbg", // gigs - labor
		//"/d/talent-gigs/search/tlg", // gigs - talent
		//"/d/writing-gigs/search/wrg", // gigs - writing
	];

	// Temp hard coded
	const daysInToPast = 10;
	
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
						past={daysInToPast}
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
