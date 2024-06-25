addEventListener("DOMContentLoaded", () => {
    Tasks();
})

const tailFormNormal = "bg-slate-600 border-white border-2 rounded-md px-3 py-1 text-white w-full";

function Tasks(){
    const 
        add = document.querySelector(".btn-task"),
        overlay = document.querySelector(".overlay"),
        taskForm = document.querySelector(".add-task");

    add.addEventListener("click", ()=> {
        overlay.classList.remove("hidden");
        taskForm.classList.remove("hidden");
    })
    overlay.addEventListener("click", ()=>{
        overlay.classList.add("hidden");
        taskForm.classList.add("hidden");
    })
}   