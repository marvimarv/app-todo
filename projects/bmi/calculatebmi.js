function calculate(){
const kg = Number(document.getElementById("kg").value);
const cm = Number(document.getElementById("cm").value);
console.log(kg);
console.log(cm);
if (kg && cm && kg > 0 && cm > 0) {
const bmi = Math.round(kg / ((cm / 100) ** 2));
console.log(bmi);


if (bmi <=20 || bmi >= 25) {
const output = document.getElementById('output');
output.classList.remove("alert-success");
output.classList.add("alert","alert-danger");
} else {
const output = document.getElementById('output');
output.classList.remove("alert-danger");
output.classList.add("alert","alert-success");
        } 
const output = document.getElementById('output');
output.innerHTML = `<p><strong>Your BMI is:</strong> ${bmi}</p>`;

} else alert("Please input a valid height and weight to calculate your BMI")

}