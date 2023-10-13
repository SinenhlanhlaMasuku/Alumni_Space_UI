// Get references to the hamburger button and the navigation menu
const hamburgerButton = document.querySelector(".hamburger-button");
const navMenu = document.querySelector(".nav-menu");


// Add a click event listener to the hamburger button
hamburgerButton.addEventListener("click", () => {
    // Toggle the "active" class on both the button and the navigation menu
    hamburgerButton.classList.toggle("active");
    navMenu.classList.toggle("active");
    
});


const notificationButton = document.getElementById('notification-button');
const notificationContainer = document.getElementById('notification-container');

notificationButton.addEventListener('click', () => {
    // Create a new notification message
    const notification = document.createElement('div');
    notification.className = 'notification-message';
    notification.innerText = 'This is a notification!';

    // Append the notification to the container
    notificationContainer.appendChild(notification);

    // Show the notification container
    notificationContainer.style.display = 'block';

    // Automatically hide the notification after a few seconds (e.g., 5 seconds)
    setTimeout(() => {
        notificationContainer.style.display = 'none';
    }, 5000);
});

