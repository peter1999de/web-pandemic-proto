export type CityName = string
export type PlayerName = string

export class City {
    name: CityName
    x: number
    y: number
    links: Array<CityName>
}

export class Player {
    name: PlayerName
    color: string
    city: City
}
