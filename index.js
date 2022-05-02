// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",matchFun);

function matchFun(){
    event.preventDefault();

    var array = JSON.parse(localStorage.getItem("schedule")) || [];

    var obj = {
        mnum:masaiForm.matchNum.value,
        t1name:masaiForm.teamA.value,
        t2name:masaiForm.teamB.value,
        mdate:masaiForm.date.value,
        mvenue:masaiForm.venue.value
    }

    array.push(obj);
    localStorage.setItem("schedule", JSON.stringify(array));
}