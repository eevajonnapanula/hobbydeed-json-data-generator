const { gql } = require('apollo-server')

const typeDefs = gql`
  enum EventType {
    KOULUTUS
    KOKOUS
    LEIRI
    MAKSU
    MUU
    MAARITTELEMATON
    OMATOIMINEN_HARJOITUS
    OTTELU_KILPAILU_ESIINTYMINEN
    OTTELU_KILPAILU_ESIINTYMINEN_KOTI
    OTTELU_KILPAILU_ESIINTYMINEN_TURNAUS
    OTTELU_KILPAILU_ESIINTYMINEN_VIERAS
    SEURATAPAHTUMA
    TALKOOT_VAPAAEHTOISTYO_MUU_RYHMATYO
    TUKEVA_MUUN_LAJIN_HARJOITUS
    VALMISTELU
    VIIKOTTAINEN_HARJOITUS_KOKOONTUMINEN
  }

  enum Day {
    MON
    TUE
    WED
    THU
    FRI
    SAT
    SUN
  }

  type Event {
    name: String
    startTime: String
    endTime: String
    eventTypeId: String
    locationName: String
    streetAddress: String
    latitude: Float
    longitude: Float
    recurringEvent: Boolean
    info: String
  }

  input EventInput {
    name: String!
    day: Day!
    firstEvent: String!
    startTime: String!
    endTime: String!
    eventTypeId: EventType!
    locationName: String
    streetAddress: String
    latitude: Float
    longitude: Float
    info: String
  }

  input EventsInput {
    endDay: String!
    events: [EventInput!]!
  }

  type Query {
    events(input: EventsInput): [Event]
  }
`

module.exports = typeDefs
