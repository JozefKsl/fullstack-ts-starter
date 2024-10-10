import { useEffect, useState,  } from 'react';


const App = () => {

	const [data, setData] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:3001/helloWorld')
			const result = await response.json();
			setData(result);
		}

		fetchData();
	}, [])

	return (
		<div>
			<div>{JSON.stringify(data, null, 4)}</div>
		</div>
	);
};

export default App;
