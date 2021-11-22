/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { RawCreatableToken, RawToken, TokenCapability, RawTokenWithSecret, RawUpdatableToken } from '~/models';
import { ID } from '~/value-objects';

export interface TokensService {
	readonly get: {
		readonly one: (tokenID: ID) => Promise<RawToken>;
		readonly all: () => Promise<Array<RawToken>>;
		readonly authorizedTo: {
			readonly me: () => Promise<Array<RawToken>>;
		};
		readonly tokenCapabilities: () => Promise<Array<TokenCapability>>;
	};

	readonly create: {
		readonly one: (data: RawCreatableToken) => Promise<RawTokenWithSecret>;
	};

	readonly update: {
		readonly one: (data: RawUpdatableToken) => Promise<RawToken>;
	};

	readonly delete: {
		readonly one: (tokenID: ID) => Promise<void>;
	};
}
