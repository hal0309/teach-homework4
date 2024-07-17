// 関数を定義
function calc(method) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "数値を入力してください";
    }else if (method === "add") {
        result = `${num1} + ${num2} = <span class="bold">${num1 + num2}</span>`
    }else if (method === "sub") {
        result = `${num1} - ${num2} = <span class="bold">${num1 - num2}</span>`
    }else if (method === "mul") {
        result = `${num1} × ${num2} = <span class="bold">${num1 * num2}</span>`
    }else if (method === "div") {
        if (num2 === 0) {
            result = "0で割ることはできません";
        }else {
            result = `${num1} ÷ ${num2} = <span class="bold">${num1 / num2}</span>`
        }
    }


    // resultをp要素で囲み、idがresultの要素の最上部に追加
    const resultElement = document.getElementById("result");
    const p = document.createElement("p");
    p.innerHTML = result;
    resultElement.insertAdjacentElement("afterbegin", p);
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