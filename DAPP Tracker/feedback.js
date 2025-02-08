function submitFeedback() {
    const selectedRating = document.querySelector('input[name="star"]:checked');

    if (selectedRating) {
        const ratingValue = selectedRating.value;
        alert(`Thank you for your feedback! You rated us ${ratingValue} stars.`);
        // You can add more functionality here, like sending the rating to a server.
    } else {
        alert('Please select a rating before submitting.');
    }
}

const stars = document.querySelectorAll('.rating input');

stars.forEach(star => {
    star.addEventListener('change', (event) => {
        resetStarColors();
        const selectedStars = event.target.value;
        colorStars(selectedStars);
    });
});

function resetStarColors() {
    stars.forEach(star => {
        star.nextElementSibling.style.color = 'black'; // Change this to your desired unselected color
    });
}

function colorStars(selectedStars) {
    for (let i = 0; i < selectedStars; i++) {
        stars[i].nextElementSibling.style.color = 'gold'; // Change this to your desired selected color
    }
}

/*const a = document.querySelectorAll("input");

for( i = 0; i < a.length; i++) {
    document.querySelectorAll("input")[i].addEventListener("click", function() {
        for( j = 0; j < i; j++) {

        }
    })
} */