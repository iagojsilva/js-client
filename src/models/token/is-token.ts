/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { isArray, isNull, isString } from 'lodash';
import { isNumericID, isUUID } from '~/value-objects';
import { isTokenCapability } from './is-token-capability';
import { TokenWithSecret } from './token-with-secret';

export const isToken = (value: unknown): value is TokenWithSecret => {
	try {
		const t = <TokenWithSecret>value;
		return (
			isUUID(t.id) &&
			isNumericID(t.uid) &&
			isString(t.name) &&
			(isString(t.description) || isNull(t.description)) &&
			isString(t.createdAt) &&
			isArray(t.capabilities) &&
			t.capabilities.every(isTokenCapability) &&
			(isString(t.expiresAt) || isNull(t.expiresAt))
		);
	} catch {
		return false;
	}
};
