// Go to top
var mybutton = document.getElementById('myBtn');

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



// var mybutton = document.getElementById('myBtn');

// window.onscroll = function() {
//     scrollFunction()
// };

// function scrollFunction(){
//     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
//         mybutton.style.display = "block";
//         document.getElementById('nav').classList.add('bgon');
//        document.getElementById('nav').classList.remove('bg');
//     }
//     else{
//         mybutton.style.display = "none";
//         document.getElementById('nav').classList.add('bg');
//        document.getElementById('nav').classList.remove('bgon');
//     }
// }
// function topFunction(){
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }


// function add(){
//     var x = document.getElementById('x').value;
   
//     if(x == ''){
//         // alert('safaa');
//         document.getElementById('x').classList.add('error');
//     }
// }



// function myFunction(){

//     // document.getElementById('nav').style.display = "block";

//     document.getElementById('nav').classList.toggle('show');


// }


// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }


// $('.toggle-menu').click(function(){
//   $('.toggle-menu').toggleClass('active');
//   $('.menu-drawer').toggleClass('open');
// });



