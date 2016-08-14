"use strict";

import * as ui from './canvas/ui'
import {City} from './Models';

const cities: {[id: string]: City} = {
  leipzig: {
    name: 'Leipzig',
    x: 12,
    y: 10
  },
  tennenlohe: {
    name: 'Tennenlohe',
    x: 10,
    y: 14
  },
  berlin: {
    name: 'Berlin',
    x: 14,
    y: 6
  },
  hamburg: {
    name: 'Hamburg',
    x: 9,
    y: 4
  },
  essen: {
    name: 'Essen',
    x: 4,
    y: 9
  },
  karlsruhe: {
    name: 'Karlsruhe',
    x: 6,
    y: 15
  },
  muenchen: {
    name: 'M\u00fcnchen',
    x: 11,
    y: 18
  }
}

const max = {
  name: 'Max',
  color: 'blue',
  city: cities['leipzig']
}

for (const cityName of Object.keys(cities)) {
  const city = cities[cityName]
  ui.addCity(city, () => {
    if (max.city) {
      max.city = null;
      ui.movePlayer(max, city)
      .then(() => {
        max.city = city
        console.log('moved player to', city)
      })
    }
  });
}

ui.addPlayer(max, max.city)


console.log('created cities')
