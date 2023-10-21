      // Retrieve the selected image data from localStorage
      const selectedImageData = localStorage.getItem('selectedImageData');
      if (selectedImageData) {
          const addedImage = document.getElementById('addedImage');
          addedImage.src = selectedImageData;
      }