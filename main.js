console.log("OK");
const content= document.querySelector(".content")
const button= document.querySelector(".history");
console.log(button);
const para= document.querySelector(".desc");
console.log(para);
if(para.classList.contains("hidden")){
    const span= document.createElement("span");
    span.classList.add("material-icons");
    span.innerText="cloud";
    button.appendChild(span);
}
button.addEventListener("click",()=>{
    para.classList.toggle("hidden");
    if(para.classList.contains("hidden")){
        const ele= button.querySelector(".material-icons");
        button.removeChild(ele);
        const span= document.createElement("i");
        span.classList.add("material-icons");
        span.innerText="cloud";
        button.appendChild(span);
    }
    else{
        const ele= button.querySelector(".material-icons");
        button.removeChild(ele);
        const span= document.createElement("i");
        span.classList.add("material-icons");
        span.innerText="favorite";
        button.appendChild(span);
    }
})
// nav-bar
const navBar= document.querySelector(".nav-bar");
const buttonClick= document.querySelector(".btn-click");
const contentFirst= document.querySelector(".contentFirst");
// const empty= document.querySelector(".empty");
console.log(buttonClick);
const empty = document.querySelector(".empty");
// if(navBar.classList.contains("hidden")) {
//     empty.classList.add("mo");
// }
if(navBar.classList.contains("hidden")){
    content.style.zIndex =  "10";
}
buttonClick.addEventListener("click",()=>{
    
    navBar.classList.toggle("hidden");
    if(!navBar.classList.contains("hidden")){
        contentFirst.style.zIndex =  "11";
        contentFirst.style.top="0px";
    }
    else {
        contentFirst.style.zIndex =  "1";
    }
    if(navBar.classList.contains("hidden")){
        content.style.zIndex =  "10";
    }
    else {
        content.style.zIndex =  "1";
    }
    empty.classList.toggle("mo");
})
empty.addEventListener("click",()=>{
    content.style.zIndex =  "10";
    contentFirst.style.zIndex =  "10";
    navBar.classList.add("hidden");
    contentFirst.style.removeProperty("top");
    empty.classList.remove("mo");
})
