function fullName(firstName, lastName) {
    const fullName = `Your Fullname is ${firstName} ${lastName}`
    return fullName
}

function addNumbers(num1, num2) {
    return num1+num2
    
}

function areaOfCircle(radius) {
    if (radius < 0) {
        return "Radius cannot be negative.";
    }
    else {
        var area = Math.PI * radius * radius
        return area
    }
    
}
var radius = 5;
var circleArea = areaOfCircle(radius);

function converOc(Oc) {
    const result = (Oc*9/5)+32
    return result  
}
function Bmi(weight, height) {
    var Bmi = weight / (height * height);
    if (Bmi < 18.5) {
        return "you are underweight"
    }
    if (Bmi >= 18.5 && Bmi <= 24.9) {
        return "you have a normal weight"
    }
    if (Bmi >= 25 && Bmi <= 29.9) {
        return "you are overweight"
    }
    else {
        return "you are obese"
    }
}
function checkSeason(month) {
    if (month >= 1 && month <= 12) {
        if (month >= 3 && month <= 5) {
            return "spring"
        }
        else if (month >= 6 && month <= 8) {
            return "summer"
        }
        else if (month >= 9 && month <= 11) {
            return "autumn"
        }
        else {
            return "winter"
        }
    } else {
        return "input a valid month number between 1-12"
    }
}    

