import React, { useState } from 'react';
import styled from 'styled-components';
import DonOutChart from './DonOutChart';
import StackedAreaChart from './StackedAreaChart';
const StyledElement = styled.div`
	width: 100%;
	height: 100vh;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	display: flex;
`;
const App = () => {
	const [donOutChartData] = useState([
		{
			label: 'Label A',
			fill: '#00ff00',
			value: 123,
		},
		{
			label: 'Label B',
			fill: '#0000ff',
			value: 90,
		},
		{
			label: 'Label C',
			fill: '#ff0000',
			value: 100,
		},
		{
			label: 'Label D',
			fill: '#808080',
			value: 74,
		},
		{
			label: 'Label E',
			fill: '#ff8000',
			value: 110,
		},
		{
			label: 'Label F',
			fill: '#ff00e6',
			value: 154,
		},
	]);
	const [stackedAreaChartOptions] = useState({
		data: [
			{
				label: 'January',
				benefit: 10,
				harm: 15,
				cost: 25,
			},
			{
				label: 'February',
				benefit: 30,
				harm: 10,
				cost: 20,
			},
			{
				label: 'March',
				benefit: 15,
				harm: 20,
				cost: 10,
			},
			{
				label: 'April',
				benefit: 20,
				harm: 10,
				cost: 25,
			},
			{
				label: 'May',
				benefit: 10,
				harm: 15,
				cost: 18,
			},
			{
				label: 'June',
				benefit: 20,
				harm: 25,
				cost: 13,
			},
		],
		keys: [
			{ key: 'harm', fill: '#0000ff' },
			{ key: 'cost', fill: '#00ff00' },
			{ key: 'benefit', fill: '#ff0000' },
		],
	});
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Charts with recharts</h1>
			<StyledElement>
				<h2>Stacked Area Chart</h2>
				<StackedAreaChart {...stackedAreaChartOptions} />
			</StyledElement>
			<DonOutChart data={donOutChartData} />
		</>
	);
};
export default App;
