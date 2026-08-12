var varPrincipal = document.querySelector(".principal")

varPrincipal.innerHTML= `
            <input type="text" id="peti">
`
var varBtnSuma = document.querySelector(".btnSuma")
varBtnSuma.addEventListener("click",()=>{
    var vali = Number(document.getElementById("peti").value);
    console.log(vali+vali);
    
    varPrincipal.innerHTML=`
            <h1>${vali}</h1>
    `
})


