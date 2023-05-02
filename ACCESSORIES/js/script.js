
     //Navbar Menu

     var MenuItems = document.getElementById("MenuItems");

     MenuItems.style.maxHeight == "0px";


     function menuToggle(){
     	if(MenuItems.style.maxHeight == "0px"){
     		MenuItems.style.maxHeight = "200px";
     	} else{
     		MenuItems.style.maxHeight = "0px";
     	}
     }
     

    
     
    //See full one Product from all sides - productdetails
    
    var ProductImg =document.getElementById("ProductImg");
    var SmallImg =document.getElementsByClassName("small-img");
    

    //Display the image from small imgs
    SmallImg[0].onclick = function(){
    	ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function(){
    	ProductImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function(){
    	ProductImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function(){
    	ProductImg.src = SmallImg[3].src;
    }

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
     anchor.addEventListener("click", function(e){
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
               behavior : "smooth"
          });
     });
});