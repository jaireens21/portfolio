let readMoreBtn= document.querySelector("#readMoreBtn");
let readLessBtn= document.querySelector("#readLessBtn");

let readMoreParas=document.querySelectorAll(".hidden");

readMoreBtn.addEventListener("click", function(){
    readMoreParas.forEach(para=>para.classList.toggle("hidden"));
    readMoreBtn.classList.add("hidden");
    readLessBtn.classList.remove("hidden");
});

readLessBtn.addEventListener("click", function(){
    readMoreParas.forEach(para=>para.classList.toggle("hidden"));
    readMoreBtn.classList.remove("hidden");
    readLessBtn.classList.add("hidden");
});