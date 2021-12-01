function Qsend(){
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    window.location.replace("ans_page.html")
}
p1 = localStorage.getItem("player1_name");
p2 = localStorage.getItem("player2_name");

document.getElementById("Qturn").innerHTML = p1;
document.getElementById("Aturn").innerHTML = p2;