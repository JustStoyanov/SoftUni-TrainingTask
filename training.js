let KilometersToGo = 1000;
let FirstDayKilometers = 30, DaysToGo = 30, NewDailyKilometer = 10;

function Calculate() {
    let NewKilometers = 0
    while (DaysToGo > 0) {
        if (DaysToGo === 30) {
            KilometersToGo -= FirstDayKilometers
        } else {
            NewKilometers = (FirstDayKilometers + FirstDayKilometers * (NewDailyKilometer / 100))
            KilometersToGo -= NewKilometers
        };
        DaysToGo -= 1
    };
    return KilometersToGo;
};
console.log(Calculate());