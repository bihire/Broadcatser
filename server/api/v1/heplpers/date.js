let timezone_offset_min = new Date().getTimezoneOffset(),
    offset_hrs = parseInt(Math.abs(timezone_offset_min / 60)),
    offset_min = Math.abs(timezone_offset_min % 60),
    timezone_standard;

if (offset_hrs < 10) offset_hrs = `0${offset_hrs}`;

if (offset_min < 10) offset_min = `0${offset_min}`;

if (timezone_offset_min < 0) timezone_standard = `+${offset_hrs}:${offset_min}`;
else if (timezone_offset_min > 0) timezone_standard = `-${offset_hrs}:${offset_min}`;
else if (timezone_offset_min == 0) timezone_standard = 'Z';

const ConvertNumberToTwoDigitString = n => {
    return n > 9 ? "" + n : "0" + n;
};

const today = new Date();
const date = today.toISOString().slice(0, 10);
const time = `${ConvertNumberToTwoDigitString(today.getHours())}:${ConvertNumberToTwoDigitString(today.getMinutes())}:${ConvertNumberToTwoDigitString(today.getSeconds())}`;
const dateTime = `${date}T${time}${timezone_standard}`;

export default dateTime 
