function change(elem) {
    let eid=elem.id;
    console.log(eid)
    if (eid=="_1") {
        
    document.getElementById("_1").style.backgroundColor="red";
    document.getElementById("_1").style.color="black";
    document.getElementById("_1").style.borderRadius="20px";
    document.getElementById("_0").style="none";
    document.getElementById("_2").style="none";
    document.getElementById("_3").style="none";
    document.getElementById("_4").style="none";
    document.getElementById("_5").style="none";
    
    }
    else if (eid=="_0") {
        
    document.getElementById("_0").style.backgroundColor="red";
    document.getElementById("_0").style.color="black";
    document.getElementById("_0").style.borderRadius="20px";
    document.getElementById("_1").style="none";
    document.getElementById("_2").style="none";
    document.getElementById("_3").style="none";
    document.getElementById("_4").style="none";
    document.getElementById("_5").style="none";
    
    }
    else if (eid=="_2") {
        
    document.getElementById("_2").style.backgroundColor="red";
    document.getElementById("_2").style.color="black";
    document.getElementById("_2").style.borderRadius="20px";
    document.getElementById("_1").style="none";
    document.getElementById("_0").style="none";
    document.getElementById("_3").style="none";
    document.getElementById("_4").style="none";
    document.getElementById("_5").style="none";
    
    }
    else if (eid=="_3") {
        
    document.getElementById("_3").style.backgroundColor="red";
    document.getElementById("_3").style.color="black";
    document.getElementById("_3").style.borderRadius="20px";
    document.getElementById("_1").style="none";
    document.getElementById("_2").style="none";
    document.getElementById("_0").style="none";
    document.getElementById("_4").style="none";
    document.getElementById("_5").style="none";
    
    }
    else if (eid=="_4") {
        
    document.getElementById("_4").style.backgroundColor="red";
    document.getElementById("_4").style.color="black";
    document.getElementById("_4").style.borderRadius="20px";
    document.getElementById("_1").style="none";
    document.getElementById("_2").style="none";
    document.getElementById("_3").style="none";
    document.getElementById("_0").style="none";
    document.getElementById("_5").style="none";
    
    }
    else{

    document.getElementById("_5").style.backgroundColor="red";
    document.getElementById("_5").style.color="black";
    document.getElementById("_5").style.borderRadius="20px";
    document.getElementById("_1").style="none";
    document.getElementById("_2").style="none";
    document.getElementById("_3").style="none";
    document.getElementById("_0").style="none";
    document.getElementById("_4").style="none";
    

    }
    
    
}
function darkMode() {
    var element = document.body;
    var content = document.getElementById("icon4");
    element.className = "dark-mode";
    if(document.getElementById("icon4").className=="fa-regular fa-lightbulb"){
        document.getElementById("icon4").className = "fa-solid fa-moon"
    }
    else{
        document.getElementById("icon4").className = "fa-regular fa-lightbulb"
        element.className = "light-mode";



    }
    
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function reveal(){
    var reveals=document.querySelectorAll(".reveal");

    reveals.forEach((reveal)=>{
        var windowHeight=window.innerHeight;
        var elementTop=reveal.getBoundingClientRect().top;
        var elementVisible=100;

        if (elementTop<windowHeight-elementVisible) {
            reveal.classList.add("active");
            
        }else{
            reveal.classList.remove("active");
        }
    });

}


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myBtn").style.display = "block";
      
    } else {
    document.getElementById("myBtn").style.display = "none";
      
    }
  }
  
window.addEventListener("scroll",reveal)
window.onscroll = function() {scrollFunction()};


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

