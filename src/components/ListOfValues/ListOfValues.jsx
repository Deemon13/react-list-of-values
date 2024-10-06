import PropTypes from 'prop-types';

import styles from './ListOfValues.module.css';

export const ListOfValues = ({ list }) => {
	return (
		<div className={styles['list-container']}>
			<h2 className={styles['list-heading']}>Список:</h2>
			{list.length > 0 ? (
				<ul className={styles.list}>
					{list.map(el => {
						let date = new Date(el.id).toLocaleString().replace(', ', ' ');
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
		</div>
	);
};

ListOfValues.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			value: PropTypes.string,
		}),
	),
};
