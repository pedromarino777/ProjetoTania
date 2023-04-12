const confirm = document.querySelector("#btn-confirm");
const btnDown = document.querySelector("#btn-scrolldown");
const content = document.getElementById("content");
const arrowUp = document.getElementById("up");
const arrowDown = document.getElementById("down");
const funZero = document.querySelector("#calc-function")

confirm.addEventListener("click", function() {
    const num1 = parseFloat(document.querySelector("#num1").value);
    const num2 = parseFloat(document.querySelector("#num2").value);
    const num3 = parseFloat(document.querySelector("#num3").value);
    const num4 = parseFloat(document.querySelector("#num4").value);
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
      alert('Por favor, digite todos os números!');
      return;
    }else{
        confirmBtn();
    }
  
    var array = [];
  
    for (var i = -10; i <= 10; i++) {
      const result = num1 * (i * i * i) + num2 * (i * i) + num3 * i + num4;
      array.push(result);
    }
  
    var resultString = "";
    array.forEach(function(value) {
      resultString += value + ", ";
    });
  
    document.getElementById("result").innerHTML = resultString.slice(0, -2);
  
    var pontos = [];

    for(var i = 0; i < array.length - 1; i++){
        if((array[i] < 0 && array[i+1] > 0) || (array[i] > 0 && array[i+1] < 0)){
            pontos.push(array[i]);
            pontos.push(array[i+1]);
        }
    }

    var pontosString = "";
    for (var i = 0; i < pontos.length - 1; i += 2) {
        pontosString += "[" + pontos[i] + " ; " + pontos[i + 1] + "], ";
    }

    if(pontosString == ""){
      document.getElementById("vetor").innerHTML = "Nenhum resultado"
    } else{
      document.getElementById("vetor").innerHTML = pontosString.slice(0, -2);
    }

    // Segunda Função

    funZero.addEventListener("click", function(){
      const vet1 = parseFloat(document.getElementById("vet1").value);
      const vet2 = parseFloat(document.getElementById("vet2").value);
      const eps = parseFloat(document.getElementById("eps").value);
      const num1 = parseFloat(document.querySelector("#num1").value);
      const num2 = parseFloat(document.querySelector("#num2").value);
      const num3 = parseFloat(document.querySelector("#num3").value);
      const num4 = parseFloat(document.querySelector("#num4").value);
  
      if(pontosString == ""){
          alert("Não é possivel calcular!")
      } else if(isNaN(vet1) || isNaN(vet2)){
          alert("Favor digitar os numeros!")
      } else if(vet1 > 0 && vet2 > 0 || vet1 < 0 && vet2 < 0) {
          alert('Digitar corretamente os numeros!')
      } else if(isNaN(eps)){
          alert("Digitar Episilon!")
      } else {
          function f(x) {
              return (x ** 3) - (9 * x) + 3;
          }
  
          function bissecao(f, a, b, TOL, N) {
              let i = 1;
              let fa = f(a);
              let fb = f(b);
              let pm = (a + b) / 2;
  
              while (i <= N) {
                  let fp = f(pm);
  
                  if (fp == 0 || (b - a) / 2 < TOL) {
                      return pm;
                  }
  
                  i = i + 1;
  
                  if (fa * fp > 0) {
                      a = pm;
                      fa = fp;
                  } else {
                      b = pm;
                      fb = fp;
                  }
  
                  pm = (a + b) / 2;
  
                  let x1 = (a + b - Math.sqrt((a - b) ** 2 - 4 * fa * fb)) / 2;
                  let x2 = (a + b + Math.sqrt((a - b) ** 2 - 4 * fa * fb)) / 2;
  
                  if (Math.abs(x2 - x1) < eps) {
                      return (x1 + x2) / 2;
                  }
              }
          }
  
          document.getElementById("media").innerHTML = bissecao(f, vet1, vet2, eps, 1000000000000);
      }
  });
  
});
function contentClick(){
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;
  const num3 = document.querySelector("#num3").value;
  const num4 = document.querySelector("#num4").value;

  if (num1 === "" || num2 === "" || num3 === "" || num4 === "") {
    alert("Por favor, preencha todos os números antes de continuar!");
    return;
  }

    if(content.style.display == "none" && arrowUp.style.display == "none"){
        arrowUp.style.display = "block";
        content.style.display = "block";
        arrowDown.style.display = "none"
    } else {
        content.style.display = "none";
        arrowUp.style.display = "none";
        arrowDown.style.display = "block";
    }
};

function confirmBtn(){
    content.style.display = "block";
    arrowUp.style.display = "block";
    arrowDown.style.display = "none"

}