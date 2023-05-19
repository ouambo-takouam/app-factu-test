import { IoIosArrowBack } from 'react-icons/io';
import { RxPlus } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx';
import InputField from '../../../components/form/input-field/input-field.component';
import './customer-details.styles.scss';

export default function CustomerDetails() {
	return (
		<div className="customers-details">
			<div className="left-bar-wrapper">
				<div className="left-bar-header">
					<div className="row">
						<div className="back-to-clients">
							<IoIosArrowBack />
							<span>Clients</span>
						</div>
						<div className="options">
							<RxPlus />
							<RxHamburgerMenu />
						</div>
					</div>
					<div className="filter">
						<InputField fullwidth />
					</div>
				</div>
				<div className="left-bar-content">
					Liste de clients dans la base de donnees
				</div>
			</div>
			<div className="customer-details-content">
				Details du client selectionne
			</div>
		</div>
	);
}
