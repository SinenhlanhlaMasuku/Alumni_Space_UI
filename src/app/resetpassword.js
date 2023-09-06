var app = angular.module('passwordResetApp', []);

app.controller('PasswordResetController', function() {
    var vm = this;

    vm.resetPassword = function() {
        // Add your password reset logic here
        // Typically, you would make an HTTP request to the server to reset the password
        // For this example, we'll simulate a success message
        if (vm.newPassword === vm.confirmPassword) {
            vm.successMessage = 'Password reset successfully';
        } else {
            vm.errorMessage = 'Passwords do not match';
        }
    };
});