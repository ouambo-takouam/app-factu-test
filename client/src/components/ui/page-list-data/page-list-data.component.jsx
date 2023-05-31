import PageListItem from '../page-list-item/page-list-item.component';
import './page-list-data.styles.scss';

export default function PageListData({ filteredList }) {
	return (
		<div className="page-list-data">
			{filteredList.map((item, idx) => (
				<PageListItem key={idx} data={{ type: 'customer', item }} />
			))}
		</div>
	);
}
