addEventListener("DOMContentLoaded", () => {
    Tasks();
})

function Tasks(){
    const add = document.querySelector(".btn-task");
    add.addEventListener("click", ()=> {
        const overlay = document.querySelector(".overlay");
        overlay.classList.remove("hidden");
    })
}   