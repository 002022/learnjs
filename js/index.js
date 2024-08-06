/*let nom="john"
let nombre=5
let nbr=4.5
let is_client=true
let client=['Doe','marc']

const PI=3.14

//affichage
//alert('hello')
//console.log('hello')

//afficher une variable et un message
//alert(`Boujour ${nom}`)
//console.log(`Bonjour ${nom}`)


//operation de base avec java script

let nombre1=3
let nombre2=6

let produit=nombre1*nombre2
let somme=nombre1+nombre2
let division=nombre1/nombre2
let soustraction=nombre1-nombre2
let modulo=nombre1%nombre2

let message=`la somme est ${somme}
le produit est ${produit}
la division est ${division}
la soustractoin est ${soustraction}
le modulo est ${modulo}`

//alert(message)
console.log(message)

/*let nombre1=prompt("entrer nombre 1: ")
let nombre2=prompt("entrer nombre 2: ")


let produit=nombre1*nombre2
let somme=parseFloat(nombre1)+parseFloat(nombre2)
let division=nombre1/nombre2
let soustraction=nombre1-nombre2
let modulo=nombre1%nombre2

let message=`la somme est ${somme}
le produit est ${produit}
la division est ${division}
la soustractoin est ${soustraction}
le modulo est ${modulo}`*/

//console.log(message)

//if condition

/*let age=prompt("entre votre age: ")

if (age<18){
    alert("vous etes mineur")
}else{
    alert("vous etes majeur")
}*/

//loops

/*let p=''

for (let i = 0; i < 5; i++) {
    p=p+'bonjour\n'
}

console.log(p)*/

//tableau
//let eleves=['john','marc','doe']

let effectif=prompt(`prompt le nombre d'eleve`)
let eleves=[]
let somme=0

for (let i = 0; i < effectif; i++) {
    eleves[i]=prompt(`entrer la note de l'éleve ${i+1}`)


}

for (let i = 0; i < effectif; i++) {
    somme=somme+parseFloat(eleves[i])
}

console.log(`la somme est ${somme}`)