/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { ExistingTokenInfo } from '~/models';
import { APIContext, buildHTTPRequestWithAuthFromContext, buildURL, parseJSONResponse } from '../utils';

export const makeGetAllTokens = (context: APIContext) => {
	const path = '/api/tokens?admin=true';
	const url = buildURL(path, { ...context, protocol: 'http' });

	return async (): Promise<Array<ExistingTokenInfo>> => {
		const req = buildHTTPRequestWithAuthFromContext(context);

		const raw = await context.fetch(url, { ...req, method: 'GET' });
		const rawRes = (await parseJSONResponse<Array<ExistingTokenInfo> | null>(raw)) ?? [];
		return rawRes;
	};
};
