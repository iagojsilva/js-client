import { TokenCapability } from './token-capability';

/*
 * Minimun data required to create a token
 */
export interface TokenCreationRequest {
	name: string;
	descriptions?: string;
	capabilities: Array<TokenCapability>;
}
