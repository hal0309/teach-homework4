function keep() {
    let month = document.getElementById("month").value;
    const day =document.getElementById("day").value;
    const evaluation = document.getElementById("evaluation").value;

    if (!month || !day || !evaluation) {
        result = "全ての項目を入力してください。";
    }else if(isNaN(month) || isNaN(day) || isNaN(evaluation)){
        result = "日付と評価は整数で入力してください。";
    }else if(month <= 0 || month >= 13){
        result = "月は1から12の間で入力してください。";
    }else if(day <= 0 || day >= 32){
        result = "日は1から31の間で入力してください。";
    }else if(evaluation <= 0 || evaluation >= 6){
        result = "評価は1から5の間で入力してください。";
    }else{
        const month = parseFloat(document.getElementById("month").value);
        const day = parseFloat(document.getElementById("day").value);
        const evaluation = parseFloat(document.getElementById("evaluation").value);
        result = `${month}月${day}日の評価: <span class="bold">${evaluation}</span>`
    }

    // resultをp要素で囲み、idがresultの要素の最上部に追加
    const resultElement = document.getElementById("result");
    const p = document.createElement("p");
    p.innerHTML = result;
    resultElement.insertAdjacentElement("afterbegin", p);
    // 保存ボタンを押した後、全ての入力欄の値は空になる処理を追加
    document.getElementById("month").value="";
    document.getElementById("day").value="";
    document.getElementById("evaluation").value="";
}

// ボタン要素を取得
const keepBtn = document.getElementById("keepBtn");

// クリックイベントリスナーを設定
keepBtn.addEventListener("click", () => keep());