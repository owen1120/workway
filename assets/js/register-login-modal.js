document.addEventListener('DOMContentLoaded', function() {
  const loginFormContent = document.getElementById('login-form-content');
  const registerFormContent = document.getElementById('register-form-content');
  const loginImageSection = document.getElementById('login-image-section');
  const registerImageSection = document.getElementById('register-image-section');

  const showRegisterLink = document.getElementById('show-register-form');
  const showLoginLink = document.getElementById('show-login-form');

  // 點擊「註冊」時切換至註冊表單
  showRegisterLink.addEventListener('click', function(e) {
    e.preventDefault(); // 必須的，阻止連結的預設行為
    
    // 隱藏登入區塊
    loginFormContent.classList.add('d-none');
    loginImageSection.classList.add('d-none');
    
    // 顯示註冊區塊
    registerFormContent.classList.remove('d-none');
    registerImageSection.classList.remove('d-none');
  });

  // 點擊「登入」時切換至登入表單
  showLoginLink.addEventListener('click', function(e) {
    e.preventDefault(); // 必須的
    
    // 隱藏註冊區塊
    registerFormContent.classList.add('d-none');
    registerImageSection.classList.add('d-none');
    
    // 顯示登入區塊
    loginFormContent.classList.remove('d-none');
    loginImageSection.classList.remove('d-none');
  });
});