/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { ExistingTokenInfo } from './existing-token-info';

/**
 * Token containing the secret (only available when token is created)
 */
export interface TokenCreatedResponse extends ExistingTokenInfo {
	token: string;
}
