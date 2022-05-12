let readMoreBtn= document.getElementById("readMoreBtn");
let expandableDiv=document.getElementById("expandableDiv");
readMoreBtn.addEventListener("click", ()=>{
    //console.log("clicked");
    expandableDiv.classList.toggle("expandable-open");
    readMoreBtn.textContent=readMoreBtn.textContent.includes("Read More...")? "Read Less...":"Read More...";
    
});

//making the skillLists animate in
let skillList=document.querySelectorAll(".skillList");

function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    //let txt = entry.target.id + " visibility: " + entry.isIntersecting;
    //console.log(txt);
    //output: skillSection visibility: true OR false
    if(entry.isIntersecting){
        skillList.forEach(list=>list.classList.add('active'));
    }else{
        skillList.forEach(list=>list.classList.remove('active'));
    }
        
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('skillSection'));

//dismissable alert
document.getElementById("myAlertBtn").addEventListener('click', function(){
  document.getElementById("myAlert").classList.add('hidden');
});