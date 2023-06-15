import { formatDate } from './format-date';

export const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateInvoiceNumber = () =>
	'FACT-' + formatDate(new Date(), '') + getRandomInt(1, 1000);
