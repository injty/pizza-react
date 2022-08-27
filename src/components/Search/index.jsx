import { TbSearch, TbX } from 'react-icons/tb';

import s from './Search.module.scss';

export default function Shearch({ searchValue, setSearchValue }) {
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