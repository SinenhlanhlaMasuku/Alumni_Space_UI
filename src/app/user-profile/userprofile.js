var app = angular.module('userProfileApp', []);

app.controller('UserProfileController', function() {
    var vm = this;

    vm.user = {
        profilePic: 'Sihle.jpg',
        name: 'John Doe',
        email: 'johndoe@example.com',
        location: 'New York',
        Qualification:'',
        Skills:'',
        Experience:'',
        Employment_Status:'',
        /*Academic_Transcript: '',*/
        Interest:''
    };

    vm.isEditing = false;
    vm.isProfile  = true;

    vm.editProfile = function() {
        vm.isEditing = true;
        vm.isProfile = false;
    };

    vm.saveProfile = function() {
        // Save profile data (e.g., make an HTTP request to update user details)
        // For this example, we'll simply toggle the editing mode
        vm.isEditing = false;
        vm.isProfile = true;
    };

    vm.cancelEdit = function() {
        // Cancel editing and reset user data
        // For this example, we'll simply toggle the editing mode
        vm.isEditing = false;
        vm.isProfile = true;
    };
});
