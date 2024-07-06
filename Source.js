document.getElementById('Submitbutton').addEventListener('click',()=>{
    event.preventDefault()
    var weight=document.getElementById('num1').value;
    var height=document.getElementById('num2').value;
    var height=height/100
    var bmi=weight/(height*height);
    bmi=bmi.toFixed(2);
    if(bmi<18.5){
        const bmiValueElement = document.getElementById('result');
        bmiValueElement.textContent = "Your BMI is "+bmi;
    
        // Change the color to Light blue
        bmiValueElement.style.color = 'rgb(135, 176, 220)';
    }
    if(bmi>18.5 && bmi<24.9){
        const bmiValueElement = document.getElementById('result');
        bmiValueElement.textContent = "Your BMI is "+bmi;
    
        // Change the color to Green
        bmiValueElement.style.color = 'rgb(60, 212, 101)';
    }
    if(bmi>24.9 && bmi<29.9){
        const bmiValueElement = document.getElementById('result');
        bmiValueElement.textContent = "Your BMI is "+bmi;
    
        // Change the color to yellow
        bmiValueElement.style.color = 'rgb(240,224,51)';
    }
    if(bmi>30 && bmi<34.9){
        const bmiValueElement = document.getElementById('result');
        bmiValueElement.textContent = "Your BMI is "+bmi;
    
        // Change the color to Orange red
        bmiValueElement.style.color = 'rgb(243,131,59)';
    }
    if(bmi>35){
        const bmiValueElement = document.getElementById('result');
        bmiValueElement.textContent = "Your BMI is "+bmi;
    
        // Change the color to Orange red
        bmiValueElement.style.color = 'rgb(249,83,83)';
    }
    document.getElementById("Submitbutton").onclick = null;
    document.getElementById('Submitbutton').innerText="Check again?";
    document.getElementById("Submitbutton").addEventListener("click", refresh);
    return false
})
function refresh() {
    window.location.reload();
}