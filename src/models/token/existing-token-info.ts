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
 * Information about an existing token.
 *
 * WARNING: The token secret is not included. The token secret is only shown when it is created.
 */
export interface ExistingTokenInfo {
	id: UUID;
	name: string;
	description: string | null;
	uuid: number;
	createdAt: string;
	expireAt: string | null;
	capabilities: Array<TokenCapability>;
}
