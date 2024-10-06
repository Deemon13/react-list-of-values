import PropTypes from 'prop-types';

import styles from './Output.module.css';

export const Output = ({ value }) => {
	return (
		<p className={styles['no-margin-text']}>
			Текущее значение <code>value</code>: &#34;
			<output className={styles['current-value']}>{value}</output>
			&#34;
		</p>
	);
};

Output.propTypes = {
	value: PropTypes.string,
};
