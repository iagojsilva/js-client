import { UUID } from '~/value-objects';
import { Capabilities } from './capabilities';

// TODO: token or secret? we don't knowwww!!!!
export interface Token {
	id: UUID;
	name: string;
	description?: string;
	uuid: number;
	createdAt: string; // better type?
	capabilities: Array<Capabilities>;
}

export interface TokenWithSecret extends Token {
	secret: string;
}
