function callDogApi() {
    // HTTPリクエストの作成
    let request = new XMLHttpRequest();
    request.open('GET', 'https://random.dog/woof.json?include=jpeg', true);
    request.responseType = 'json';

    // レスポンスを受け取った時の処理
    request.onload = function () {
        let data = this.response;
        console.log(data);
    };

    // リクエストの送信
    request.send();
}

callDogApi();