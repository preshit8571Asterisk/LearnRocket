import { Meteor } from 'meteor/meteor';
import type { IRoom } from '@rocket.chat/core-typings';
import type { ServerMethods } from '@rocket.chat/ui-contexts';

import { verifyVisitor } from '../../../lib/server/functions/verifyVisitor';

declare module '@rocket.chat/ui-contexts' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface ServerMethods {
		'livechat:verifyUser'(rid: IRoom['_id']): void;
	}
}

Meteor.methods<ServerMethods>({
	async 'livechat:verifyUser'(rid) {
		await verifyVisitor(rid);
	},
});