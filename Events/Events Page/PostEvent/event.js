
        const fileInput = document.getElementById('fileInput');
        const selectedImage = document.getElementById('selectedImage');
        const addButton = document.getElementById('addButton');

        let selectedImageData;

        fileInput.addEventListener('change', function () {
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    selectedImage.src = e.target.result;
                    selectedImageData = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                selectedImage.src = '';
                selectedImageData = null;
            }
        });

        addButton.addEventListener('click', function () {
            // Save the selected image data to localStorage for demonstration
            localStorage.setItem('selectedImageData', selectedImageData);
        alert('Image added to view events page.');
            
    // Navigate to the "view events.html" page
    window.location.href = 'ViewEvents/viewEvents.html';
        });


        /*add multiple images */

        /*
         Function to add a new image
            function addImage() {
            const fileInput = document.getElementById('fileInput');
            const imageContainer = document.getElementById('imageContainer');

            // Check if a file was selected
            if (fileInput.files.length > 0) {
            const newImage = document.createElement('img');
            newImage.src = URL.createObjectURL(fileInput.files[0]);
            newImage.alt = 'Selected Image';

            // Append the new image to the container
            imageContainer.appendChild(newImage);

            // Clear the file input to allow selecting more images
            fileInput.value = '';
            }
            }

            // Attach the addImage function to the Add Image button
            const addButton = document.getElementById('addButton');
            addButton.addEventListener('click', addImage);*/ 

