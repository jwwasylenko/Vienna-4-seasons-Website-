autumn.addEventListener('click', function(){
    document.body.classList.add('autumn');
    document.body.classList.remove('spring');
    console.log('autumn');
})

spring. addEventListener('click', function(){
    document.body.classList.add('spring');
    console.log('spring');
        document.body.classList.remove('autumn');
})



