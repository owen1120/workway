// 將所有初始化邏輯包裹在 DOMContentLoaded 事件中
// 確保程式碼在所有 DOM 元素準備就緒後才執行，這是最穩定的做法
document.addEventListener('DOMContentLoaded', function() {
  const loginSection = document.getElementById('login-section');
  const registerSection = document.getElementById('register-section');
  
  const showRegisterLink = document.getElementById('show-register-form');
  const showLoginLink = document.getElementById('show-login-form');

  // 點擊「註冊」時切換至註冊頁面
  if (showRegisterLink) {
    showRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      // 確保元素存在
      if (loginSection && registerSection) {
        loginSection.classList.add('d-none');
        registerSection.classList.remove('d-none');
      }
    });
  }

  // 點擊「登入」時切換至登入頁面
  if (showLoginLink) {
    showLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      // 確保元素存在
      if (loginSection && registerSection) {
        registerSection.classList.add('d-none');
        loginSection.classList.remove('d-none');
      }
    });
  }
});