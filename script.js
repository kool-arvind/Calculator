const input = document.querySelector("input")
const buttons = document.querySelectorAll("button")
const cancel = document.querySelector("#cancel")
const equal = document.querySelector("#equal")
let string = "";
let ans = ""
let ans2 = ""

buttons.forEach((elem) => {
    elem.addEventListener("click",(event) =>{
       

        if(event.target.innerHTML == "Enter" ){
            try{

                ans = eval(ans);
                input.value = ans;
            }
            catch(err)
            {
                input.value = "wrong input";
                console.log(err)
                
            }
        }
        else if(event.target.innerHTML == "C"){
            ans =""
            string = ""
            input.value = ans;
        }
        else{
            string = event.target.innerHTML
            input.value += string
            ans += string;
            console.log(ans)

        }
    })
})
