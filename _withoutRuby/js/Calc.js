// 関数を定義
function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "数値を入力してください";
    }else {
        result = num1 + num2;
    }
    document.getElementById("result").textContent = result;
}

function sub() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "数値を入力してください";
    }else {
        result = num1 - num2;
    }
    document.getElementById("result").textContent = result;
}

function mul() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "数値を入力してください";
    }else {
        result = num1 * num2;
    }
    document.getElementById("result").textContent = result;
}

function div() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "数値を入力してください";
    }else {
        result = num1 / num2;
    }
    document.getElementById("result").textContent = result;
}

// ボタン要素を取得
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

// クリックイベントリスナーを設定
plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);