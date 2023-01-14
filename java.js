// 要素を取得
const btn = document.getElementById('btn');
const ham_menu = document.getElementById('menu-pc');
const ham_top = document.getElementById('top');

// ボタンをクリックしたとき
btn.addEventListener('click', () => {
    btn.classList.toggle('close');
    ham_menu.classList.toggle('add-menu-pc');
    ham_modal.classList.toggle('add-modal-pc');
});
// モーダルをクリックしたとき
ham_top.addEventListener('click', () => {
    btn.classList.toggle('close');
    ham_menu.classList.toggle('add-menu-pc');
    ham_modal.classList.toggle('add-modal-pc');
});
