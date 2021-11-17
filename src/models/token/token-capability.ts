/*************************************************************************
 * Copyright 2021 Gravwell, Inc. All rights reserved.
 * Contact: <legal@gravwell.io>
 *
 * This software may be modified and distributed under the terms of the
 * MIT license. See the LICENSE file for details.
 **************************************************************************/

/**
 * Token access capabilities (scopes).
 * REFERENCE: https://github.com/gravwell/gravwell/blob/dev/client/types/abac.go
 */

enum _TokenCapability {
	'Search',
	'Download',
	'SaveSearch',
	'AttachSearch',
	'BackgroundSearch',
	'GetTags',
	'SetSearchGroup',
	'SearchHistory',
	'SearchGroupHistory',
	'SearchAllHistory',
	'DashboardRead',
	'DashboardWrite',
	'ResourceRead',
	'ResourceWrite',
	'TemplateRead',
	'TemplateWrite',
	'PivotRead',
	'PivotWrite',
	'MacroRead',
	'MacroWrite',
	'LibraryRead',
	'LibraryWrite',
	'ExtractorRead',
	'ExtractorWrite',
	'UserFileRead',
	'UserFileWrite',
	'KitRead',
	'KitWrite',
	'KitBuild',
	'KitDownload',
	'ScheduleRead',
	'ScheduleWrite',
	'SOARLibs',
	'SOAREmail',
	'PlaybookRead',
	'PlaybookWrite',
	'LicenseRead',
	'Stats',
	'Ingest',
	'ListUsers',
	'ListGroups',
	'ListGroupMembers',
	'NotificationRead',
	'NotificationWrite',
	'SystemInfoRead',
	'TokenRead',
	'TokenWrite',
}

export type TokenCapability = keyof typeof _TokenCapability;
