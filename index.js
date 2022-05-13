var remuneration = 0;

document.getElementById("button-Calcular").addEventListener("click", function(event){
    event.preventDefault();
    const numeroLlantas = document.getElementById("numeroLlantas");
    const numL = numeroLlantas.value;

    
    const carType = document.getElementById("carType");
    const carT = carType.value;
    

    if(carT==1){
        remuneration = numL*10*30;
    }else if(carT==2){
        remuneration = numL*10*45;
    }else if(carT==3){
        remuneration = numL*10*40;
    }

    const remunerationText = document.getElementById("remuneration");
    remunerationText.innerHTML = "$"+remuneration;

  });

  console.log("ctm");