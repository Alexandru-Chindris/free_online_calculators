// created by Alexandru Chindris
function centuryCalculator() {
    let input = document.getElementById("usr_input");
    let result = document.getElementById("result");
    let div = document.createElement("div");

    if(input.value > 0){
        let century = Math.ceil(input.value/100);
        div.innerHTML="Century: " + century;
        div.classList.add("result");
        result.append(div);

    }else{
        alert("You must insert a positive value!");
        input.value="";
    } 
}
