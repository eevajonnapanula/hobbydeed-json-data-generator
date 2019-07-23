const moment = require('moment')

const formatString = 'DD.MM.YYYY'

const emptyEvent = {
  name: '',
  startTime: '',
  endTime: '',
  eventTypeId: '',
  locationName: '',
  streetAddress: '',
  latitude: 0,
  longitude: 0,
  recurringEvent: true,
  info: '',
}

const eventType = {
  KOULUTUS: '-p5894eb9c66e384.86586554',
  KOKOUS: '-p5894eb9c66e384.86586554',
  LEIRI: '-p5894eb9c52e162.64986491',
  MAKSU: '-p5894eb9c71e585.53689500',
  MUU: '-p5894eb9c358646.81717825',
  MAARITTELEMATON: '-p5894eb9bb56638.01433805',
  OMATOIMINEN_HARJOITUS: '-p5894eb9c4911a7.36061364',
  OTTELU_KILPAILU_ESIINTYMINEN: '-p5894eb9c28c1d5.25866565',
  OTTELU_KILPAILU_ESIINTYMINEN_KOTI: '-p5bc2ebbd747f17.11252752',
  OTTELU_KILPAILU_ESIINTYMINEN_TURNAUS: '-p5bc2ebbd86b389.31040136',
  OTTELU_KILPAILU_ESIINTYMINEN_VIERAS: '-p5bc2ebbd7f7f27.58645623',
  SEURATAPAHTUMA: '-p5bc2ebbd8f9658.70169844',
  TALKOOT_VAPAAEHTOISTYO_MUU_RYHMATYO: '-p5894eb9c7deb36.22427228',
  TUKEVA_MUUN_LAJIN_HARJOITUS: '-p5894eb9c3f8d84.19860795',
  VALMISTELU: '-p5a303a951cd0f1.47480728',
  VIIKOTTAINEN_HARJOITUS_KOKOONTUMINEN: '-p5894eb9c1e4690.07019638',
}

const getAll = (start, end, array, event) => {
  if (end.isSameOrBefore(start)) {
    return array
  } else {
    const object = {
      ...emptyEvent,
      ...event,
      eventTypeId: eventType[event.eventTypeId],
      startTime: `${start.format(formatString)} ${event.startTime}`,
      endTime: `${start.format(formatString)} ${event.endTime}`,
    }
    array.push(object)
    return getAll(start.add(7, 'days'), end, array, event)
  }
}

const generateEvents = (end, events, eventIndex, array) => {
  if (eventIndex >= events.length) {
    return array
  }
  const start = moment(events[eventIndex].firstEvent)
  const generatedEvents = getAll(start, end, [], events[eventIndex])
  const newArr = array.concat(generatedEvents)
  return generateEvents(end, events, eventIndex + 1, newArr)
}

const getEvents = (endDay, eventsInput) => {
  const end = moment(endDay)
  return generateEvents(end, eventsInput, 0, [])
}

module.exports = {
  getEvents,
}
