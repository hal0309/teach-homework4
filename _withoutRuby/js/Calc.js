// 関数を定義
function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 + num2;
        document.getElementById("result").textContent = result;
    }
}

// ボタン要素を取得
const plusBtn = document.getElementById("plusBtn");

// クリックイベントリスナーを設定
plusBtn.addEventListener("click", add);