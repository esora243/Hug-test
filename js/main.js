/* ====================================
   株式会社はぐめいど - 共通JS
   ==================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ハンバーガーメニュー
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    // メニュー項目クリック時に閉じる
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });
  }

  // スクロールフェードイン
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // IntersectionObserver未対応のブラウザ
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // お問い合わせフォーム（ダミー送信）
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // 簡易バリデーション
      const requiredFields = contactForm.querySelectorAll('[required]');
      let isValid = true;
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#d35454';
          isValid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      if (!isValid) {
        alert('必須項目をご入力ください。');
        return;
      }

      // 送信処理（デモ）
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '送信中...';
      submitBtn.disabled = true;

      setTimeout(() => {
        alert('お問い合わせありがとうございます。\n内容を確認のうえ、担当者よりご連絡いたします。\n\n※このフォームはデモです。実際の送信は行われません。');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 800);
    });
  }

  // 現在のページのナビゲーションをアクティブ化
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

});
