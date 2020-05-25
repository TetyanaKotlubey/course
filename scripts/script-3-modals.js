var modalr=document.getElementById("myModal-1");
var btnr =document.getElementById("but-register");
var spanr = document.getElementsByClassName("close")[0];
btnr.onclick = function ()
{
    modalr.style.display = "block";
}
 spanr.onclick = function ()
 {
     modalr.style.display ="none";
 }
 window.onclick = function(event)
 {
     if (event.target==modalr)
     {
         this.modalr.style.display = "none";
     }
 }