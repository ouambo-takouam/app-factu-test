import './page-list-nav.styles.scss';

export default function PageListNav({ headers }) {
	return (
		<div className="page-list-nav">
			<div className="page-list-checkbox">
				<input type="checkbox" />
			</div>
			{headers.map((header, idx) => (
				<span key={idx}>{header.toUpperCase()}</span>
			))}
		</div>
	);
}
