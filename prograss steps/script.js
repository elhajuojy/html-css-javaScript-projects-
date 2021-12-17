

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const Next = document.getElementById('Next')
const circles = document.querySelectorAll('.circle')




let currentActive =1


Next.addEventListener('click',()=>{
    currentActive++
    if(currentActive>circles.length){
        currentActive=circles.length
        
    }
    update()
    
    
})


prev.addEventListener('click',()=>{
    currentActive--
    if(currentActive<1){
        currentActive=1
        
    }

    update()
    
})

function update(){
    circles.forEach((circle,idx)=>{
        if(idx<currentActive){
            circle.classList.add('active')
        

        }else{
            circle.classList.remove('active')
        }
    const actives = document.querySelectorAll('.active')
    progress.style.width=(actives.length-1)/(circles.length-1)*100+'%'
    if(currentActive==1){
        prev.disabled=true
    } else if (currentActive==circles.length){
        Next.disabled=true
    }else{
        prev.disabled=false
        Next.disabled=false
    }

    
    })
}

function imageChnage(){
    
    var myimage =  document.getElementById('Myimage')
    let images = ['https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed00f17d4a99d0006d2e738%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D154%26cropX2%3D4820%26cropY1%3D651%26cropY2%3D5314','https://elephant.art/wp-content/uploads/2018/12/KWIII.jpeg','https://media.gq.com/photos/5e94dfddd695ee0009153e93/4:3/w_2999,h_2249,c_limit/kanye-west-gq-cover-may-2020-promo.jpg','https://s2.glbimg.com/gj_nbScfEOATzH7klUwiJp5Xjrs=/e.glbimg.com/og/ed/f/original/2021/11/23/kanye-west.jpg']
    let random = Math.floor(Math.random()*4);
    myimage.src= images[random];
}