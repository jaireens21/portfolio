let readMoreBtn= document.querySelector("#readMoreBtn");
let readLessBtn= document.querySelector("#readLessBtn");

let expandableDiv=document.querySelector("#expandableDiv");

readMoreBtn.addEventListener("click", function(){
    expandableDiv.classList.toggle("hidden");
    readMoreBtn.classList.add("hidden");
    readLessBtn.classList.remove("hidden");
});

readLessBtn.addEventListener("click", function(){
    expandableDiv.classList.toggle("hidden");
    readMoreBtn.classList.remove("hidden");
    readLessBtn.classList.add("hidden");
});