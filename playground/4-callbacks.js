const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error', undefined)
        callblack(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallblack((error, result) => {
    if(error) {
        return console.log(error)
    }

    console.log(result)
})