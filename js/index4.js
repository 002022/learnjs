let imginput=document.querySelector('inpur')
let image=document.querySelector('img')

imginput.addEventListener('change', function (event){
    let fichier=event.target.files[0]

    let nomimg=fichier.name

    image.setAttribute('scr', nomimg)
})