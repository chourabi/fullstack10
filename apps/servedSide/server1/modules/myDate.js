exports.getYear = function(){
    const date = new Date();

    return date.getFullYear();
}


exports.getCurrentMonth = function(){
    const date = new Date();

    return date.getMonth();
}