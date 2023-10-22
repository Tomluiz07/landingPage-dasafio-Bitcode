const elements = document.querySelectorAll('.doubt ')

elements.forEach( function(doubt){
    doubt.addEventListener('click', function (){
        doubt.classList.toggle('mode')
    })
})