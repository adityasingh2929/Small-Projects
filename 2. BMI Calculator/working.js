const body = document.querySelector('body');

document.getElementById('submit').addEventListener('click', (e) => {
    const weight_info = document.getElementById('weight').value;
    const height_info = ((document.getElementById('height').value) / 100);
    const initial_bmi = (weight_info / (Math.pow(height_info,2)));
    const bmi = initial_bmi.toFixed(2);
    console.log(bmi);
    const val = document.getElementById('value');

    val.innerHTML = bmi;

    const state = document.getElementById('evaluation');
    if(bmi<18.5){
        state.innerHTML = "Skinny!";
    }
    else if(bmi>=18.5 && bmi<=25){
        state.innerHTML = "Healthy!";
    }
    else{
        state.innerHTML = "Obese!";
    }
})

