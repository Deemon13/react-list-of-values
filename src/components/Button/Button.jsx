import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const Button = ({ onButtonClick, text, value = false, condition }) => {
	const state = { condition: !condition };
	const isValueValid = value.length >= 3;

	return (
		<button
			className={styles.button}
			onClick={onButtonClick}
			{...(state.condition ? { disabled: !isValueValid } : {})}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	value: PropTypes.string,
	condition: PropTypes.bool,
	onButtonClick: PropTypes.func,
};
