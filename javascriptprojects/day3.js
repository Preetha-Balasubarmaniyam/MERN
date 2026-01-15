//On Event
var getbtnOn = document.getElementById("btnon");
getbtnOn.addEventListener("click",()=>{
    var caton = document.getElementById("catoff");
    caton.setAttribute('src','https://ik.imagekit.io/preetha/MERN/cat-img.png?updatedAt=1767775724183');
    var bulbon =document.getElementById("bulboff");
    bulbon.setAttribute('src','https://ik.imagekit.io/preetha/MERN/bulb-go-on-img.png?updatedAt=1767775784756');
})
//Off Event
var getbtnOff=document.getElementById("btnoff");
getbtnOff.addEventListener("click",()=>{
 location.reload();
})