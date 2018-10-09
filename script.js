var modal = document.getElementById("myModal");
var i;
//var modalDiv = document.getElementById
var img = document.getElementsByClassName("img-fluid");
var modalImg = document.getElementById("img01");

 for(i=0;i< img.length;i++)
   {    
    img[i].onclick = function(){

    modal.style.display = "block";
       modalImg.src = this.src;

 }
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
   modal.style.display = "none";
}
modal.ondblclick = function() {
    modal.style.display = "none";
}