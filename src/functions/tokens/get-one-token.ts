/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { RawToken } from '~/models';
import { UUID } from '~/value-objects';
import { APIContext, buildHTTPRequestWithAuthFromContext, buildURL, parseJSONResponse } from '../utils';

export const makeGetOneToken = (context: APIContext) => {
	return async (tokenID: UUID): Promise<RawToken> => {
		const templatePath = '/api/tokens/{tokenID}';
		const url = buildURL(templatePath, { ...context, protocol: 'http', pathParams: { tokenID } });

		const req = buildHTTPRequestWithAuthFromContext(context);

		const raw = await context.fetch(url, { ...req, method: 'GET' });
		const rawRes = await parseJSONResponse<RawToken>(raw);
		return rawRes;
	};
};
