import PageListItem from '../page-list-item/page-list-item.component';
import './page-list-data.styles.scss';

export default function PageListData({ dataType, filteredList }) {
	return (
		<div className="page-list-data">
			{filteredList.map((item, idx) => (
				<PageListItem key={idx} dataType={dataType} item={item} />
			))}
		</div>
	);
}
