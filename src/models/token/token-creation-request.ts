/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { TokenCapability } from './token-capability';

/*
 * Minimun data required to create a token
 */
export interface TokenCreationRequest {
	name: string;
	description?: string;
	capabilities: Array<TokenCapability>;
}
