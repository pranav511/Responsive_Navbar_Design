
const sidebar = document.querySelector('.sidebar');

const cross_btn = document.querySelector('.cross-btn');
const menu_btn = document.querySelector('.menu-btn');


cross_btn.addEventListener("click", async (e) => {
    e.preventDefault();
    sidebar.style.display = 'none'
})

menu_btn.addEventListener("click", async (e) => {
    e.preventDefault();
    sidebar.style.display = 'block'
})