addEventListener("DOMContentLoaded", () => {
    showMenu();

})

const 
    tailFormNormal = "bg-slate-600 border-white border-2 rounded-md px-3 py-1 text-white w-full",
    tailFormSelected = "bg-slate-600 border-white border-2 rounded-md px-3 pt-3 pb-1 text-white w-full";

function showMenu(){
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

function addTask() {
    const 
        formNameTask = document.querySelector("#nameTask"),
        textNameTask = document.querySelector(".labelNameTask"),
        sectionTask = document.querySelector(".add-task");

    let selected = false;

    formNameTask.addEventListener("click", () => {
        if (!selected)
        {
            formNameTask.className = tailFormSelected;
            formNameTask.placeholder = "";
            textNameTask.classList.remove("hidden");
            selected = true;
            console.log("seleccionado");
        }
    })
    sectionTask.addEventListener("click", ()=> {
        if (selected)
        {
            formNameTask.className = tailFormNormal;
            formNameTask.placeholder = "Nombre de tu tarea";
            textNameTask.classList.add("hidden");
            selected = false;
            console.log("ocultado");
        }
    })
}