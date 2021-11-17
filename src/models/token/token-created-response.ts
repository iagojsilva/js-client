import { ExistingTokenInfo } from './existing-token-info';

/**
 * Token containing the secret (only available when token is created)
 */
export interface TokenCreatedResponse extends ExistingTokenInfo {
	token: string;
}
