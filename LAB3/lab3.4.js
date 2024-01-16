
const convertTemperature = (temperature, unit) => {
    if(Celsius === 'C'){
        (temperature * 9/5) + 32;
    }else if(Fahrenheit === 'F'){
        (unit - 32)* 5/9;
    }else{
        console.log("Đơn vị nhiệt độ không hợp lệ, hãy sử dụng C hoặc F");
        null;
    }
};
// const celsiusTemperature = 30;
// const fahrenheitTemperature = 86;

// console.log(`${celsiusTemperature} C là ${convertTemperature(celsiusTemperature, 'C')} F`);
// console.log(`${fahrenheitTemperature} F là ${convertTemperature(fahrenheitTemperature, 'F')} C`);