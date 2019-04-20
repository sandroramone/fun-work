module.exports = (str) => {
    let result = null
    try {
        result = JSON.parse(str)
    } catch (e) {
        return { error: true, result: null }
    }
    return { error: false, result }
}
