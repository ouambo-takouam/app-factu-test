/* eslint-disable jsx-a11y/anchor-is-valid */
import { BsBookmark } from 'react-icons/bs';
import './sub-side-navbar.styles.scss';

export default function SubSideNavbar({ activeItem }) {
	const { data } = activeItem || {};
	const { title, sections } = data || {};

	return (
		<div className={`l2-nav-bar ${activeItem && 'open'}`}>
			<h2 className="l2-nav-title">{title}</h2>
			<ul className="l2-nav-items-list">
				{sections &&
					sections.map((section) => {
						if (section.items) {
							return section.items.map((item, idx) => (
								<li key={idx} className="l3-nav-item">
									<a href="" className="l3-nav-item-link">
										{item}
									</a>
									<div className="l3-nav-item-bookmark">
										<BsBookmark />
									</div>
								</li>
							));
						} else if (section.subtitle) {
							return (
								<li key={section.subtitle} className="l3-nav-subtitle">
									{section.subtitle}
								</li>
							);
						}
					})}
			</ul>
		</div>
	);
}
