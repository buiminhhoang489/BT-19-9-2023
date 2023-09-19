let weight = prompt("Nhập weight")
let height = prompt ("Nhập height")
let bmi = weight / (height**2)
if (bmi < 18){
    alert ("underweight")
}
else if (bmi<25){
    alert ("Normal")
}
else if (bmi<30){
    alert("Overweight")
}
else {alert("Obese")}