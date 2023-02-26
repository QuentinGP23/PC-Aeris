const menu = document.querySelector('.svg-toggle');
const menuList = document.querySelector('.menu-nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer')

menu.addEventListener('click', () =>{
    menuList.style.display='block';
    main.style.display='none';
    footer.style.display='none';
})