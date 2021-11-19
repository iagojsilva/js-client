/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { UUID } from '~/value-objects';
import { TokenCapability } from './token-capability';
import { TokenCreationRequest } from './token-creation-request';

/**
 * Updatable token fields.
 */
export interface UpdatableToken extends TokenCreationRequest {}
