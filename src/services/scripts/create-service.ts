/*************************************************************************
 * Copyright 2020 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { makeValidateOneScript } from '../../functions/scripts';
import { APIContext } from '../../functions/utils';
import { ScriptsService } from './service';

export const createScriptsService = (context: APIContext): ScriptsService => ({
	validate: {
		one: makeValidateOneScript(context),
	},
});
