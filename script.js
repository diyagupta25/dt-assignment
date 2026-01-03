let growthScore = 40;

document.getElementById("updateBtn").addEventListener("click", function() {
    growthScore += 10;

    if(growthScore > 100){
        growthScore = 100;
    }

    document.getElementById("progressFill").style.width = growthScore + "%";
    document.getElementById("progressText").innerText = growthScore + "% Completed";

    if(growthScore >= 70){
        document.getElementById("progressText").style.color = "green";
    }
});
