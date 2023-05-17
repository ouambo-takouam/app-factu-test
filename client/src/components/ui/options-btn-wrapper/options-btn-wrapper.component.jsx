import OptionsBtn from '../options-btn/options-btn.component';
import './options-btn-wrapper.styles.scss';

export default function OptionsBtnWrapper({ options }) {
	return (
		<div className={`options-btn-wrapper`}>
			{options.map((option, idx) => {
				const { path, title } = option;

				return <OptionsBtn key={idx} /* path={path} */>{title}</OptionsBtn>;
			})}
		</div>
	);
}
