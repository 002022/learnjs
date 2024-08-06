/*let person ={
    fname:"kev",
    lname:"Ng",
    height:170,
    myname: function(){
 return this.fname +" "+ this.lname
}

};
//delete alert(person.lname)

//alert(person.myname())

document.getElementById(demo)*/

let nbr=document.querySelector('strong')
let allbtn=document.querySelectorAll('button')
let alertdiv=document.querySelector('.alert')

alertdiv.style.display='none'

allbtn.forEach((button) =>{
    button.addEventListener('click', function (){
        let content=this.textContent

        if(content==='incrementer'){
            nbr.textContent=parseInt(nbr.textContent)+1
            if(parseInt(nbr.textContent)>10){
                alertdiv.style.display='block'
            }
        }

        if(content!=='incrementer' && parseInt(nbr.textContent)>0){
            nbr.textContent=parseInt(nbr.textContent)-1
            if(parseInt(nbr.textContent)<10){
                alertdiv.style.display='none'

            }
        }
    })
})

