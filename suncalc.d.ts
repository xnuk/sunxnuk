declare module 'suncalc' {
	export function getTimes(date: Date, latitude: number, longitude: number): {
		sunrise: Date,
		sunriseEnd: Date,
		goldenHourEnd: Date,
		solarNoon: Date,
		goldenHour: Date,
		sunsetStart: Date,
		sunset: Date,
		dusk: Date,
		nauticalDusk: Date,
		night: Date,
		nadir: Date,
		nightEnd: Date,
		nauticalDawn: Date,
		dawn: Date
	}

	export function getPosition(timeAndDate: Date, latitude: number, longitude: number): {
		altitude: number,
		azimuth: number
	}
	
	export function getMoonPosition(timeAndDate: Date, latitude: number, longitude: number): {
		altitude: number,
		azimuth: number,
		distance: number,
		parallacticAngle: number
	}

	export function getMoonIllumination(timeAndDate: Date): {
		fraction: number,
		phase: number,
		angle: number
	}
	
	export function getMoonTimes(date: Date, latitude: number, longitude: number, inUTC?: boolean): {
		rise: Date, set: Date,
		alwaysUp: boolean, alwaysDown: boolean
	}
}
