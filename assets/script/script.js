var reinos = [
    {"raca": "humano", "reino":["Vermênia", "Estátira", "Divinópolis", "Tandra", "Gashbad"],},
    {"raca": "ciclope", "reino":["Glúkdra", "Mashshag", "Agar'roch", "Ugarg", "Warkatopia"],},
    {"raca": "elfo", "reino":["Alqualondë", "Avallonè", "Brithombar", "Eldamar", "Ithilien"],}
]
var numRand = Math.floor(Math.random() * 3)
var ouro = 30
var xp = 20


// alert("Bem vindo ao RPG EXTREMAMENTE experimental do Jhony")


var radios = document.getElementsByName('raca');

function saveName(){
    nome = (document.getElementById("nome").value)
    nome = nome.charAt(0).toUpperCase() + nome.slice(1)
    console.log(nome)
    for (var indice = 0; indice < radios.length; indice++) {
        if (radios[indice].checked) {
          var racaEscolha = reinos[radios[indice].value].raca
          var reinoNasc = reinos[radios[indice].value].reino[numRand];}
        }
    if (nome != "" && reinoNasc != undefined) {
        texto = ("Seu nome é "+nome+", um "+racaEscolha+" nascido e criado no reino de "+reinoNasc+". Você tem "+ouro+" de ouro e "+xp+" de XP")
        document.getElementById("conteudo").innerHTML = texto
    }else {document.getElementById("msg").innerHTML = "Hey! Por favor preencha o campo que falta!"
            function shakeThat(){document.getElementById("msg").style.animation = "shake 0.2s"}
            shakeThat()
           }
}