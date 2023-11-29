document.addEventListener('DOMContentLoaded',function () {


    /* CHECK OUT BUTTON */    
    const checkout = document.getElementById('checkout')
    const totalPrice = document.getElementById('totalPrice').innerHTML
    if (totalPrice < 1){
        checkout.style.display="none";
        console.log(totalPrice)

    }
    else{ checkout.style.display='block'
    console.log(totalPrice)
    }

})