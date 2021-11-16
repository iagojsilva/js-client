import { UUID } from '~/value-objects';
import { Capabilities } from './capabilities';

export interface UpdatableToken {
	id: UUID;
	name: string;
	descriptions?: string;
	capabilities: Array<Capabilities>;
}
