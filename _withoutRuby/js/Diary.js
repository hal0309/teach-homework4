// 関数を定義
function saveDiary() {
    // 要素を取得
    const monthElement = document.getElementById("month");
    const dayElement = document.getElementById("day");
    const evalElement = document.getElementById("eval");

    // 要素の値を取得
    let month = monthElement.value;
    let day = dayElement.value;
    let eval = evalElement.value;

    // 入力値のチェック
    if (month === "" || day === "" || eval === "") {
        alert("月、日、評価を入力してください。");
        return;
    }
    if (month.includes('.') || day.includes('.') || eval.includes('.')) {
        alert("日付と評価は整数で入力してください。");
        return;
    }

    // 整数型に変換
    month = parseInt(month);
    day = parseInt(day);
    eval = parseInt(eval);

    // 入力値の範囲チェック
    if (month < 1 || month > 12) {
        alert("月は1から12の間で入力してください。");
        return;
    }
    if (day < 1 || day > 31) {
        alert("日は1から31の間で入力してください。");
        return;
    }
    if (eval < 1 || eval > 5) {
        alert("評価は1から5の間で入力してください。");
        return;
    }

    // 日誌を追加
    const diaryList = document.getElementById("diaryList");
    const div = document.createElement("div");
    div.classList.add("diary");
    div.innerHTML = `${month}月${day}日の評価: <b>${eval}</b>`;
    diaryList.appendChild(div);

    // 入力値をクリア
    monthElement.value = "";
    dayElement.value = "";
    evalElement.value = "";

}

// 保存ボタンにイベントを追加
document.getElementById("saveBtn").addEventListener("click", saveDiary);
