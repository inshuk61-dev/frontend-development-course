document.getElementById("img1").style.display = "block"
document.getElementById("img2").style.display = "none"
document.getElementById("img3").style.display = "none"

let count = Number(document.getElementById("count").innerHTML);

function counter() {
    count++
    if (count === 100) {
        count = 0;
    }

    document.getElementById("count").innerHTML= count;

    document.getElementById("img1").style.display = "none"
    document.getElementById("img2").style.display = "none"
    document.getElementById("img3").style.display = "none"

    if (count <= 33) {
        document.getElementById("img1").style.display = "block"
    }
    else if (count > 33 && count < 66) {
        document.getElementById("img2").style.display = "block"
    }
    else {
        document.getElementById("img3").style.display = "block"
    }

}
