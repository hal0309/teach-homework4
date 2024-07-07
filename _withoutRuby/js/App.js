const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const age = urlParams.get('age');

const userInfoElement = document.getElementById('user-info');
if (userInfoElement !== null && name && age) {
    userInfoElement.innerHTML = `<span class="bold">${name}(${age})</span>のページです。`;
}



const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const timeString = `${hours}時${minutes}分`; // 現在時刻の文字列


/* todo: ここに処理を追加(現在時刻の文字列は上記を使用してください) */
const element = document.getElementById('time');
element.innerHTML =  `${timeString}`;