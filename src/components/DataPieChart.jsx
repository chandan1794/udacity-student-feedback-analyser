import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#34ef9e", "#FFBB27", "#ff7768"];
const defaultChartData = [
	{ name: "Rating 5", value: 0 },
	{ name: "Rating 3", value: 0 },
	{ name: "Rating 1", value: 0 },
];

export default function DataPieChart({ feedbackdata }) {
	const [ratingData, setRatingData] = useState(defaultChartData);

	useEffect(() => {
		let ratingDistribution = { 1: 0, 3: 0, 5: 0 };
		feedbackdata.forEach((data) => {
			data.responses.feedback.forEach((feedback) => {
				console.log(parseInt(feedback.rating));
				ratingDistribution[parseInt(feedback.rating)]++;
			});
		});

		console.log(ratingDistribution);
		setRatingData([
			{ name: "Rating 5", value: ratingDistribution[5] },
			{ name: "Rating 3", value: ratingDistribution[3] },
			{ name: "Rating 1", value: ratingDistribution[1] },
		]);
		return () => {
			setRatingData(defaultChartData);
		};
	}, [feedbackdata]);

	return (
		<PieChart width={400} height={360}>
			<Pie
				dataKey="value"
				data={ratingData}
				cx={200}
				cy={180}
				innerRadius={60}
				outerRadius={150}
				fill="#82ca9d"
			>
				{ratingData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			<Tooltip />
		</PieChart>
	);
}
