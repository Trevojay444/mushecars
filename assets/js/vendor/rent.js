function searchCars() {
    // Retrieve selected values
    var selectedCarCompany = document.getElementById('car-company').value;
    var selectedSeatingCapacity = document.getElementById('seating-capacity').value;
    var selectedPrice = document.getElementById('price').value;
    var selectedRating = document.getElementById('rating').value;

    // Get all car items
    var carItems = document.getElementsByClassName('item-list');

    // Iterate through car items and reset their display
    for (var i = 0; i < carItems.length; i++) {
        var carItem = carItems[i];
        carItem.style.display = 'block';
    }

    // Filter and hide car items based on selected criteria
    for (var i = 0; i < carItems.length; i++) {
        var carItem = carItems[i];
        var carId = carItem.getAttribute('id');
        var carCapacity = carItem.querySelector('.detail:nth-child(2) p:last-child').textContent;
        var carPrice = parseInt(carItem.querySelector('.detail:nth-child(1) b').textContent);
        var carRating = carItem.querySelector('.detail:last-child p:last-child').textContent;

        // Filter by car company
        if (selectedCarCompany && !carId.includes(selectedCarCompany)) {
            carItem.style.display = 'none';
            continue; // Skip to next iteration
        }

        // Filter by seating capacity
        if (selectedSeatingCapacity && carCapacity !== selectedSeatingCapacity + ' Person') {
            carItem.style.display = 'none';
            continue; // Skip to next iteration
        }

        // Filter by price
        if (selectedPrice && carPrice !== parseInt(selectedPrice)) {
            carItem.style.display = 'none';
            continue; // Skip to next iteration
        }

        // Filter by rating
        if (selectedRating && parseInt(carRating) !== parseInt(selectedRating)) {
            carItem.style.display = 'none';
        }
    }

    // Count visible car items
    var visibleCarItems = document.querySelectorAll('.item-list[style="display: block;"]');
    var searchResults = document.getElementById('search-results');

    // Display search results
    if (visibleCarItems.length > 0) {
        searchResults.textContent = 'Search Results: ' + visibleCarItems.length + ' cars found.';
    } else {
        searchResults.textContent = 'No cars found matching the selected criteria.';
    }
}