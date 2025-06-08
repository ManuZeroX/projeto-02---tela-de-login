function calculo_IMC(){
    let nome = document.getElementById("i_nome").value;
    let altura = document.getElementById("i_altura").value;
    let peso = document.getElementById("i_peso").value;
    let aviso = document.getElementById("aviso");

    if(nome == 0 || altura == 0 || peso == 0){
        aviso.style.display = "block";
    }else{
    let R_nome = document.getElementById("R_nome");
    let R_IMC = document.getElementById("R_IMC");
    let R_clas = document.getElementById("R_classificacao");
    let IMC = peso/(altura*altura);
    let resp;
    let saida =  document.getElementById("saida");
    let entrada = document.getElementById("entrada");

    entrada.style.display = "none";
    saida.style.display = "block";

    if(IMC <18.5){
        resp = "ABAIXO DO PESO";
        cor = "#1baa0e";
        tcor = "#052c02";
    }else if(IMC >=18.5 && IMC <25){
        resp = "PESO IDEAL";
        cor = "#53cf0b";
        tcor = "#173803";
    }else if(IMC >=25 && IMC <30){
        resp = "SOBREPESO";
        cor = "#e79600";
        tcor = "#634000";
    }else{
        resp = "OBESIDADE";
        cor = "#c70a0a";
        tcor = "#470303";
    }
    R_nome.textContent = nome;
    R_IMC.textContent = IMC;
    R_clas.textContent = resp;
    R_clas.style.backgroundColor = cor;
    R_clas.style.color = tcor;
    aviso.style.display = "none";
}
}

function voltar(){
    entrada.style.display = "block";
    saida.style.display = "none";
}