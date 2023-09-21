let a = document.getElementsByClassName("navele");  // we select by class name
a[0].style.color = 'red';
a[1].style.color ='green';

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    if(element.style.color!="red")
    {element.style.background = "red";
      element.style.color ="WHITE";
      }
});