import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';
import { TbSearch, TbX } from 'react-icons/tb';

import s from './Search.module.scss';

export default function Search() {
	const { setSearchValue } = React.useContext(SearchContext);
	const [value, setValue] = React.useState('');

	const inputRef = React.useRef();

	const changeValue = () => {
		setValue(inputRef.current.value);
		changeSearchValue(inputRef.current.value);
	}

	const clearValue = () => {
		setValue('');
		setSearchValue('');
		inputRef.current.focus();
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const changeSearchValue = React.useCallback(
		debounce((str) => {
			setSearchValue(str);
			console.log(`${new Date().toLocaleTimeString([], { hour12: false })}, Search:, '${str}'`);
		}, 450),
		[]
	);

	console.log();

	return (
		<div className={s.root}>
			<TbSearch className={s.searchIcon} />
			<input
				className={s.input}
				onChange={changeValue}
				ref={inputRef}
				value={value}
				type='text'
				placeholder='Введите текст поиска...' />
			{value &&
				<TbX className={s.timesIcon} onClick={clearValue} />
			}
		</div>
	)
};