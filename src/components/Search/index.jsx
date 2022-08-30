import { useContext } from 'react';

import { SearchContext } from '../../App';

import { TbSearch, TbX } from 'react-icons/tb';

import s from './Search.module.scss';

export default function Search() {
	const { searchValue, setSearchValue } = useContext(SearchContext);

	return (
		<div className={s.root}>
			<TbSearch className={s.searchIcon} />
			<input className={s.input}
				value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
				type='text' placeholder='Введите текст поиска...' />
			{searchValue &&
				<TbX className={s.timesIcon} onClick={() => setSearchValue('')} />
			}
		</div>
	)
};