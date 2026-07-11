// =====================================
// ELEMENTS
// =====================================


const home = document.getElementById("homePage");
const insert = document.getElementById("insertPage");
const history = document.getElementById("historyPage");



const homeMenu = document.getElementById("homeMenu");
const insertMenu = document.getElementById("insertMenu");
const historyMenu = document.getElementById("historyMenu");



// MENU

const menuBtn = document.getElementById("menuBtn");
const menuDropdown = document.getElementById("menuDropdown");




// PHONE

const openBtn = document.getElementById("openBtn");
const dialog = document.getElementById("phoneDialog");

const closeBtn = document.getElementById("closeBtn");

const numberInput = document.getElementById("number");


const callBtn = document.getElementById("callBtn");
const endBtn = document.getElementById("endBtn");




// CHART

let callChart = null;



let callStartTime = null;





// =====================================
// MENU BUTTON
// =====================================


if(menuBtn){


menuBtn.onclick=function(e){


    e.stopPropagation();


    menuDropdown.classList.toggle("show");


};



}



// CLOSE MENU OUTSIDE CLICK


document.addEventListener("click",function(e){


    if(
        menuDropdown &&
        !menuDropdown.contains(e.target) &&
        !menuBtn.contains(e.target)

    ){

        menuDropdown.classList.remove("show");

    }


});






// =====================================
// PAGE CHANGE
// =====================================



function showPage(page){



    if(home)
    home.style.display="none";


    if(insert)
    insert.style.display="none";


    if(history)
    history.style.display="none";





    if(page){

        page.style.display="block";


        page.style.animation="none";


        setTimeout(()=>{

            page.style.animation="show .5s ease";

        },20);


    }


}







// =====================================
// MENU PAGE CLICK
// =====================================



if(homeMenu){


homeMenu.onclick=function(e){


e.preventDefault();


showPage(home);


menuDropdown.classList.remove("show");


};

}



if(insertMenu){


insertMenu.onclick=function(e){


e.preventDefault();


showPage(insert);


menuDropdown.classList.remove("show");


};


}






if(historyMenu){


historyMenu.onclick=function(e){


e.preventDefault();


showPage(history);


menuDropdown.classList.remove("show");


};



}







// DEFAULT PAGE


showPage(home);









// =====================================
// PHONE DIAL POPUP
// =====================================



if(openBtn){


openBtn.onclick=function(){


    dialog.style.display="flex";


};


}







if(closeBtn){


closeBtn.onclick=function(){


    dialog.style.display="none";


};


}





window.addEventListener("click",function(e){


    if(e.target===dialog){


        dialog.style.display="none";


    }


});







document.addEventListener("keydown",function(e){


if(e.key==="Escape"){


    dialog.style.display="none";


}



});







// =====================================
// NUMBER PAD
// =====================================



function addNumber(num){


    if(numberInput.value.length < 15){


        numberInput.value += num;


    }


}






function deleteNumber(){


    numberInput.value =
    numberInput.value.slice(0,-1);


}








// =====================================
// CALL START
// =====================================



if(callBtn){



callBtn.onclick=function(){



    if(numberInput.value===""){


        alert("Enter phone number");

        return;

    }



    callStartTime=new Date();



    alert(
        "Calling : "+numberInput.value
    );



};



}









// =====================================
// END CALL
// =====================================



if(endBtn){



endBtn.onclick=function(){



    if(numberInput.value===""){


        alert("No active call");


        return;


    }





    let endTime=new Date();





    let duration =
    Math.floor(
        (endTime-callStartTime)/1000
    );





    addHistory(

        numberInput.value,

        callStartTime.toLocaleTimeString(),

        endTime.toLocaleTimeString(),

        duration+" sec",

        "Answered"

    );





    alert("Call Ended");



    numberInput.value="";



};



}









// =====================================
// ADD HISTORY TABLE
// =====================================



function addHistory(phone,start,end,duration,status){



const table =
document.querySelector("#historyPage table");



if(!table){

return;

}




let row=document.createElement("tr");




row.innerHTML=`

<td>${phone}</td>

<td>${start}</td>

<td>${end}</td>

<td>${duration}</td>

<td>${status}</td>

`;



table.appendChild(row);



}










// =====================================
// CHART
// =====================================



function createChart(){



const canvas =
document.getElementById("callChart");



if(!canvas){

return;

}





if(callChart){

callChart.destroy();

}





callChart = new Chart(canvas,{



type:"line",



data:{


labels:[

"9 AM",
"10 AM",
"11 AM",
"12 PM",
"1 PM",
"2 PM",
"3 PM"

],




datasets:[{


label:"Today's Calls",



data:[5,8,10,7,12,15,20],



borderColor:"#20c9e8",



backgroundColor:
"rgba(32,201,232,.25)",



fill:true,



tension:.4,



pointRadius:5



}]



},





options:{


responsive:true,


maintainAspectRatio:false,



plugins:{


legend:{


display:true


}


},



scales:{


y:{


beginAtZero:true


}


}



}



});




}






// LOAD CHART

createChart();