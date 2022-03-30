let readMoreBtn= document.getElementById("readMoreBtn");
let expandableDiv=document.getElementById("expandableDiv");

readMoreBtn.addEventListener("click", ()=>{
    //console.log("clicked");
    expandableDiv.classList.toggle("expandable-open");
    readMoreBtn.textContent=readMoreBtn.textContent.includes("Read More...")? "Read Less...":"Read More...";
    
    
});
