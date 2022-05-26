import styles from './Header.module.css';

const Header = (props) => {
	const { balance } = props;

	return (
		<div className={styles.root}>
			<div className={styles.left}>
				<span>My balance</span>
				<span className={styles.balance}>${balance ?? 0}</span>
			</div>
			<div className={styles.right}>
				<span className={styles.circle} />
				<span className={styles.circle} />
			</div>
		</div>
	);
};

Header.defaultProps = {
	balance: 0,
};

export default Header;
