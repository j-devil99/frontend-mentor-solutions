import styles from './Bar.module.css';

const Bar = (props) => {
	const { label, value, scale, active } = props;

	return (
		<div className={styles.root}>
			<div
				className={`${styles.bar} ${active ? styles.active : ''}`}
				style={{
					height: `${(value / scale) * 7}rem`,
				}}
			>
				<span className={styles.tooltip}>${value}</span>
			</div>
			<span className={styles.label}>{label}</span>
		</div>
	);
};

export default Bar;
