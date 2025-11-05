function logout() {
    window.location.href = "index.html";
}

function toggleExpand(selectedCard) {
    const allCards = document.querySelectorAll(".feature-card");

    if (selectedCard.classList.contains("expanded")) {
        // Collapse all cards and show everything
        allCards.forEach(card => {
            card.classList.remove("expanded");
            card.querySelector(".details").classList.add("hidden");
            card.style.display = "block";
        });
    } else {
        // Hide all other cards and expand only the selected one
        allCards.forEach(card => {
            if (card !== selectedCard) {
                card.style.display = "none";
            }
        });

        selectedCard.classList.add("expanded");
        selectedCard.querySelector(".details").classList.remove("hidden");
    }
}

document.querySelector(".team-btn").addEventListener("click", function() {
    window.location.href = "team.html";
});

