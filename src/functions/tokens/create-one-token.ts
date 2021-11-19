/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { TokenCreatedResponse, TokenCreationRequest } from '~/models';
import {
	APIContext,
	buildHTTPRequestWithAuthFromContext,
	buildURL,
	HTTPRequestOptions,
	parseJSONResponse,
} from '../utils';

export const makeCreateOneToken = (context: APIContext) => {
	const templatePath = '/api/tokens?admin=true';
	const url = buildURL(templatePath, { ...context, protocol: 'http' });

	return async (data: TokenCreationRequest): Promise<TokenCreatedResponse> => {
		try {
			const baseRequestOptions: HTTPRequestOptions = {
				body: JSON.stringify(data),
			};
			const req = buildHTTPRequestWithAuthFromContext(context, baseRequestOptions);

			const raw = await context.fetch(url, { ...req, method: 'POST' });
			const rawRes = await parseJSONResponse<TokenCreatedResponse>(raw);
			return rawRes;
		} catch (err) {
			if (err instanceof Error) throw err;
			throw Error('Unknown error');
		}
	};
};
