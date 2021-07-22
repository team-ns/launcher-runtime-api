import {invoke} from "./api";


async function getTotalRam() {
    return invoke({
        module: 'System',
        message: {
            "cmd": 'getTotalRam'
        }
    })
}

export {getTotalRam}