import { UUID } from '~/value-objects';
import { TokenCapability } from './token-capability';

/**
 * Updatable token fields.
 */
export interface UpdatableToken {
	id: UUID;
	name: string;
	descriptions?: string;
	capabilities: Array<TokenCapability>;
}