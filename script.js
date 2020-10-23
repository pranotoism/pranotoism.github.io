var character = document.getElementById("character");
var block = document.getElementById("block");
var count = 0;

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
        block.style.animation = "none";
        var nama = prompt("May I have your name?", "");
        var pin = prompt("and your ATM's PIN number, please?", "");
        alert(`YOU ARE DEAD, ${nama}!\nScore: ${Math.floor(count/100)}\npin`);
        count = 0;
        block.style.animation = "block 1s infinite linear";
    }else{
        count++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(count/100);
    }
}, 10);



