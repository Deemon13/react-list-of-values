import PropTypes from 'prop-types';

import styles from './ListOfValuesItem.module.css';

export const ListOfValuesItem = ({ value, date }) => {
	return (
		<li className={styles['list-item']}>
			<span className={styles['list-value']}>{`${value}`}</span>
			<span className={styles['list-date']}>{`${date}`}</span>
			<i className="fa fa-trash" aria-hidden="true"></i>
		</li>
	);
};

ListOfValuesItem.propTypes = {
	value: PropTypes.string,
	date: PropTypes.string,
};
