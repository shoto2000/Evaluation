// write js code here corresponding to favourites.html

var favouriteData = JSON.parse(localStorage.getItem("favourites"));

function display(data) {
    data.forEach(function (el,index) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = el.mnum;

        var td2 = document.createElement("td");
        td2.innerText = el.t1name;

        var td3 = document.createElement("td");
        td3.innerText = el.t2name;

        var td4 = document.createElement("td");
        td4.innerText = el.mdate;

        var td5 = document.createElement("td");
        td5.innerText = el.mvenue;

        var td6 = document.createElement("td");
        td6.innerText = "Delete";
        td6.addEventListener("click",function(){
            deleteFun(el,index);
        });
        td6.style.color = "red";
        td6.style.cursor = "pointer";

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    })
}

display(favouriteData);



function deleteFun(el,index){
    console.log(el);
    
    favouriteData.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(favouriteData));
    window.location.reload();
}