// write js code here corresponding to matches.html

var matchesData = JSON.parse(localStorage.getItem("schedule"));


document.querySelector("#filterVenue").addEventListener("change",changeFun);
display(matchesData);

function changeFun(){
    var selected = document.querySelector("#filterVenue").value;
    var filteredList = matchesData.filter(function(el){
        return el.mvenue == selected;
    });
    display(filteredList)
}

function display(data) {
    data.forEach(function (el) {
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
        td6.innerText = "Add as Favourites";
        td6.addEventListener("click",function(){
            addFav(el);
        })
        td6.style.color = "green";
        td6.style.cursor = "pointer";

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    })
}



var favouriteArr = JSON.parse(localStorage.getItem("favourites")) || [];

function addFav(el){

    favouriteArr.push(el);
    localStorage.setItem("favourites", JSON.stringify(favouriteArr));
}
