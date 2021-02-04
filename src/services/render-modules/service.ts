/*************************************************************************
 * Copyright 2020 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { RenderModule } from '../../models/render-module';

export interface RenderModulesService {
	readonly get: {
		readonly all: () => Promise<Array<RenderModule>>;
	};
}
