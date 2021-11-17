/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { isBoolean } from 'lodash';
import { isTokenCapability } from '~/models';
import { integrationTest, TEST_BASE_API_CONTEXT } from '~/tests';
import { makeListTokenCapabilities } from './list-token-capabilities';

describe('ListTokenCapabilities()', () => {
	const listTokenCapabilities = makeListTokenCapabilities(TEST_BASE_API_CONTEXT);

	it(
		'Returns all token capabilities',
		integrationTest(async () => {
			const tokensCapabilities = await listTokenCapabilities();
			const isTokensCapabilities = tokensCapabilities.map(isTokenCapability).every(isBoolean);
			expect(isTokensCapabilities).toBeTrue();
		}),
	);
});
