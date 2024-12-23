let sc= document.querySelector("#screen");
let btns= document.querySelectorAll(".btn");

for(let btn of btns){
    btn.addEventListener("click", ()=>{
        let userVal= btn.innerText;
        let finalVal;

        if(userVal === "C"){
            sc.value="";
        }else if(userVal==="^"){
            sc.value+= "**";
        }
        else if(userVal=="Correct"){
            let string= sc.value;
            let newStr= string.slice(0, -1);
            sc.value= newStr;
        }
        else if(userVal=="x"){
            sc.value+= "*";
        }else if(userVal==="="){
                let str= sc.value;
                if(str.length==0){
                    sc.value= "0"
                }
                sc.value= eval(sc.value);
        }else{
            if(userVal!="C"){
                sc.value+= userVal;
            }
        }
    });
}
