
const btnMenu = document.getElementById('btnmenu');
const navegacion = document.getElementById('navegacion');



btnMenu.addEventListener('click',()=>{

    /* console.log(btnMenu.src.split('/')[10]); */
    if(btnMenu.src.split('/')[10] ==='logo-SF.png'){
        btnMenu.src = 'img/logo-SF.png';
    }else{
        btnMenu.src = 'img/logo-SF.png';
    }
    navegacion.classList.toggle('navegacion--dinamico');
}); 
