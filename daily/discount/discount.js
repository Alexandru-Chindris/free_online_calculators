// created by Alexandru Chindris
function discount() {
    let price = document.getElementById("usr_price");
    let discount = document.getElementById("usr_discount");
    let span = document.getElementById("f_discount");
    let div = document.getElementById("js_container");
    let result;
    if(price.value > 0 && discount.value > 0){
        result = price.value-((discount.value/100)*price.value);
    }else{
        alert("complete all the requirements!");
    }
    span.innerHTML= result + " €";
    span.classList.add("discount");
    div.append(span);
}