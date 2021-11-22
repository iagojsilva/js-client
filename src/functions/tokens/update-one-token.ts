/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { RawToken, RawUpdatableToken } from '~/models';
import {
	APIContext,
	buildHTTPRequestWithAuthFromContext,
	buildURL,
	HTTPRequestOptions,
	parseJSONResponse,
} from '../utils';
import { makeGetOneToken } from './get-one-token';

export const makeUpdateOneToken = (context: APIContext) => {
	const getOneToken = makeGetOneToken(context);

	return async (data: RawUpdatableToken): Promise<RawToken> => {
		const templatePath = '/api/tokens/{tokenID}?admin=true';
		const url = buildURL(templatePath, { ...context, protocol: 'http', pathParams: { tokenID: data.id } });

		try {
			const current = await getOneToken(data.id);

			const baseRequestOptions: HTTPRequestOptions = {
				body: JSON.stringify({ ...current, ...data }),
			};
			const req = buildHTTPRequestWithAuthFromContext(context, baseRequestOptions);

			const raw = await context.fetch(url, { ...req, method: 'PUT' });
			const tokenInfoWithoutSecret = await parseJSONResponse<RawToken>(raw);
			return tokenInfoWithoutSecret;
		} catch (err) {
			if (err instanceof Error) throw err;
			throw Error('Unknown error');
		}
	};
};
