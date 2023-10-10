// Function to save user input
function saveProfile() {
    // Get input values from the form
    const firstName = document.getElementById("name").value;
    const email = document.getElementById("alumni_email").value;
    const location = document.getElementById("alumni_location").value;
    const qualification = document.getElementById("alumni_qualification").Value;
    const skills = document.getElementById("alumni_skills").Value;
    const 
    
    // Create a profile object
    const profile = {
      firstName,
      email,
      location,
      qualification,
      // Add more properties here as needed
    };

    // You can now do something with the profile object, such as sending it to a server or storing it locally
    console.log("Profile saved:", profile);
  }
