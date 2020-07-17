// 1) Feet To Mile Convert
function feetToMile(feet){
    if(feet == null){
        return "Give a feet value";
    }
    else if(feet<0){
        return "Please input positive number!!";
    }
    else{
        var result = (feet / 5280);
        var mile = feet + " Feet = " + result.toFixed(8) + " Mile \n";
        return mile ;
    }
}
let feetResult = feetToMile(5056); // Feet Number
console.log(feetResult);


// 2) Wood Calculator
function woodCalculator(chair , table , bed){
    if(chair < 0 || table < 0 || bed < 0){
        return "input items";
    }
    else if(chair == null || table == null || bed == null){
        return "you must be use three vlaue";
    }
    else{
        var woodChair = chair * 1 ;
        var woodTable = table * 3 ;
        var woodBed = bed * 5 ;
        var wood = woodChair + woodTable + woodBed ;
        var result = "You have to need " +wood + " cubic feet \n";
        return result;
    }
}
let woodResult = woodCalculator(16, 8, 4); // Chair, Table, Bed
console.log(woodResult);
