import PropTypes from 'prop-types';

import styles from './Title.module.css';

export const Title = ({ title }) => {
	return <h1 className={styles['page-heading']}>{title}</h1>;
};

Title.propTypes = {
	title: PropTypes.string,
};
