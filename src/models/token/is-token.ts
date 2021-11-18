/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { isNull, isString } from '@lucaspaganini/value-objects/dist/utils';
import { isArray } from 'lodash';
import { TokenCreatedResponse } from '~/main';
import { isNumericID, isUUID } from '~/value-objects';

export const isToken = (value: unknown): value is TokenCreatedResponse => {
	try {
		const q = <TokenCreatedResponse>value;
		return (
			isUUID(q.id) &&
			isNumericID(q.uuid) &&
			isString(q.name) &&
			(isString(q.description) || isNull(q.description)) &&
			isString(q.createdAt) &&
			isArray(q.capabilities)
		);
	} catch {
		return false;
	}
};
