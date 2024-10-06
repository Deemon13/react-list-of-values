import PropTypes from 'prop-types';

import styles from './Error.module.css';

export const Error = ({ error }) => {
	return <div className={styles.error}>{error}</div>;
};

Error.propTypes = {
	error: PropTypes.string,
};
