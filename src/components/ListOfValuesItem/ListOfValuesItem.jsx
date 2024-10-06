import PropTypes from 'prop-types';

import styles from './ListOfValuesItem.module.css';

export const ListOfValuesItem = ({ value, date }) => {
	return <li className={styles['list-item']}>{`${value} - ${date}`}</li>;
};

ListOfValuesItem.propTypes = {
	value: PropTypes.string,
	date: PropTypes.string,
};
