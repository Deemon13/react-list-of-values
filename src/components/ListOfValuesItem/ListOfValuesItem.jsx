import PropTypes from 'prop-types';

import styles from './ListOfValuesItem.module.css';

export const ListOfValuesItem = ({ id, value, date, list, setList }) => {
	// console.log(typeof id);

	// console.log(list);

	const onTrashClick = event => {
		const itemID = Number(event.target.parentNode.id);
		const newList = list.filter(el => el.id !== itemID);
		// console.log(event);
		// console.log(itemID);

		// console.log(newList);

		const updatedList = [...newList];
		setList(updatedList);
	};

	return (
		<li id={id} className={styles['list-item']}>
			<span className={styles['list-value']}>{`${value}`}</span>
			<span className={styles['list-date']}>{`${date}`}</span>
			<i className="fa fa-trash" aria-hidden="true" onClick={onTrashClick}></i>
		</li>
	);
};

ListOfValuesItem.propTypes = {
	id: PropTypes.number.isRequired,
	value: PropTypes.string,
	date: PropTypes.string,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			value: PropTypes.string,
		}),
	),
	setList: PropTypes.func,
};
