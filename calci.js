console.log("I am calculator");
let ext=document.getElementById('new');
let c=0;
let screenVal='';
let text=document.getElementById('txt');
let buttons=document.querySelectorAll('button');
for (i of buttons) {
    i.addEventListener('click',(e)=>{
        btnTxt=e.target.innerText;
        if (btnTxt=='=') {
            text.value=eval(screenVal);
        }
        else if(btnTxt=='C')
        {
            screenVal=""
            text.value=screenVal
        }
        else if(btnTxt=='%'){
            screenVal=(screenVal)/100;
            text.value=screenVal

        }
        else if(btnTxt=='Adv')
        {
            c=c+1;
            if(c%2!=0)
            {
                ext.classList.remove('hide')
            }
            else{
                ext.classList.add('hide')
            }
        }
        else if(btnTxt=='sin'){
                text.value=Math.sin(screenVal)
            }
        else if(btnTxt=='cos'){
                text.value=Math.cos(screenVal)
            }
        else if(btnTxt=='tan'){
                text.value=Math.tan(screenVal)
            }
            else if(btnTxt=='exp2'){
                text.value=Math.pow(screenVal,2)
            }
            else if(btnTxt=='sin^-1'){
                text.value=Math.asin(screenVal)
            }
        else if(btnTxt=='cos^-1'){
                text.value=Math.acos(screenVal)
            }
        else if(btnTxt=='tan^-1'){
                text.value=Math.atan(screenVal)
            }
        else if(btnTxt=='log10'){
                text.value=Math.log10(screenVal)
            }
         else if(btnTxt=='ln'){
                text.value=Math.log(screenVal)
            }
        else if(btnTxt=='e^x'){
                text.value=Math.pow(Math.E,screenVal)
            }
         else if(btnTxt=='sqrt'){
                text.value=Math.sqrt(screenVal)
            }  
        else if(btnTxt=='PI')
        {
            text.value=Math.PI;
        }          
        else
            {
                screenVal+=btnTxt
                text.value=screenVal
            }
        
    })
      
}