// 関数を定義

function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 + num2;
        document.getElementById("result").textContent = result;
    }else{
      document.getElementById("result").textContent = '値を入力してください';
    }
}

function minus() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 - num2;
        document.getElementById("result").textContent = result;
    }else{
      document.getElementById("result").textContent = '値を入力してください';
    }
}

function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 * num2;
        document.getElementById("result").textContent = result;
    }else{
      document.getElementById("result").textContent = '値を入力してください';
    }
}

function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 / num2;
        document.getElementById("result").textContent = result;
    }else{
      document.getElementById("result").textContent = '値を入力してください';
    }
}

// ボタン要素を取得
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

// クリックイベントリスナーを設定
plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", minus);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);