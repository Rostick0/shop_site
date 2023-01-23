function checkFunction(func: Function | undefined) {
    if (typeof func === 'function') return func();
}

export {
    checkFunction
}