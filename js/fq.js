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

const show_li = document.querySelectorAll('.lists li');
const div = document.querySelectorAll(".lists li > p");
console.log(div)
console.log(show_li)

show_li.forEach(function(e){
   e.addEventListener('click', function(){
       show_li.forEach(function(ele){
          ele.classList.remove('show');
          
       })
       e.classList.toggle('show')
      
   })
})
