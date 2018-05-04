declare module 'twit' {
	import { IncomingMessage } from 'http';
	import { EventEmitter } from 'events';
	
	type Resp<T> = (err: Error, data: T, response: IncomingMessage) => void

	export default class Twit {
		constructor(config: {
			consumer_key: string,
			consumer_secret: string,
			access_token?: string,
			access_token_secret?: string,
			timeout_ms?: number
		})

		get<P extends {}, T extends {}>(entry: string, params: P, callback: Resp<T>): void
		get<T extends {}>(entry: string, callback: Resp<T>): void
		get<P extends {}, T extends {}>(entry: string, params?: P): Promise<T>

		post<P extends {}, T extends {}>(entry: string, params: P, callback: Resp<T>): void
		post<T extends {}>(entry: string, callback: Resp<T>): void
		post<P extends {}, T extends {}>(entry: string, params?: P): Promise<T>

		stream<P extends {}>(entry: string, params?: P): EventEmitter
	}
}
