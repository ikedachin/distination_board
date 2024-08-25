
// // カウントダウンの開始時間を秒で設定（例: 5分 = 300秒）
// let countdownTimeString = '15:00';

// let [strMin, strSec] = countdownTimeString.split(':');

// let countdownTime = parseInt(strMin, 10) * 60 + parseInt(strSec);




// // カウントダウンを更新する関数
// function updateCountdown() {
//     let minutes = Math.floor(countdownTime / 60);
//     let seconds = countdownTime % 60;

//     // 残り時間を表示（2桁の形式で）
//     let display = 
//         `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     console.log(display);
//     // 時間がゼロになるまでカウントダウン
//     if (countdownTime > 0) {
//         countdownTime--;
//     } else {
//         clearInterval(countdownInterval);
//         alert("時間が終了しました！");
//     }
// }

// // 1秒ごとにupdateCountdownを呼び出す
// let countdownInterval = setInterval(updateCountdown, 1000);

const sheets = ['sheet1', 'sheet2', 'sheet3'];

for (let sheet of sheets) {
    console.log(sheet.split(''));
}