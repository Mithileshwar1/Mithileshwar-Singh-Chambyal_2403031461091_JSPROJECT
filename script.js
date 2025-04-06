let count = 0;

document.getElementById("decreasebtn").onclick = () => {
    count -= 1;
    document.getElementById("counterlabel").innerHTML = count;
};

// Reset button
document.getElementById("resetbtn").onclick = () => {
    count = 0;
    document.getElementById("counterlabel").innerHTML = count;
};

//increase btn
document.getElementById("increasebtn").onclick = () => {
    count += 1;
    document.getElementById("counterlabel").innerHTML = count;
};
