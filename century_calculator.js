function centuryCalculator() {
    let input = document.getElementById("usr_input");
    let div = document.getElementById("loc");
    let result = document.createElement("div");

    if(input.value > 0){
        let century = Math.ceil(input.value/100);
        result.innerHTML="Century: " + century;
        div.append(result);
    }else{
        alert("You must insert a positive value!");
        input.value="";
    } 
}