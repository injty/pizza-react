import { useContext, useRef } from 'react';
import { SearchContext } from '../../App';
import { TbSearch, TbX } from 'react-icons/tb';

import s from './Search.module.scss';

export default function Search() {
	const { searchValue, setSearchValue } = useContext(SearchContext);

	const inputRef = useRef();

	const changeValue = () => {
		setSearchValue(inputRef.current.value);
	};

	const clearValue = () => {
		setSearchValue('');
		inputRef.current.focus();
	}

	return (
		<div className={s.root}>
			<TbSearch className={s.searchIcon} />
			<input
				ref={inputRef}
				className={s.input}
				value={searchValue} onChange={(e) => changeValue(e)}
				type='text' placeholder='Введите текст поиска...' />
			{searchValue &&
				<TbX className={s.timesIcon} onClick={() => clearValue()} />
			}
		</div>
	)
};