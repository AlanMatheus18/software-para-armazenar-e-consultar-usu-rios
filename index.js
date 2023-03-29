var entrada = require("readline-sync")

var nomes = []
var idades = []
var sexos = []

var i = 0

while(perguntar !== 0){
    var perguntar = entrada.question(" 0 - Para sair do sistema\n 1- para cadastrar um usuário\n 2 - para consultar um usuário pelo nome\n 3 para listar todos os usuários cadastrados\n ola, Selecione o que voce deseja utilizar: ")

if(perguntar === "0"){
        console.log("você escolheu encerrar")
    console.log("Obrigado por usar os nossos serviços, encerrando...")
        break
}else if(perguntar === "1"){
     console.log("Voce escolheu se cadastrar")
     var nome = entrada.question("Informe seu nome: ")
     var idade = entrada.question("informe sua idade: ")
     var sexo = entrada.question("Informe seu sexo: ")
     nomes[i] = nome
     idades[i] = idade
     sexos[i] = sexo
     i++
    }else if(perguntar === "2"){
        console.log("Voce escolheu consultar o usuario")
        var nome1 = entrada.question("Informe o nome que voce deseja consultar: ")
        for(var i = 0; i < nomes.length; i++){
            if(nome1 === nomes[i]){
                console.log("Nome" , nomes[i]);
                console.log("Idade" , idades[i]);
                console.log("Sexo" , sexos[i]);
            }else{
                console.log("usuario nao encontrado")
            }
        }
    }else if(perguntar === "3"){
        console.log("Voce escolheu listar o usuario")
        for (var i = 0; i < nomes.length; i++) {
          console.log('Usuário:', i + 1)
          console.log('Nome:', nomes[i]);
          console.log('Idade:', idades[i]);
          console.log('Sexo:', sexos[i]);
        }
    }
    
}