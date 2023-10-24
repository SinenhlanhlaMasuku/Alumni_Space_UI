var app = angular.module('forgotPasswordApp', []);

app.controller('ForgotPasswordController', function() {
    var vm = this;

    vm.submitEmail = function() {
        // Add your password reset logic here
        // Typically, you would make an HTTP request to a server to send a reset email
        // For this example, we'll simulate a success message
        vm.successMessage = 'Password reset instructions sent to ' + vm.email;
		
    };
});

