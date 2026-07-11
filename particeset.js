/* ===============================
   ELEMENTS
================================*/


const homePage = document.getElementById("homePage");
const insertPage = document.getElementById("insertPage");
const historyPage = document.getElementById("historyPage");


const menuBtn = document.getElementById("menuBtn");
const menuDropdown = document.getElementById("menuDropdown");


const homeMenu = document.getElementById("homeMenu");
const insertMenu = document.getElementById("insertMenu");
const historyMenu = document.getElementById("historyMenu");



const openBtn = document.getElementById("openBtn");
const phoneDialog = document.getElementById("phoneDialog");
const closeBtn = document.getElementById("closeBtn");


const numberInput = document.getElementById("number");


const callBtn = document.getElementById("callBtn");
const endBtn = document.getElementById("endBtn");


const whatsappCard = document.getElementById("whatsappCard");
const emailCard = document.getElementById("emailCard");



let callChart = null;

let startTime = null;





/* ===============================
   MENU
================================*/


if(menuBtn){

menuBtn.onclick=function(){

    menuDropdown.classList.toggle("show");

};

}



document.addEventListener("click",function(e){

    if(
        !menuBtn.contains(e.target) &&
        !menuDropdown.contains(e.target)
    ){

        menuDropdown.classList.remove("show");

    }

});






/* ===============================
   PAGE SWITCH
================================*/


function showPage(page){

    homePage.style.display="none";
    insertPage.style.display="none";
    historyPage.style.display="none";


    page.style.display="block";


}





/* ===============================
   MENU LINKS
================================*/


if(homeMenu){

homeMenu.onclick=function(e){

    e.preventDefault();

    showPage(homePage);

    menuDropdown.classList.remove("show");

};

}



if(insertMenu){

insertMenu.onclick=function(e){

    e.preventDefault();

    showPage(insertPage);

    menuDropdown.classList.remove("show");

};

}




if(historyMenu){

historyMenu.onclick=function(e){

    e.preventDefault();

    showPage(historyPage);

    menuDropdown.classList.remove("show");

};

}







/* ===============================
   DIAL PAD
================================*/


if(openBtn){

openBtn.onclick=function(){

    phoneDialog.style.display="flex";

};

}



if(closeBtn){

closeBtn.onclick=function(){

    phoneDialog.style.display="none";

};

}




window.onclick=function(e){

    if(e.target===phoneDialog){

        phoneDialog.style.display="none";

    }

};






/* ===============================
   NUMBER BUTTON
================================*/


function addNumber(num){

    if(numberInput.value.length < 15){

        numberInput.value += num;

    }

}




function deleteNumber(){

    numberInput.value =
    numberInput.value.slice(0,-1);

}







/* ===============================
   CALL SYSTEM
================================*/


if(callBtn){


callBtn.onclick=function(){


    if(numberInput.value===""){


        alert("Enter phone number");

        return;

    }



    startTime=new Date();



    alert(
        "Calling "+numberInput.value
    );



};


}






/* ===============================
   END CALL
================================*/


if(endBtn){


endBtn.onclick=function(){



    if(!startTime){


        alert("No active call");

        return;


    }



    let endTime=new Date();



    let duration =
    Math.floor(
        (endTime-startTime)/1000
    );



    addHistory(
        numberInput.value,
        startTime.toLocaleTimeString(),
        endTime.toLocaleTimeString(),
        duration+" sec",
        "Answered"
    );



    alert("Call Ended");


    numberInput.value="";


    startTime=null;


};



}






/* ===============================
   HISTORY TABLE
================================*/


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

<td>
<i class="fa-solid fa-circle-check"
style="color:green">
</i>
${status}
</td>

`;



table.appendChild(row);



}








/* ===============================
   WHATSAPP OPEN
================================*/


if(whatsappCard){


whatsappCard.ondblclick=function(){


window.open(
"https://web.whatsapp.com/",
"_blank"
);


};


}







/* ===============================
   EMAIL OPEN
================================*/


if(emailCard){


emailCard.ondblclick=function(){


window.open(
"https://mail.google.com/",
"_blank"
);


};


}









/* ===============================
   CHART
================================*/


function createChart(){


const canvas=document.getElementById("callChart");



if(!canvas){

return;

}




if(callChart){

callChart.destroy();

}





callChart=new Chart(canvas,{

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


data:[

5,
8,
10,
7,
12,
15,
20

],



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


animation:{


duration:2000


},



scales:{


y:{


beginAtZero:true


}


}



}



});


}





createChart();
