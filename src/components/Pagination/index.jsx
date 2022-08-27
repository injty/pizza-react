import ReactPaginate from "react-paginate";

import s from './Pagination.module.scss'

export default function Pagination({ onPageChanging }) {

	return <>
		<ReactPaginate
			className={s.root}
			breakLabel="..."
			previousLabel="<"
			nextLabel=">"
			onPageChange={e => onPageChanging(e.selected + 1)}
			pageRangeDisplayed={5}
			pageCount={3}
			renderOnZeroPageCount={null}
		/>
	</>
};