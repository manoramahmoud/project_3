let btn =document.getElementById("button");
console.log(btn)
btn.onclick = function (){
      document.getElementById("hiddenn").style.display = "flex";
      document.getElementById("overlayShow").style.display ="flex"
      document.getElementById("product").style.display ="none";
      document.getElementById("footer").style.display ="none";
      document.getElementById("gone").style.display ="none";
      document.getElementById("bod").style.position = "fixed"
   
    
   
     
}
let iconHide = document.getElementById("hidde");
console.log(iconHide)

iconHide.onclick = function(){
    document.getElementById("hiddenn").style.display = "none";
    document.getElementById("overlayShow").style.display ="none";
    document.getElementById("product").style.display ="block";
    document.getElementById("footer").style.display ="block";
    document.getElementById("gone").style.display ="block";
    document.getElementById("bod").style.position = "relative"
   

}

let lists = document.querySelectorAll(".navbar-nav li a");

lists.forEach(function(list){
   list.addEventListener('click', function(){
       clearActive()
      list.classList.add("active");
   })
})

function clearActive(){
    lists.forEach(function(list){
        list.classList.remove("active");
    })
}
