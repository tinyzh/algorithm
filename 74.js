async function request(url, options = {}){
    const {timeout, ...restOptions} = options
    const response = await Promise.race([
        fetch(url,restOptions),
        timeoutFn(timeout)
    ])
    const {data} = await response.json()
    return data
}

function timeoutFn(ms = 3000){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(Error('timeout'))
        },ms)
    })
}