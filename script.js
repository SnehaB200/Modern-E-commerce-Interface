const categoryList = document.querySelector('.category-list');
    if(categoryList){
        categoryList.addEventListener('click', (event)=>{
            const clickItem = event.target.closest('li.category');

            if(clickItem){
                event.preventDefault();
                const currentActive = categoryList.querySelector('li.category.active');
                if(currentActive){
                    currentActive.classList.remove('active');
                }
                clickItem.classList.add('active');
            }
        });
    }

document.addEventListener('DOMContentLoaded' , () =>{
    const menuToggle = document.querySelector('.toggle-menu');
    const sideBar = document.querySelector('.sidebar');

    if(menuToggle && sideBar){
        menuToggle.addEventListener('click', ()=>{
            sideBar.classList.toggle('is-open');
        });
    }
});