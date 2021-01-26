function addStuff(nameOfStuff,stuffPrice,count){
    let price= parseFloat(document.getElementById(stuffPrice).innerText);
    if(nameOfStuff=="mobile"){
        var stprice=1219;
    }
    else if(nameOfStuff=="case"){
        var stprice=59;
    }
    price+=stprice;
    document.getElementById(stuffPrice).innerText=price;
    let cn= parseInt(document.getElementById(count).value);
    cn++;
    document.getElementById(count).value=cn;

    //subtotal
    let subTotal=parseInt(document.getElementById('subTotal').innerText);
    subTotal+=stprice;
    document.getElementById('subTotal').innerText=subTotal;

    //tax
    let tax=subTotal*.25;
    document.getElementById('tax').innerText=tax;

    //total
    let total=subTotal+tax;
    document.getElementById('total').innerText=total;




 }

 function subtractStuff(nameOfStuff,stuffPrice,count){
    if(parseInt(document.getElementById(count).value)>=1){
       let price= parseFloat(document.getElementById(stuffPrice).innerText);
       if(nameOfStuff=="mobile"){
          var stprice=1219;
       }
       else if(nameOfStuff=="case"){
          var stprice=59;
       }
       price=price-stprice;
       document.getElementById(stuffPrice).innerText=price;
       let cn= parseInt(document.getElementById(count).value);
       cn--;
       document.getElementById(count).value=cn;
       let subTotal=parseInt(document.getElementById('subTotal').innerText);
       subTotal-=stprice;
       document.getElementById('subTotal').innerText=subTotal;

       //tax
       let tax=subTotal*.25;
       document.getElementById('tax').innerText=tax;

       //total
       let total=subTotal+tax;
       document.getElementById('total').innerText=total;
    } 
 }


 document.getElementById('plusMobile').addEventListener('click',function(){
    addStuff('mobile','mobilePrice','noOfMobile');

 });

 document.getElementById('minusMobile').addEventListener('click',function(){
    subtractStuff("mobile","mobilePrice","noOfMobile");
    
    

 });

 document.getElementById('plusCase').addEventListener('click',function(){
    addStuff('case','casePrice','noOfCase');

 });
 document.getElementById('minusCase').addEventListener('click',function(){
    subtractStuff("case","casePrice","noOfCase");
    

 });