import {invoke} from "./api";


async function ready() {
    return invoke({
        module: 'Launcher',
        message: {
            cmd: 'ready'
        }
    })
}

async function login(username, password, rememberMe) {
    return invoke({
        module: 'Launcher',
        message: {
            cmd: 'login',
            username,
            password,
            rememberMe
        }
    })
}

async function logout() {
    return invoke({
        module: 'Launcher',
        message: {
            cmd: 'logout'
        }
    })
}

async function play(profile) {
    return invoke({
        module: 'Launcher',
        message: {
            cmd: 'play',
            profile
        }
    })
}

async function selectGameDir() {
    return invoke({
        module: 'Launcher',
        message: {
            cmd: 'selectGameDir',
        }
    })
}

async function saveSettings(settings) {
    return invoke({
        module: 'Launcher',
        message: {
            cmd: 'saveSettings',
            settings
        }
    })
}

async function sendMessage(message) {
    return invoke({
        module: 'Launcher',
        message: {
            cmd: 'sendCustomMessage',
            message: message
        }
    })
}

export {ready, login, logout, play, selectGameDir, saveSettings, sendMessage}