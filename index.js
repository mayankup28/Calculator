let str=""
let btns=document.querySelectorAll('.btn');
let getinput=document.querySelector('.input')
for(button of btns){
    button.addEventListener('click', (ele)=>{
        let data=ele.target.innerHTML;
            if(data=="="){
            str=eval(str)
            getinput.value=str

        }
        else if(data=="C"){
            str=""
            getinput.value=str

        }
        else{
            console.log(ele.target)
            str=str+data;
            getinput.value=str
        }
    })
}





// let screen=document.querySelector('.input')
// let buttons=document.querySelectorAll('button')
// let screenvalue='';
// for(item of buttons){
//     item.addEventListener('click',(ele)=>{
//         btnText=ele.target.innerText;
//         if(btnText=="x"){
//             btnText="*"
//             screenvalue+=btnText
//             screen.value=screenvalue;
//         }
//         else if(btnText=="c"){
//             screenvalue='';
//             screen.value=screenvalue;
//         }
//         else if(btnText=="="){
//             screen.value=eval(screenvalue);
//         }
//         else{
//             screenvalue+=btnText
//             screen.value=screenvalue;
//         }
//     })
// }



















