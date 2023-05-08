import { useState, useEffect } from 'react';
import navItems from '../../data/side-navigation.json';
import useToggleItems from '../../hooks/toogle-items.hook';
import SideNavbar from '../side-navbar/side-navbar.component';
import SubSideNavbar from '../sub-side-navbar/sub-side-navbar.component';

export default function SidebarWrapper() {
	const [toogleItems, updateToogleItems] = useToggleItems({
		arr: navItems,
	});
	const [activeItem, setActiveItem] = useState(undefined);

	useEffect(() => {
		setActiveItem(toogleItems.find((item) => item.active));
	}, [toogleItems]);

	return (
		<div className="sidebar-wrapper">
			<SideNavbar
				toogleItems={toogleItems}
				activeItem={activeItem}
				setActiveItem={setActiveItem}
				updateToogleItems={updateToogleItems}
			/>
			<SubSideNavbar activeItem={activeItem} />
		</div>
	);
}
