import {invoke} from "./api";

async function getLibrary(library) {
    const libId = await invoke({
        module: 'Library',
        message: {
            "cmd": 'getLibrary',
            library
        }
    })
    return {
        invoke: async function (symbol, payload) {
            return invoke({
                module: 'Library',
                message: {
                    "cmd": 'Invoke',
                    library: libId,
                    symbol,
                    payload
                }
            })
        }
    };
}

export {getLibrary}