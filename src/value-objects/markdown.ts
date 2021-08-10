/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

import { isString } from 'lodash';

export type Markdown = string;

export type RawMarkdown = string;

export const isMarkdown = (value: any): value is Markdown => isString(value);
