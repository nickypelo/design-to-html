const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("side_menu");
const closeSideMenu = document.getElementById("show");
const navigation = document.getElementById("navi");

hamburger.addEventListener("click", ()=>{
    console.log("Nicholas");
    console.log(window.innerWidth)
    sideMenu.setAttribute("style", "display:block");
    navigation.classList.toggle('hovering')    
})

closeSideMenu.addEventListener("click", () => {
    sideMenu.setAttribute("style", "display: none")
    navigation.classList.toggle('hovering') 
})

// select items
const options = document.getElementById("options");
const items = document.getElementById("items");
const prompt = document.getElementById("prompt");

const option_item_label = document.getElementById("option_item_label");
const modal = document.getElementById("modal");
const modal_display = document.getElementById("modal_display");


items.addEventListener("click", () =>{
    options.classList.toggle("show");
})

document.querySelectorAll(".option-item").forEach(choose =>{
    choose.addEventListener("click", ()=>{
        prompt.textContent = choose.textContent;
        option_item_label.textContent = choose.textContent;
        modal.classList.toggle("show");
        modal_display.classList.toggle("show");

    })
})

modal.addEventListener("click", ()=>{
    modal.classList.toggle("show");
    modal_display.classList.toggle("show");
    options.classList.toggle("show");
    prompt.textContent = "Select";
})
