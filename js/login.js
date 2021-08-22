document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email').value;
    const passField = document.getElementById('user-pass').value;
    const userEmail = 'abc@def.com';
    const userPass = 'Abcd';
    if (emailField == userEmail && passField == userPass){
        window.location.href = 'banking.html'
    };
    
});
