import { Chart } from '../Chart';
import styles from './Body.module.css';

const Body = (props) => {
	const { total, change, chartData } = props;

	return (
		<div className={styles.root}>
			<p className={styles.heading}>Spending - Last 7 days</p>
			{/* chart component */}
			<Chart chartData={chartData} />
			<div className={styles.footer}>
				<div className={styles.left}>
					<span className={styles.caption}>Total this month</span>
					<span className={styles.total}>${total}</span>
				</div>
				<div className={styles.right}>
					<span className={styles.change}>
						{change >= 0 ? '+' : '-'}
						{change}%
					</span>
					<span className={styles.caption}>from last month</span>
				</div>
			</div>
		</div>
	);
};

Body.defaultProps = {
	total: 478.33,
	change: 2.4,
};

export default Body;
