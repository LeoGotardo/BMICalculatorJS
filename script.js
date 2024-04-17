const form = document.querySelector("#form");

form.addEventListener("submit", function (e){
    e.preventDefault();
    const weightEntry = e.target.querySelector("#Weight");
    const heightEntry = e.target.querySelector("#Height");

    const weight = Number(weightEntry.value);
    const height = Number(heightEntry.value);

    if(!weight) {
        setResult('Invalid Weight', false);
        return;
    }
    if(!height) {
        setResult('Invalid Height', false);
        return;
    }

    const bmi = calcBMI(weight, height);
    const level = getLevel(bmi)

    const msg = `Your BMI is ${bmi} (${level}).`
    setResult(msg, true)
});

function calcBMI(weight, height){
    console.log(`peso ${weight} altura ${height}`)
    const bmi =  weight / height ** 2;

    return bmi.toFixed(2);
};

function setResult(msg, isValid){
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = addP();

    if(isValid){
        p.classList.add('result');
    }
    else{
        p.classList.add('invalid');
    }

    p.innerHTML = msg;
    result.appendChild(p);
};

function addP() {
    const p = document.createElement('p');
    return p;

};

function getLevel(bmi){ 
    level =['Uderweight', 'Healthy weigth', 'Overweigth',
    'Obese Type 1', 'Obese Type 2', 'Obese Type 3']

    if (bmi >= 39.9) return level[5];
    if (bmi >= 34.9) return level[4];
    if (bmi >= 29.9) return level[3];
    if (bmi >= 24.9) return level[2];
    if (bmi >= 18.5) return level[1];
    if (bmi < 18.5) return level[0];
  
}