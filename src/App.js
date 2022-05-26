import { useEffect, useState } from 'react';
import './App.css';
import { Body, Header } from './components';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('/data.json').then((response) => {
			return response.text().then((text) => {
				const resData = text && JSON.parse(text);
				setData(resData);
			});
		});
	}, []);

	return (
		<div className='App'>
			<Header balance={921.48} />
			<Body chartData={data} />
		</div>
	);
}

export default App;
