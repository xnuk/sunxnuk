declare module 'cron' {
	export class CronTime {
		constructor(time: string | Date)
	}

	type Cront = string | Date | CronTime
	type On = () => void
	type Start = boolean
	type TimeZone = string
	type runOnInit = boolean

	export class CronJob {
		constructor(config: {cronTime: Cront, onTick: On, onComplete?: On, start?: boolean, timeZone?: string, context?: any, runOnInit?: boolean})
		constructor(cronTime: Cront, onTick: On, onComplete?: On, start?: boolean, timeZone?: string, context?: any, runOnInit?: boolean)

		start()
		stop()
		setTime(CronTime)
		lastDate(): Date
		nextDates(): Date[]
		fireOnTick(override_callback: On)
		addCallback(callback: On)
	}
}
