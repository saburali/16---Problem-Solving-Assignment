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