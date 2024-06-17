const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('#results');


    if (height === '' || isNaN(height) || height <= 0) {
        result.innerHTML = 'Please enter a valid height';
    }
    else if (weight === '' || isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please enter a valid weight';
    }
    else {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        result.textContent = `BMI is ${bmi}`;

        if(bmi<18.6){
            result.textContent += ', You are underweight';
        }
        else if(bmi>=18.6 && bmi<=24.9){
            result.textContent += ', You are normal';
        }
        else{
            result.textContent += ', You are overweight';
        }
        
    }

});
