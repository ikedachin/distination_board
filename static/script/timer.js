const app = Vue.createApp({
    data: () => ({
        
        title: '名古屋LLM MeetUp#2',
        setTimeString: '', // 設定した分、秒（string）
        setSeconds: 0, // setTimeStringを数値の秒に変換
        nowSeconds: 0, // 現在の残り秒数
        countDowntime: '未設定', // 表示内容
        setTimeIsVisible: false,
        flagInCount: false,
        alart: '', // 時間を入力しなかった時にアラートを出すため
        
    }),
    mounted() {
        // this.countStart();
        // setInterval(this.countStart, 1000)
    },
    
    methods: {
        set: function (event) {
            if (this.setTimeString === '') {
                this.alart = '"mm:ss"の形式で時間を設定してください'
            } else {
                let strMin = this.setTimeString.split(':')[0];
                let strSec = this.setTimeString.split(':')[1];
                this.setSeconds = parseInt(strMin, 10) * 60 + parseInt(strSec);
                let minutes = Math.floor(this.setSeconds / 60);
                let seconds = this.setSeconds % 60;
                this.countDowntime = 
                `${minutes.toString().padStart(2, '0')}分${seconds.toString().padStart(2, '0')}秒`;
                this.setTimeString = this.countDowntime
                this.setTimeIsVisible = !this.setTimeIsVisible
                this.alart = ''
            }
        },
        countStart: function (params) {
            if (this.flagInCount  === false) {
                this.flagInCount = true;
                countdownInterval = setInterval(() => {    
                    // 時間がゼロになるまでカウントダウン
                    if (this.setSeconds > 0) {
                        this.setSeconds -= 1
                        let minutes = Math.floor(this.setSeconds / 60);
                        let seconds = this.setSeconds % 60;
                        this.countDowntime = 
                        `${minutes.toString().padStart(2, '0')}分${seconds.toString().padStart(2, '0')}秒`;
                    } else if (this.setSeconds === 0) {
                        this.setSeconds--;
                        this.countDowntime = "時間が終了しました！";
                    } else {
                        clearInterval(countdownInterval); // インターバルを停止
                    }               
                }, 1000);
            }
        },
        reset: function() {
            this.setTimeString = ''; // 設定した分、秒（string）
            this.setSeconds = 0; // setTimeStringを数値の秒に変換
            this.nowSeconds = 0; // 現在の残り秒数
            this.countDowntime = '未設定'; 
            this.setTimeIsVisible = !this.setTimeIsVisible
            this.flagInCount = false;
        },
        stop: function() {
            try {
                clearInterval(countdownInterval);
                this.flagInCount = false;
            } catch (err) {
                console.log(err);
            }
        }
        }, 
})

app.mount('#count_app')


// let countdownInterval = setInterval(() => {
//     console.log('updateCountdown');
    
//     // 残り時間を表示（2桁の形式で）
    
//     // 時間がゼロになるまでカウントダウン
//     if (this.setSeconds > 0) {
//         this.setSeconds -= 1;
//     } else {
//         clearInterval(countdownInterval); // インターバルを停止
//         this.countDowntime = "時間が終了しました！";
//     }               
// }, 1000);