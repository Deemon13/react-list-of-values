import PropTypes from 'prop-types';

import { Button } from '../../components';
import { ERROR_TEXT } from '../../constants';

import styles from './Controls.module.css';

export const Controls = props => {
	const { value, setValue, list, setList, setError } = props;

	const onInputButtonClick = () => {
		const promptValue = prompt();

		if (promptValue === null) {
			return;
		}

		promptValue.trim();

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
			<Button
				onButtonClick={onInputButtonClick}
				text="Ввести новое"
				condition={true}
			/>
			<Button
				onButtonClick={onAddButtonClick}
				text="Добавить в список"
				value={value}
				condition={false}
			/>
		</div>
	);
};

Controls.propTypes = {
	value: PropTypes.string,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			value: PropTypes.string,
		}),
	),
	setValue: PropTypes.func,
	setList: PropTypes.func,
	setError: PropTypes.func,
};
