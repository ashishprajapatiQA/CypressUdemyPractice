function getTodayDate(){
    return new Date();
}

function getFutureDate(days){
    let date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}