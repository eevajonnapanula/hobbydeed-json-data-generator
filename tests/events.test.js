const { getEvents } = require('../events')

const input = {
  endDay: '2019-07-20',
  events: [
    {
      name: 'Treenit',
      firstEvent: '2019-07-01',
      day: 'MON',
      startTime: '20.00',
      endTime: '22.00',
      eventTypeId: 'VIIKOTTAINEN_HARJOITUS_KOKOONTUMINEN',
      locationName: 'Keski-Espoon urheilupuisto',
      streetAddress: 'Kylävainiontie 18 Espoo',
      latitude: 60.2095041,
      longitude: 24.6728975,
      info: '',
    },
    {
      name: 'Treenit',
      firstEvent: '2019-07-03',
      day: 'WED',
      startTime: '17.00',
      endTime: '18.30',
      eventTypeId: 'VIIKOTTAINEN_HARJOITUS_KOKOONTUMINEN',
      locationName: 'Tapion kenttä',
      streetAddress: 'Kaupinkalliontie 6 Espoo',
      latitude: 60.1787242,
      longitude: 24.8000669,
      info: '',
    },
  ],
}

const events = [
  {
    name: 'Treenit',
    firstEvent: '2019-07-01',
    day: 'MON',
    startTime: '01.07.2019 20.00',
    endTime: '01.07.2019 22.00',
    eventTypeId: '-p5894eb9c1e4690.07019638',
    longitude: 24.6728975,
    latitude: 60.2095041,
    locationName: 'Keski-Espoon urheilupuisto',
    streetAddress: 'Kylävainiontie 18 Espoo',
    recurringEvent: true,
    info: '',
  },
  {
    name: 'Treenit',
    firstEvent: '2019-07-01',
    day: 'MON',
    startTime: '08.07.2019 20.00',
    endTime: '08.07.2019 22.00',
    eventTypeId: '-p5894eb9c1e4690.07019638',
    longitude: 24.6728975,
    latitude: 60.2095041,
    locationName: 'Keski-Espoon urheilupuisto',
    streetAddress: 'Kylävainiontie 18 Espoo',
    recurringEvent: true,
    info: '',
  },
  {
    name: 'Treenit',
    firstEvent: '2019-07-01',
    day: 'MON',
    startTime: '15.07.2019 20.00',
    endTime: '15.07.2019 22.00',
    eventTypeId: '-p5894eb9c1e4690.07019638',
    longitude: 24.6728975,
    latitude: 60.2095041,
    locationName: 'Keski-Espoon urheilupuisto',
    streetAddress: 'Kylävainiontie 18 Espoo',
    recurringEvent: true,
    info: '',
  },
  {
    name: 'Treenit',
    firstEvent: '2019-07-03',
    day: 'WED',
    startTime: '03.07.2019 17.00',
    endTime: '03.07.2019 18.30',
    eventTypeId: '-p5894eb9c1e4690.07019638',
    longitude: 24.8000669,
    latitude: 60.1787242,
    locationName: 'Tapion kenttä',
    streetAddress: 'Kaupinkalliontie 6 Espoo',
    recurringEvent: true,
    info: '',
  },
  {
    name: 'Treenit',
    firstEvent: '2019-07-03',
    day: 'WED',
    startTime: '10.07.2019 17.00',
    endTime: '10.07.2019 18.30',
    eventTypeId: '-p5894eb9c1e4690.07019638',
    longitude: 24.8000669,
    latitude: 60.1787242,
    locationName: 'Tapion kenttä',
    streetAddress: 'Kaupinkalliontie 6 Espoo',
    recurringEvent: true,
    info: '',
  },
  {
    name: 'Treenit',
    firstEvent: '2019-07-03',
    day: 'WED',
    startTime: '17.07.2019 17.00',
    endTime: '17.07.2019 18.30',
    eventTypeId: '-p5894eb9c1e4690.07019638',
    longitude: 24.8000669,
    latitude: 60.1787242,
    locationName: 'Tapion kenttä',
    streetAddress: 'Kaupinkalliontie 6 Espoo',
    recurringEvent: true,
    info: '',
  },
]

test('Data is generated correctly for multiple events', () => {
  const generatedEvents = getEvents(input.endDay, input.events)
  expect(generatedEvents).toEqual(events)
})

test('Nothing is generated, if start is after beginning', () => {
  const endDay = '2019-06-30'

  const generatedEvents = getEvents(endDay, input.events)
  expect(generatedEvents).toEqual([])
})
