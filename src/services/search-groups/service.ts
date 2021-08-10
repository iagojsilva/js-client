/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { NumericID } from '~/value-objects';

export interface SearchGroupsService {
	readonly get: {
		readonly one: (userID: NumericID) => Promise<NumericID>;
	};
}