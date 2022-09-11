import ReactPaginate from "react-paginate";

import s from './Pagination.module.scss'

import { setPageIndex } from '../../store/slices/paginationSlice';
import { useDispatch } from 'react-redux';

export default function Pagination() {
	const dispatch = useDispatch();

	const changePageIndex = (e) => {
		dispatch(setPageIndex(e.selected + 1))
	}

	return <>
		<ReactPaginate
			className={s.root}
			breakLabel="..."
			previousLabel="<"
			nextLabel=">"
			onPageChange={changePageIndex}
			pageRangeDisplayed={5}
			pageCount={3}
			renderOnZeroPageCount={null}
		/>
	</>
};