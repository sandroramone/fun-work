module.exports = (error) => {
    return {
        errors: {
            params: error.path ? [error.path] : [],
            messages: [`Unexpected value "${error.value}" in "${error.path}"`]
        }
    }
}
