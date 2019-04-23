exports.validateName = ({args, errors}) => {
    if(typeof args.name == 'string') {
        // eslint-disable-next-line no-useless-escape
        if(args.name.replace(/\ /g, '') == '') {
            errors.push({param: 'name', message: 'name invalid'})
        }
    }
}
