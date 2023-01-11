function timeConversion(s) {
    var meridian = s.substr(-2);
    var hours = parseInt(s.substr(0, 2));
    
    if (meridian === 'AM' && hours === 12) {
        hours = 0;
    }
    else if (meridian === 'AM') {
        hours = hours;
    }
    else if (meridian === 'PM' && hours < 12) {
        hours = hours + 12;
    }
    else if (meridian === 'PM' && hours === 12) {
        hours = hours;
    }
    var minutes = s.substr(3, 2);
    var seconds = s.substr(6, 2);
    return (hours < 10 ? '0' + hours : hours) + ':' + minutes + ':' + seconds;
}
