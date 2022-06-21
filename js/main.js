new WOW().init();



  function changingPhotoOne(){
    
    document.getElementById("change").src = "images/medium-shot-business-women-high-five.jpeg";
    document.getElementById("heading").innerHTML = "Cool Fashion";
    document.getElementById("text").innerHTML = 
    "little fashion template comes with 8 HTML pages provided by tooplate websites";
    document.getElementById("linked").innerHTML ="LEARN ABOUT US"
 
    
     clearInterval(one)
     clearInterval(three)
}
let two = setInterval(function changingPhotoOne(){
    
    document.getElementById("change").src = "images/medium-shot-business-women-high-five.jpeg";
    document.getElementById("heading").innerHTML = "Cool Fashion";
    document.getElementById("text").innerHTML = 
    "little fashion template comes with 8 HTML pages provided by tooplate websites";
    document.getElementById("linked").innerHTML ="LEARN ABOUT US"
}, 3000)

  let one =setInterval(function changingPhotoTwo(){
    
    document.getElementById("change").src = "images/two-business-partners-working-together-office-computer.jpeg";
    document.getElementById("heading").innerHTML = "New design";
    document.getElementById("text").innerHTML = 
    "please share this little fashion template to your friends thank you for supporting us";
    document.getElementById("linked").innerHTML ="EXPLORE PRODUCT"
    
}, 6000);
function changingPhotoTwo(){
    
    document.getElementById("change").src = "images/two-business-partners-working-together-office-computer.jpeg";
    document.getElementById("heading").innerHTML = "New design";
    document.getElementById("text").innerHTML = 
    "please share this little fashion template to your friends thank you for supporting us";
    document.getElementById("linked").innerHTML ="EXPLORE PRODUCT"
    clearInterval(two)
    clearInterval(three)
    
}
let three=  setInterval (function changingPhotoThree(){
    
    document.getElementById("change").src = "images/team-meeting-renewable-energy-project.jpeg";
    document.getElementById("heading").innerHTML = "Talk to us";
    document.getElementById("text").innerHTML = 
    "tooplate is one of the best html css template websites for every one";
    document.getElementById("linked").innerHTML ="WORK WITH US";
}, 9000)
function changingPhotoThree(){
    
    document.getElementById("change").src = "images/team-meeting-renewable-energy-project.jpeg";
    document.getElementById("heading").innerHTML = "Talk to us";
    document.getElementById("text").innerHTML = 
    "tooplate is one of the best html css template websites for every one";
    document.getElementById("linked").innerHTML ="WORK WITH US";
    clearInterval(one)
    clearInterval(two)
}
function print_current_page(){
    window.print();
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
const circle_span = document.querySelectorAll(".btn span");
console.log(circle_span)
circle_span.forEach(function(ele){
  ele.addEventListener('click', function(){
      circle_span.forEach(function(e){
          e.classList.remove('active')
      })
      ele.classList.add('active')
      
  })

  
})



