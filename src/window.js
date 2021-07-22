import {invoke} from "./api";

async function hide() {
    return invoke({
        module: 'Window',
        message: {
            "cmd": 'hide'
        }
    })
}

async function show() {
    return invoke({
        module: 'Window',
        message: {
            "cmd": 'show'
        }
    })
}

async function exit() {
    return invoke({
        module: 'Window',
        message: {
            "cmd": 'exit'
        }
    })
}


export {hide, show, exit}