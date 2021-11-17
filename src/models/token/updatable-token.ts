/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

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
