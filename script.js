const calBMI = (berat,tinggi) => {
    if (!isNaN(berat)&&!isNaN(tinggi)) {
        return berat/((tinggi/100)**2);   
    }
}

const checkBMI = (BMI) =>{
    if (BMI <= 18.5) return 'Underweight';
    else if (BMI>18.5 && BMI<25) return 'Normal Weight';
    else if (BMI>=25 && BMI<30) return 'Overweight';
    else if (BMI>=30) return 'Obesity';
}   

const togglePopup = () =>{
    let popUp = document.getElementById("floating-result");
    popUp.style.display = (popUp.style.display === "block") ? "none" : "block";
}

const submit = (event) =>{
    event.preventDefault();
    berat = document.getElementById("berat").value;
    tinggi = document.getElementById("tinggi").value;
    container = document.getElementById('warning');

    if(berat!='' && tinggi !=''){
        container.replaceChildren();
        togglePopup();
        result = calBMI(berat,tinggi);
        document.getElementById("BMI-value").innerHTML = Math.round(result*10)/10;
        document.getElementById("BMI-cat").innerHTML = checkBMI(result);
    }else if (berat=='' && tinggi=='') {
        container.innerHTML = '<p>Silahkan masukkan Berat dan Tinggi anda</p>';
    }else if (tinggi=='') {
        container.innerHTML = '<p>Silahkan masukkan Tinggi anda</p>';
    }else {
        container.innerHTML = '<p>Silahkan masukkan Berat anda</p>';
    }
}

document.getElementById("submit-form").addEventListener("click",submit);
document.getElementById("close").addEventListener("click",togglePopup);

