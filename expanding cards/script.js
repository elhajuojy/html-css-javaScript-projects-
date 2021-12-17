const panles= document.querySelectorAll('.panel')


panles.forEach((panel) => {
   panel.addEventListener('click',()=>{
       removeActiveClasses()
       panel.classList.add('active')
   })
})


function removeActiveClasses(){
    panles.forEach((panel) =>{
        panel.classList.remove('active')

    })
}


