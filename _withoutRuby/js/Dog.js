function callDogApi() {
    // HTTPリクエストの作成
    let request = new XMLHttpRequest();
    request.open('GET', 'https://random.dog/woof.json?include=jpeg', true);
    request.responseType = 'json';

    // レスポンスを受け取った時の処理
    request.onload = function () {
        let data = this.response;
//        let data2 = data.url;
//        console.log(data);
        let resultElement = document.getElementById("dogImage");
        resultElement.src = data.url;

//        alert("画像のサイズは" + data.fileSizeBytes + "です");
    };

    // リクエストの送信
    request.send();
}



function dog() {
    // HTTPリクエストの作成
    let request = new XMLHttpRequest();
    request.open('GET', 'https://random.dog/doggos?include=jpeg', true);
    request.responseType = 'json';

    // レスポンスを受け取った時の処理
    request.onload = function () {
        let data = this.response;
        let resultElement = document.getElementById("dogContainer");
        // imgタグを作成
        let srcTag = document.createElement('img');
        // 複数画像を表示
        for (var i = 0, len = data.length; i < len; i++) {
          resultElement.insertAdjacentHTML('beforeend', "<img src='https://random.dog/" + data[i] + "'>");
        }
    };

    // リクエストの送信
    request.send();
}

// 初期画面表示する際に発生するイベント
callDogApi();


// 犬、たくさん来いボタンにイベントを追加
document.getElementById("dogBtn").addEventListener("click", dog);