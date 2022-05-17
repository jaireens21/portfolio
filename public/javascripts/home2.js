let readMoreBtn= document.getElementById("readMoreBtn");
let expandableDiv=document.getElementById("expandableDiv");
readMoreBtn.addEventListener("click", ()=>{
    //console.log("clicked");
    expandableDiv.classList.toggle("expandable-open");
    readMoreBtn.textContent=readMoreBtn.textContent.includes("Read More...")? "Read Less...":"Read More...";
    
});


//dismissable alert
let myAlertBtn=document.getElementById("myAlertBtn");
if(myAlertBtn){
  myAlertBtn.addEventListener('click', function(){
    // console.log("clicked on X");
    document.getElementById("myAlert").classList.add('hidden');
  });
}

