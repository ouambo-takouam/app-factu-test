import OptionsBtn from '../options-btn/options-btn.component';
import './options-btn-wrapper.styles.scss';

export default function OptionsBtnWrapper({ options }) {
	return (
		<div className={`options-btn-wrapper`}>
			{options.map((option, idx) => {
				const { onClickHandler, title } = option;
				console.log(onClickHandler);

				return (
					<OptionsBtn key={idx} onClickHandler={onClickHandler}>
						{title}
					</OptionsBtn>
				);
			})}
		</div>
	);
}
