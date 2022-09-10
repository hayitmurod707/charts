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
const DoubleDoughnutChart = ({ data, paddingAngle }) => (
	<StyledElement>
		<ResponsiveContainer>
			<PieChart style={{ margin: 0 }}>
				<Tooltip
					content={CustomTooltip}
					wrapperStyle={{ outline: 'none' }}
				/>
				{(Array.isArray(data) ? data : [])?.map((data, index) => (
					<Pie
						cx="50%"
						cy="50%"
						data={data}
						dataKey="value"
						endAngle={0}
						innerRadius={`${80 - index * 20}%`}
						key={index}
						nameKey="label"
						outerRadius={`${100 - index * 20}%`}
						startAngle={360}
						paddingAngle={paddingAngle}
					/>
				))}
			</PieChart>
		</ResponsiveContainer>
	</StyledElement>
);
DoubleDoughnutChart.defaultProps = {
	data: [],
	paddingAngle: 0,
};
DoubleDoughnutChart.propTypes = {
	data: array.isRequired,
	paddingAngle: number,
};
export default DoubleDoughnutChart;
