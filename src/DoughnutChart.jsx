import { array, number } from 'prop-types';
import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';
const StyledElement = styled.div`
	height: 200px;
	width: 200px;
`;
const StyledToolTip = styled.div`
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	font-size: 14px;
	font-weight: 500;
	padding: 10px;
`;
const CustomTooltip = ({ payload }) =>
	payload[0] ? (
		<StyledToolTip>
			{payload[0]?.payload.label} : {payload[0]?.payload.value}
		</StyledToolTip>
	) : null;
const DoughnutChart = props => (
	<StyledElement>
		<ResponsiveContainer width="100%" height="100%">
			<PieChart style={{ margin: 0 }}>
				<Tooltip
					content={CustomTooltip}
					wrapperStyle={{ outline: 'none' }}
				/>
				<Pie
					{...props}
					cx="50%"
					cy="50%"
					dataKey="value"
					endAngle={0}
					innerRadius="75%"
					nameKey="label"
					outerRadius="100%"
					startAngle={360}
				/>
			</PieChart>
		</ResponsiveContainer>
	</StyledElement>
);
DoughnutChart.defaultProps = {
	data: [],
	paddingAngle: 0,
};
DoughnutChart.propTypes = {
	data: array.isRequired,
	paddingAngle: number,
};
export default DoughnutChart;
