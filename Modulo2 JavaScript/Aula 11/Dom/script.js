//document.body.style.backgroundColor = "black"
//document.body.style.color = "white"

//window.alert("Seja Bem-Vindo")
//window.prompt("Login")
//window.prompt("Senha")
//exemplo: site de sistemas de roteador/

//window.confirm("Site com vírus, deseja continuar ? ")


//document.getElementsByTagName("input")



// Selecionando pelo nome da TAG
let paragrafo1 = document.getElementsByTagName("p")[0]; 
    paragrafo1.innerHTML = "USANDO A TAG NAME";
    paragrafo1.style.backgroundColor = "red";

// Selecionando pelo ID
let paragrafo2 = document.getElementById("paragrafo2");
paragrafo2.innerHTML = "USANDO O ID";
paragrafo2.style.backgroundColor = "green";

// Selecionando pela CLASSE
let paragrafo3 = document.getElementsByClassName("paragrafo3")[0];
paragrafo3.innerHTML = "USANDO A CLASSE";
paragrafo3.style.backgroundColor = "blue";

// Selecionando pelo QUERY SELECTOR
let paragrafo4 = document.querySelector("#paragrafo4");
paragrafo4.innerHTML = "USANDO O QUERY SELECTOR";
paragrafo4.style.backgroundColor = "pink";

// Selecionando pelo QUERY SELECTOR ALL
let paragrafo5 = document.querySelectorAll("p")[4];
paragrafo5.innerHTML = "USANDO O QUERY SELECTOR ALL";
paragrafo5.style.backgroundColor = "purple";