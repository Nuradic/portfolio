
let wheel=document.getElementById("spinner");
wheel.addEventListener("click",()=>{
let s=document.getElementById("wheel");
s.style.transition="3s";
s.style.transform="rotate(360deg)";
});
  
let items=document.getElementsByClassName("pie-item");
for(let j of items){
    j.addEventListener("click",()=>{
        
        let value=j.getAttribute("value");
        if(value>4){
            value=4-value;
        }
        let angle=45*(value);
        console.log();
        let s=document.getElementById("wheel");
        s.style.transition="3s";
        let r=45*(j.getAttribute("value")-1);
        s.style.transform=`rotate(${angle}deg)`;
        for(let k of items){
            k.style="background-color:grey";
        }
        j.style="background-color:#FF7262";
        console.log(j.classList)
    });

        // 0 45*0
        // 45 45*1
        // 90 45*2
        // 135 45*3
        // 180 45*4
        // -45
        // -90
        // -135
}