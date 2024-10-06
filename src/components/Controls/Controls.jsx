import PropTypes from 'prop-types';

import styles from './Controls.module.css';

const ERROR_TEXT = 'Введенное значение должно содержать минимум 3 символа';

export const Controls = props => {
	const { value, setValue, list, setList, setError } = props;
	const isValueValid = value.length >= 3;

	const onInputButtonClick = () => {
		const promptValue = prompt().trim();

		if (promptValue === null) {
			return;
		}

		if (promptValue.length < 3) {
			setError(ERROR_TEXT);
			return;
		}

		setValue(promptValue);
		setError('');
	};

	const onAddButtonClick = () => {
		const id = Date.now();
		const updatedList = [...list, { id, value }];
		setList(updatedList);
		setValue('');
		setError('');
	};

	return (
		<div className={styles['buttons-container']}>
			<button className={styles.button} onClick={onInputButtonClick}>
				Ввести новое
			</button>
			<button
				className={styles.button}
				onClick={onAddButtonClick}
				disabled={!isValueValid}
			>
				Добавить в список
			</button>
		</div>
	);
};

Controls.propTypes = {
	value: PropTypes.string,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			value: PropTypes.string,
		}),
	),
	setValue: PropTypes.func,
	setList: PropTypes.func,
	setError: PropTypes.func,
};
