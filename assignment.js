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



// 3) Brick Calculator
function brickCalculator(floor){
    if(floor > 0 && floor < 11){
        var feetCalculation = 15*1000 ;
        var totalBricks = floor * feetCalculation ;
        return "Total "+totalBricks + " bricks";
    }
    else if(floor > 10 && floor <21){
        var secondCondition = 150000;
        var feetCalculation = 12*1000 ;
        var nthFloor = floor - 10 ;
        var totalBricks = (nthFloor * feetCalculation) + secondCondition;
        return "Total "+totalBricks + " bricks";
    }
    else if(floor >= 21){
        var thirdCondition = 270000;
        var feetCalculation = 10*1000 ;
        var nthFloor = floor - 20 ;
        var totalBricks = (nthFloor * feetCalculation) + thirdCondition;
        return "Total " +totalBricks + " bricks";
    }
    else{
        return "number of floor is invalid" 
    }
}
let brickResult = brickCalculator(42); // Number of floors
console.log(brickResult);
