/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import {
	ExistingTokenInfo,
	TokenCapability,
	TokenCreatedResponse,
	TokenCreationRequest,
	UpdatableToken,
} from '~/models';

export interface TokenService {
	readonly get: {
		readonly one: (tokenID: string) => Promise<ExistingTokenInfo>;
		readonly all: () => Promise<Array<ExistingTokenInfo>>;
		readonly authorizedTo: {
			readonly me: () => Promise<Array<ExistingTokenInfo>>;
		};
		readonly tokenCapabilities: () => Promise<Array<TokenCapability>>;
	};

	readonly create: {
		readonly one: (data: TokenCreationRequest) => Promise<TokenCreatedResponse>;
	};

	readonly update: {
		readonly one: (data: UpdatableToken) => Promise<ExistingTokenInfo>;
	};

	readonly delete: {
		readonly one: (tokenID: string) => Promise<void>;
	};
}