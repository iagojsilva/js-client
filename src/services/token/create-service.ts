/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import {
	makeCreateOneToken,
	makeDeleteOneToken,
	makeGetAllTokens,
	makeGetOneToken,
	makeGetTokensAuthorizedToMe,
	makeUpdateOneToken,
} from '~/functions/token';
import { makeListTokenCapabilities } from '~/functions/token/list-token-capabilities';
import { APIContext } from '~/functions/utils';
import { TokenService } from './service';

export const createTokenService = (context: APIContext): TokenService => ({
	get: {
		one: makeGetOneToken(context),
		all: makeGetAllTokens(context),
		authorizedTo: {
			me: makeGetTokensAuthorizedToMe(context),
		},
		tokenCapabilities: makeListTokenCapabilities(context),
	},

	create: {
		one: makeCreateOneToken(context),
	},

	update: {
		one: makeUpdateOneToken(context),
	},

	delete: {
		one: makeDeleteOneToken(context),
	},
});
