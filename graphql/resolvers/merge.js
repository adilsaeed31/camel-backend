const DataLoader = require("dataloader")

const Event = require("../../models/event")

const eventLoader = new DataLoader(eventIds => {
  return events(eventIds)
})

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } })
    events.sort((a, b) => {
      return (
        eventIds.indexOf(a._id.toString()) - eventIds.indexOf(b._id.toString())
      )
    })
    return events.map(event => {
      return transformEvent(event)
    })
  } catch (err) {
    throw err
  }
}

const singleEvent = async eventId => {
  try {
    const event = await eventLoader.load(eventId.toString())
    return event
  } catch (err) {
    throw err
  }
}

const transformEvent = event => {
  return {
    ...event._doc,
    _id: event.id,
    date: event._doc.date
  }
}

exports.transformEvent = transformEvent
