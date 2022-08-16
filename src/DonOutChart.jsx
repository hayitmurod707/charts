import { array, number } from 'prop-types';
import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';
const StyledElement = styled.div`
	height: 200px;
	padding: 30px 0;
	width: 100%;
	border: 1px solid;
`;
const StyledToolTip = styled.div`
	padding: 10px;
	background-color: white;
	border-radius: 6px;
	font-size: 14px;
	font-weight: 500;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const CustomTooltip = ({ payload }) =>
	payload[0] ? (
		<StyledToolTip>
			{payload[0]?.payload.label} : {payload[0]?.payload.value}
		</StyledToolTip>
	) : null;
const DonOutChart = props => {
	return (
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
						nameKey="name"
						valueKey="value"
						outerRadius="100%"
						startAngle={360}
					/>
				</PieChart>
			</ResponsiveContainer>
		</StyledElement>
	);
};
DonOutChart.defaultProps = {
	data: [],
	paddingAngle: 0,
};
DonOutChart.propTypes = {
	data: array.isRequired,
	paddingAngle: number,
};
export default DonOutChart;
