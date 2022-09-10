import React, { useState } from 'react';
import styled from 'styled-components';
import DoubleDoughnutChart from './DoubleDoughnutChart';
import DoughnutChart from './DoughnutChart';
import StackedAreaChart from './StackedAreaChart';
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	width: 100%;
`;
const App = () => {
	const [doughnutChartData] = useState([
		{
			fill: '#00ff00',
			label: 'Label A',
			value: 123,
		},
		{
			fill: '#0000ff',
			label: 'Label B',
			value: 90,
		},
		{
			fill: '#ff0000',
			label: 'Label C',
			value: 100,
		},
		{
			fill: '#808080',
			label: 'Label D',
			value: 74,
		},
		{
			fill: '#ff8000',
			label: 'Label E',
			value: 110,
		},
		{
			fill: '#ff00e6',
			label: 'Label F',
			value: 154,
		},
	]);
	const [doubleDoughnutChartData] = useState([
		[
			{ label: 'Group A', value: 400, fill: '#ff00e6' },
			{ label: 'Group B', value: 300, fill: '#ff8000' },
			{ label: 'Group C', value: 300, fill: '#808080' },
			{ label: 'Group D', value: 200, fill: '#ff0000' },
		],
		[
			{ label: 'B5', value: 50, fill: '#ff0000' },
			{ label: 'B4', value: 30, fill: '#808080' },
			{ label: 'B3', value: 40, fill: '#ff8000' },
			{ label: 'B2', value: 80, fill: '#ff00e6' },
			{ label: 'D2', value: 50, fill: '#0000ff' },
		],
	]);
	const [stackedAreaChartOptions] = useState({
		data: [
			{
				benefit: 10,
				cost: 25,
				harm: 15,
				label: 'January',
			},
			{
				benefit: 30,
				cost: 20,
				harm: 10,
				label: 'February',
			},
			{
				benefit: 15,
				cost: 10,
				harm: 20,
				label: 'March',
			},
			{
				benefit: 20,
				cost: 25,
				harm: 10,
				label: 'April',
			},
			{
				benefit: 10,
				cost: 18,
				harm: 15,
				label: 'May',
			},
			{
				benefit: 20,
				cost: 13,
				harm: 25,
				label: 'June',
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
			<StyledElement>
				<h2>Doughnut Chart</h2>
				<DoughnutChart data={doughnutChartData} />
			</StyledElement>
			<StyledElement>
				<h2>Double Doughnut Chart</h2>
				<DoubleDoughnutChart data={doubleDoughnutChartData} />
			</StyledElement>
		</>
	);
};
export default App;
