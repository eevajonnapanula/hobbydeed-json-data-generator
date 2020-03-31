const { gql } = require('apollo-server')

const typeDefs = gql`
  """
  A type describing events type. These are ones Hobbydeed is supporting
  """
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
    "Should be formatted as 2019-01-01"
    firstEvent: String!
    "Should be formatted as 20.00"
    startTime: String!
    "Should be formatted as 20.00"
    endTime: String!
    eventTypeId: EventType!
    locationName: String
    "For street address to work, write it without commas such as Kylävainiontie 18 Espoo. Also, for street address to work, you add latitude and longitude."
    streetAddress: String
    latitude: Float
    longitude: Float
    info: String
    everyOrEveryOtherWeeks: Boolean
  }

  input EventsInput {
    "Should be formatted as 2019-01-01"
    endDay: String!
    events: [EventInput!]!
  }

  type Query {
    events(input: EventsInput): [Event]
  }
`

module.exports = typeDefs
