document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();

  const phone = document.getElementById('phone').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // DEMO ONLY: Login bila database
  if(phone && username && password){
    // Hapa utaweka logic ya kudhibitisha user kwenye database yako
    localStorage.setItem('currentUser', username);
    window.location.href = 'dashboard.html';
  } else {
    alert('Please fill all fields');
  }
});