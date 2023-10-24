
        const fileInput = document.getElementById('fileInput');
        const selectedImage = document.getElementById('selectedImage');
        const addButton = document.getElementById('addButton');
        const deleteButton = document.getElementById("deleteButton");

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
       
            
   
        });
        

        //Description
document.getElementById('addButton').addEventListener('click', function() {
  const eventDescription = document.getElementById('eventDescription').value;
  localStorage.setItem('eventDescription', eventDescription);
    
});

//Date

document.getElementById('addButton').addEventListener('click', function() {
  const closingDate = document.getElementById('closingDate').value;
  localStorage.setItem('closingDate', closingDate);
    
});






      // Function to show the modal
function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Event listener for the "Add Image" button
  document.getElementById("addButton").addEventListener("click", function () {
    showModal();
  });
  
  // Event listener to close the modal when clicking the close button
  document.getElementById("closeModal").addEventListener("click", function () {
    closeModal();
  });

   // Event listener to close the modal when clicking the close button
   document.getElementById("closeButton").addEventListener("click", function () {
    closeModal();
  });
  
  
  // Event listener to close the modal when clicking outside the modal
  window.addEventListener("click", function (event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
      closeModal();
    }
  });
 
      // Add an event listener to the delete button
deleteButton.addEventListener("click", function () {
  // Remove the image and button when the delete button is clicked
  addedImage.style.display = "none";
  deleteButton.style.display = "none";
});
    
