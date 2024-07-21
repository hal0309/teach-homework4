// 関数を定義
function calc(memo) {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        let result;
        let result2;

    if(memo == "add"){
        if (isNaN(num1) || isNaN(num2)) {
            result = "数値を入力してください";
        }else {
            sum = num1 + num2;
            result = num1 + "+" + num2 + "=" + "<b>" + sum + "</b>";
        }
    }

    if(memo == "sub"){
        if (isNaN(num1) || isNaN(num2)) {
            result = "数値を入力してください";
        }else {
            sum = num1 - num2;
            result = num1 + "-" + num2 + "=" + "<b>" + sum + "</b>";
        }
    }

    if(memo == "mul"){
        if (isNaN(num1) || isNaN(num2)) {
            result = "数値を入力してください";
        }else {
            sum = num1 * num2;
            result = num1 + "*" + num2 + "=" + "<b>" + sum + "</b>";
        }
    }

    if(memo == "div"){
        if (isNaN(num1) || isNaN(num2)) {
            result = "数値を入力してください";
        }else if (num2 === 0) {
            result = "0で割ることはできません";
        }else {
            sum = num1 / num2;
            result = num1 + "/" + num2 + "=" + "<b>" + sum + "</b>";
        }
    }
//    document.getElementById("result").textContent = result;
    document.getElementById("result").innerHTML = result;

}

// ボタン要素を取得
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

// クリックイベントリスナーを設定
plusBtn.addEventListener("click", () => calc("add"));
minusBtn.addEventListener("click", () => calc("sub"));
multiplyBtn.addEventListener("click", () => calc("mul"));
divideBtn.addEventListener("click", () => calc("div"));

