import { array } from 'prop-types';
import React, { useId } from 'react';
import {
	Area,
	AreaChart,
	Rectangle,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import styled from 'styled-components';
const StyledElement = styled.div`
	height: 300px;
	width: 700px;
`;
const StyledToolTip = styled.div`
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	padding: 10px 15px;
	& h3 {
		font-size: 16px;
		font-weight: 600;
		margin: 0;
	}
	& h4 {
		font-size: 15px;
		font-weight: 500;
		margin: 6px 0 0 0;
	}
`;
const CustomCursor = ({ height, points }) => (
	<Rectangle
		fill="#000000"
		stroke="#000000"
		x={points[0]?.x - 1}
		y={points[0]?.y - 1}
		width={1}
		height={height}
	/>
);
const CustomDots = ({ cy, cx }) => (
	<circle cx={cx} cy={cy} r={5} fill="#000000" />
);
const CustomTooltip = ({ payload }) =>
	payload[0] ? (
		<StyledToolTip>
			<h3>{payload[0]?.payload?.label}</h3>
			<h4>Benefit: {payload[0]?.payload?.benefit}</h4>
			<h4>Harm: {payload[0]?.payload?.harm}</h4>
			<h4>Cost: {payload[0]?.payload?.cost}</h4>
		</StyledToolTip>
	) : null;
const StackedAreaChart = ({ data, keys }) => {
	const uniqueId = useId();
	return (
		<StyledElement>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					data={data}
					height={400}
					width={500}
					margin={{
						bottom: 0,
						left: 0,
						right: 10,
						top: 10,
					}}
				>
					<defs>
						{keys?.map(({ fill }, index) => (
							<linearGradient
								id={`${uniqueId}${index}`}
								x1="0"
								x2="0"
								y1="0"
								y2="1"
							>
								<stop offset="0%" stopColor={fill} stopOpacity={1} />
								<stop
									offset="100%"
									stopColor={fill}
									stopOpacity={0.0}
								/>
							</linearGradient>
						))}
					</defs>
					{keys?.map(({ key }, index) => (
						<Area
							activeDot={<CustomDots />}
							dataKey={key}
							fill={`url(#${uniqueId}${index})`}
							key={index}
							stroke={false}
							type="monotone"
						/>
					))}
					<XAxis
						angle={-30}
						axisLine={false}
						dataKey="label"
						tick={{ fontSize: 14, fontWeight: 500 }}
						tickLine={false}
					/>
					<YAxis
						axisLine={false}
						tick={{ fontSize: 14, fontWeight: 500 }}
						tickLine={false}
					/>
					<Tooltip
						content={CustomTooltip}
						cursor={<CustomCursor />}
						wrapperStyle={{ outline: 'none' }}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</StyledElement>
	);
};
StackedAreaChart.defaultProps = {
	data: [],
	keys: [],
};
StackedAreaChart.propTypes = {
	data: array.isRequired,
	keys: array.isRequired,
};
export default StackedAreaChart;
