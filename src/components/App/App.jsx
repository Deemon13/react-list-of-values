import { useState } from 'react';

import { Output, Error, Controls, Title, ListOfValues } from '../../components';

import styles from './App.module.css';

// const ERROR_TEXT = 'Введенное значение должно содержать минимум 3 символа';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	// const isValueValid = value.length >= 3;

	// const onInputButtonClick = () => {
	// 	const promptValue = prompt().trim();

	// 	console.log(promptValue);

	// 	if (promptValue === null) {
	// 		return;
	// 	}

	// 	if (promptValue.length < 3) {
	// 		setError(ERROR_TEXT);
	// 		return;
	// 	}

	// 	setValue(promptValue);
	// 	setError('');
	// };

	// const onAddButtonClick = () => {
	// 	const id = Date.now();
	// 	const updatedList = [...list, { id, value }];
	// 	setList(updatedList);
	// 	setValue('');
	// 	setError('');
	// 	console.log('Add to list...');
	// 	console.log(list);
	// };

	return (
		<div className={styles.app}>
			<Title title="Ввод значения" />
			{/* <h1 className={styles['page-heading']}>{title}</h1> */}
			{/* Component - Output */}
			{/* <p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: &#34;
				<output className={styles['current-value']}>{value}</output>
				&#34;
			</p> */}
			<Output value={value} />
			{/* End of Output */}
			{/* Component - Error */}
			<div className={styles[`error-container`]}>
				{error && <Error error={error} />}
			</div>

			{/* {error && <div className={styles.error}>{error}</div>} */}
			{/* End of Error */}
			{/* Component - Controls */}
			<Controls
				value={value}
				setValue={setValue}
				list={list}
				setList={setList}
				error={error}
				setError={setError}
				// onInputButtonClick={onInputButtonClick}
				// onAddButtonClick={onAddButtonClick}
			/>
			{/* <div className={styles['buttons-container']}>
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
			</div> */}
			{/* End of Controls */}
			{/* Component - List */}
			<ListOfValues list={list} setList={setList} />
			{/* <div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length > 0 ? (
					<ul className={styles.list}>
						{list.map(el => {
							let date = new Date(el.id)
								.toLocaleString()
								.replace(', ', ' ');
							console.log(date);

							return (
								<li key={el.id} className={styles['list-item']}>
									{`${el.value} - ${date}`}
								</li>
							);
						})}
					</ul>
				) : (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
			</div> */}
			{/* End of List */}
		</div>
	);
};
