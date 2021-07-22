import {invoke, transformCallback} from "./api";


async function listen(
    event,
    handler
) {
    return invoke({
        module: 'Event',
        message: {
            cmd: 'listen',
            event,
            handler: transformCallback(handler)
        }
    }).then((eventId) => {
        return async () => _unlisten(eventId)
    })
}

async function _unlisten(eventId) {
    return invoke({
        module: 'Event',
        message: {
            cmd: 'unlisten',
            eventId
        }
    })
}

export {listen}