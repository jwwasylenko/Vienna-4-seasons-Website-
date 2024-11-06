autumn.addEventListener('click', function(){
    document.body.classList.add('autumn');
    console.log('autumn');
    document.body.classList.remove('spring');
    document.body.classList.remove('summer');
    document.body.classList.remove('winter');
    document.getElementById("banner").src="Vienna.webp"; 
})

winter.addEventListener('click',function () {
    document.body.classList.add("winter");
    console.log('winter');
    document.body.classList.remove('spring');
    document.body.classList.remove('autumn');
    document.body.classList.remove('summer');
    document.getElementById("banner").src="Vienna_Winter.webp";
})


summer.addEventListener('click',function () {
    document.body.classList.add('summer');
    console.log('summer');
    document.body.classList.remove('spring');
    document.body.classList.remove('autumn');
    document.body.classList.remove('winter');
    document.getElementById("banner").src="Vienna_Summertime.webp"

})

spring.addEventListener('click', function(){
    document.body.classList.add('spring');
    console.log('spring');
        document.body.classList.remove('autumn');
        document.body.classList.remove('winter');
        document.body.classList.remove('summer');
        document.getElementById("banner").src="Vienna_Spring.webp"
})






