import OptionsBtn from '../options-btn/options-btn.component';
import './options-btn-wrapper.styles.scss';

export default function OptionsBtnWrapper({ items }) {
	return (
		<div className={`options-btn-wrapper`}>
			{items.map((item, idx) => {
				const { path, title } = item;

				return (
					<OptionsBtn key={idx} path={path}>
						{title}
					</OptionsBtn>
				);
			})}
		</div>
	);
}
