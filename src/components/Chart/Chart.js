import { useMemo } from 'react';
import { Bar } from '../Bar';
import styles from './Chart.module.css';

const activeDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' })
	.format(new Date())
	.toLowerCase()
	.slice(0, 3);

const Chart = (props) => {
	const { chartData } = props;

	const scale = useMemo(() => {
		return chartData?.reduce((acc, curr, idx, arr) => {
			acc += curr?.amount ?? 0;

			if (idx === arr.length - 1) {
				acc /= arr.length;
			}

			return acc;
		}, 0);
	}, [chartData]);

	return (
		<div className={styles.root}>
			{chartData?.map((dayData) => {
				const { day, amount } = dayData;
				const active = activeDay === day;
				return (
					<Bar
						key={day}
						label={day}
						value={amount}
						scale={scale}
						active={active}
					/>
				);
			})}
		</div>
	);
};

export default Chart;
