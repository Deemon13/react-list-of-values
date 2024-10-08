import { useState } from 'react';

import { Output, Error, Controls, Title, ListOfValues } from '../../components';

import styles from './App.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	return (
		<div className={styles.app}>
			<Title title="Ввод значения" />
			<Output value={value} />
			<div className={styles[`error-container`]}>
				{error && <Error error={error} />}
			</div>
			<Controls
				value={value}
				setValue={setValue}
				list={list}
				setList={setList}
				error={error}
				setError={setError}
			/>
			<ListOfValues list={list} setList={setList} />
		</div>
	);
};
