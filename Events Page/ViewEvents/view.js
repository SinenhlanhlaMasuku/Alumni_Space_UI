// Retrieve the selected image data from localStorage
const selectedImageData = localStorage.getItem('selectedImageData');
if (selectedImageData) {
    const addedImage = document.getElementById('addedImage');
    addedImage.src = selectedImageData;
}

// Get the delete button and added image elements by their IDs



document.addEventListener('DOMContentLoaded', function() {
    const eventDescription = localStorage.getItem('eventDescription');
    const eventDescriptionElement = document.getElementById('eventDescription');
  


    if (eventDescription) {
        eventDescriptionElement.textContent =  eventDescription;
    } else {
        eventDescriptionElement.textContent = '';
    }

 
});

document.addEventListener('DOMContentLoaded', function() {
    const closingDate = localStorage.getItem('closingDate');
    const closingDateElement = document.getElementById('closingDate');
  


    if (closingDate) {
        closingDateElement.textContent = closingDate;
    } else {
        closingDateElement.textContent = '';
    }

 
});
