const body = document.querySelector('form')
document.getElementById('button').addEventListener('click', function (e) {
    e.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please provide a valid height: ${height}`;
        result.style.color = "red"

    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please provide a valid weight: ${weight}`;
        result.style.color = "red"

    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI is: ${bmi}</span> </br>`;
        
        // Additional conditional statements based on BMI
        if (bmi < 18.5) {
            result.innerHTML += "<span>You are underweight.</span>";
            result.style.backgroundColor = "red"; // Set background color to red
            body.style.backgroundColor = "red"
            result.style.color = "white"

        } else if (bmi >= 18.5 && bmi < 25) {
            result.innerHTML += "<span>You are in the healthy weight range.</span>";
            result.style.backgroundColor = "rgba(85,235,30,0.8799894957983193)"; // Set background color to green
            body.style.backgroundColor = "rgba(85,235,30,0.8799894957983193)"
            result.style.color = "white"


        } else if (bmi >= 25 && bmi < 30) {
            result.innerHTML += "<span>You are overweight.</span>";
            result.style.color = "rgba(85,235,30,0.8799894957983193)"; // Set background color to green
            body.style.backgroundColor = "rgba(85,235,30,0.8799894957983193)"
            result.style.color = "white"
            

        } else {
            result.innerHTML += "<span>You are obese.</span>";
            result.style.backgroundColor = "red"; // Set background color to red
            body.style.backgroundColor = "red"
            result.style.color = "white"


        }
    }
});
