function uid() {
    const length = new Int8Array(1)
    window.crypto.getRandomValues(length)
    const array = new Uint8Array(Math.max(16, Math.abs(length[0])))
    window.crypto.getRandomValues(array)
    return array.join('')
}

function transformCallback(
    callback,
    once = false
) {
    const identifier = uid()

    Object.defineProperty(window, identifier, {
        value: (result) => {
            if (once) {
                Reflect.deleteProperty(window, identifier)
            }

            return callback?.(result)
        },
        writable: false,
        configurable: true
    })

    return identifier
}



async function invoke(args = {}) {
    return new Promise((resolve, reject) => {
        const callback = transformCallback((e) => {
            resolve(e)
            Reflect.deleteProperty(window, error)
        }, true)
        const error = transformCallback((e) => {
            reject(e)
            Reflect.deleteProperty(window, callback)
        }, true)
        window.rpc.notify('nslauncher', {
            callback,
            error,
            ...args
        })
    })
}

export {transformCallback, invoke}