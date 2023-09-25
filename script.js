var darkmode_switch= document.getElementById("darkmode-wrapper");
var cont=document.getElementById("controller")
var trigger= document.getElementById("darkmode-wrapper").getElementsByClassName("darkmode")[0];
var slide= document.getElementById("darkmode-wrapper").getElementsByClassName("darkmode")[0].getElementsByClassName("dark")[0];

darkmode_switch.onclick=function() {
        if(trigger.className=="darkmode"){
            trigger.setAttribute("class", "whitemode")
            slide.setAttribute("class","white")
            cont.setAttribute("id", "uncontroller")
        }else   if(trigger.className=="whitemode"){
            trigger.setAttribute("class", "darkmode")
            slide.setAttribute("class","dark")
            cont.setAttribute("id", "controller")
        }
}