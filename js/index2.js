let input=document.querySelector('input')
let btn=document.querySelector('button')

input.addEventListener('input', function (){
    let valinput=this.value
    let long=valinput.length

    if(long>8){
        btn.removeAttribute('disabled')
    }else{
        btn.setAttribute('disabled', true)
    }
})