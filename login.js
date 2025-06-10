function login() {
  const username = document.getElementById('username').value;
  if (username.trim()) {
    localStorage.setItem('chatUser', username);
    window.location.href = 'chat.html';
  }
}
