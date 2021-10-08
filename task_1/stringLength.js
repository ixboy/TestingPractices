function stringLength(string){
    if (string.length <= 0){
        throw new Error('the string should not be empty...')
    }else if (string.length > 0 && string.length < 11){
        return string.length
    }else{
        throw new Error('Your string is too long...')
    }   
}

module.exports = stringLength;