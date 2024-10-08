import PropTypes from 'prop-types';

import { ListOfValuesItem } from '../../components';

import styles from './ListOfValues.module.css';

export const ListOfValues = ({ list, setList }) => {
	return (
		<div className={styles['list-container']}>
			<h2 className={styles['list-heading']}>Список:</h2>
			{list.length > 0 ? (
				<ul className={styles.list}>
					{list.map(({ id, value }) => {
						let date = new Date(id).toLocaleString().replace(', ', ' ');

						return (
							<ListOfValuesItem
								key={id}
								id={id}
								value={value}
								date={date}
								list={list}
								setList={setList}
							/>
						);
					})}
				</ul>
			) : (
				<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
			)}
		</div>
	);
};

ListOfValues.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			value: PropTypes.string,
		}),
	),
	setList: PropTypes.func,
};
