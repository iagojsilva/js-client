import { TokenCapability, _TokenCapability } from './token-capability';

export const isTokenCapability = (value: any): value is TokenCapability => {
	return value in _TokenCapability;
};
