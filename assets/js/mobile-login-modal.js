document.addEventListener('DOMContentLoaded', function() {
  // 獲取外部按鈕和相關的 Bootstrap 元件
  const externalAuthBtn = document.getElementById('externalAuthBtn');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const authModalElement = document.getElementById('authModal');
  
  // 創建 modal 實例
  const authModal = new bootstrap.Modal(authModalElement);

  if (externalAuthBtn && navbarToggler) {
    externalAuthBtn.addEventListener('click', function(event) {
      event.preventDefault(); // 防止預設行為，例如如果有連結

      // 1. 觸發漢堡選單的點擊事件
      navbarToggler.click();

      // 2. 等待選單打開動畫結束後再打開 modal
      // Bootstrap 的選單展開動畫通常為 350ms，這裡用 setTimeout 確保順序
      setTimeout(() => {
        authModal.show();
      }, 400); // 這裡設定的時間需要大於選單的動畫時間

    });
  }
});