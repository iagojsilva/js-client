import { UUID } from '~/value-objects';
import { TokenCapability } from './token-capability';

/**
 * Information about an existing token.
 *
 * WARNING: The token secret is not included. The token secret is only shown when it is created.
 */
export interface ExistingTokenInfo {
	id: UUID;
	name: string;
	description?: string;
	uuid: number;
	createdAt: string; // better type?
	capabilities: Array<TokenCapability>;
}
