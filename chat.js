const user = localStorage.getItem('chatUser');
document.getElementById('userDisplay').textContent = user;
const chatBox = document.getElementById('chatBox');

function sendMessage() {
  const input = document.getElementById('msgInput');
  const message = input.value.trim();
  if (message) {
    const data = { user, message };
    localStorage.setItem('chatMessage', JSON.stringify(data)); // trigger event
    appendMessage(data, 'sent');
    input.value = '';
  }
}

function appendMessage(data, type) {
  const div = document.createElement('div');
  div.className = message ${type};
  div.textContent = ${data.user}: ${data.message};
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function clearChat() {
  chatBox.innerHTML = '';
}

window.addEventListener('storage', (e) => {
  if (e.key === 'chatMessage') {
    const data = JSON.parse(e.newValue);
    if (data.user !== user) {
      appendMessage(data, 'received');
    }
  }
});
