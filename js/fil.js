function clickOne(){
    document.getElementById("hold").src ="images/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg"
     document.getElementById("imgs").src ="images/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg";
     document.getElementById("lf1").innerHTML ="over three years in business, we<sup>,</sup>ve had the chance to work on a veriety ofproject, with companies lorem- ipsum dolor sit amit"
     document.getElementById("demo").innerHTML = "Marie, Art Fashion design"
    //  document.getElementById("hold").style.right =0
    //  document.getElementById("hold").style.transitionDuration= "1s"
    //  document.getElementById("lf1").style.color="red"
}
function clickTwo(){
    document.getElementById("hold").src ="images/portrait-british-woman.jpeg"
     document.getElementById("imgs").src ="images/portrait-british-woman.jpeg";
     document.getElementById("lf1").innerHTML ="over three years in business, we<sup>,</sup>ve had the chance to work on a veriety ofproject, with companies lorem- ipsum dolor sit amit"
     document.getElementById("demo").innerHTML = "Sander zoom fashion ideas"
    
}
function clickThree(){
    document.getElementById("hold").src ="images/beautiful-woman-face-portrait-brown-background.jpeg"
    document.getElementById("imgs").src ="images/beautiful-woman-face-portrait-brown-background.jpeg";
    document.getElementById("lf1").innerHTML ="over three years in business, we<sup>,</sup>ve had the chance to work on a veriety ofproject, with companies lorem- ipsum dolor sit amit"
    document.getElementById("demo").innerHTML = "caterine dress fahion"
   
}
function clicks(){
    document.getElementById("hold").src ="images/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg"
    document.getElementById("imgs").src ="images/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg";
    document.getElementById("lf1").innerHTML ="over three years in business, we<sup>,</sup>ve had the chance to work on a veriety ofproject, with companies lorem- ipsum dolor sit amit"
    document.getElementById("demo").innerHTML = "George,Digital Art Fashion"
   
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