let allbtn=document.querySelectorAll('button')
let allparagraph=document.querySelectorAll('p')
let displayname=document.querySelector('.nom')

allparagraph[1].style.display='none'

allbtn.forEach((button)=>{
    button.addEventListener('click', function (){
        let content=this.textContent

        if(content==='Douala'){
            alert('mauvaise reponse!')
        }else{
            let nom=prompt('entrer votre nom: ')

            displayname.textContent=nom

            allparagraph[1].style.display='block'

            setTimeout(function (){
                allparagraph[1].style.display='none'
            }, 2000)
        }
    })
})