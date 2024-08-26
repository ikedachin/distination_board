const app = Vue.createApp({
    data: () => ({
        
        title: 'Count Down Timer',
        setTimeString: '', // 設定した分、秒（string）
        setSeconds: 0, // setTimeStringを数値の秒に変換
        nowSeconds: 0, // 現在の残り秒数
        countDowntime: '未設定', // 表示内容
        setTimeIsVisible: false, // 表示切替用フラグ
        flagInCount: false, // 二重でcountStartを実行した時にキャンセルするためのフラグ
        alart: '', // 時間を入力しなかった時にアラートを出すため
        resetIsVisible: false,
    }),
    mounted() {
        // this.countStart();
        // setInterval(this.countStart, 1000)
    },
    // watch: { // 上手くいかなかったので一旦廃止
    //     setTimeString: function(value) {
    //         if (value !== "時間が終了しました！") {
    //             value = value.replace('：', ':')
    //             value = value.replace(/[０-９]/g, function(s) {
    //                 return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    //             });
    //             if (value.includes(':')){
    //                 try {
    //                     // if (value !== "時間が終了しました！" & value !== '') {
    //                         let strMin = value.split(':')[0];
    //                         let strSec = value.split(':')[1];
    //                         this.setSeconds = parseInt(strMin, 10) * 60 + parseInt(strSec);
    //                         let minutes = Math.floor(this.setSeconds / 60);
    //                         let seconds = this.setSeconds % 60;
    //                         this.countDowntime = `${minutes.toString().padStart(2, '0')}分${seconds.toString().padStart(2, '0')}秒`;
    //                         this.setTimeIsVisible = true;
    //                     } catch (err) {
    //                         console.log(err)
    //                         this.setTimeIsVisible = false;
    //                     }
    //             }
    //         }
    //     }
    // },
    computed: {
        timerClass() { // class変更設定
          if (this.setSeconds <= 0) {
            return 'red-background';
          } else if (this.setSeconds <= 10) {
            return 'red-background';
          } else if (this.setSeconds <= 30) {
            return 'yellow-background';
          } else {
            // return '';
            return 'default-background';
          }
        }
      },
    methods: {
        set: function (event) {
            if (this.setTimeString === '') {
                this.alart = '"mm:ss"の形式で時間を設定してください'
            } else {
                this.setTimeString = this.setTimeString.replace('：', ':')
                this.setTimeString = this.setTimeString.replace(/[０-９]/g, function(s) {
                    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
                });
                let strMin = this.setTimeString.split(':')[0];
                let strSec = this.setTimeString.split(':')[1];
                this.setSeconds = parseInt(strMin, 10) * 60 + parseInt(strSec);
                let minutes = Math.floor(this.setSeconds / 60);
                let seconds = this.setSeconds % 60;
                this.countDowntime = 
                `${minutes.toString().padStart(2, '0')}分${seconds.toString().padStart(2, '0')}秒`;
                this.setTimeString = this.countDowntime
                this.setTimeIsVisible = !this.setTimeIsVisible
                this.resetIsVisible = false
                this.alart = ''
            }
        },
        countStart: function (params) {
            if (this.flagInCount  === false) {
                this.flagInCount = true;
                this.resetIsVisible = false
                countdownInterval = setInterval(() => {   
                    // 時間がゼロになるまでカウントダウン
                    if (this.setSeconds > 0) {
                        this.setSeconds -= 1
                        let minutes = Math.floor(this.setSeconds / 60);
                        let seconds = this.setSeconds % 60;
                        this.countDowntime = 
                            `${minutes.toString().padStart(2, '0')}分${seconds.toString().padStart(2, '0')}秒`;

                    } else {
                        this.countDowntime = "時間が終了しました！";
                        clearInterval(countdownInterval); // インターバルを停止
                        this.flagInCount = false;
                        console.log('インターバル停止')
                    }               
                }, 1000);
            }
        },
        reset: function() {
            if (this.flagInCount === false) {

                this.setTimeIsVisible = !this.setTimeIsVisible;
                this.flagInCount = false;
                this.setTimeString = ''; // 設定した分、秒（string）
                this.setSeconds = 0; // setTimeStringを数値の秒に変換
                this.nowSeconds = 0; // 現在の残り秒数
                this.countDowntime = '未設定'; 
            }
        },
        stop: function() {
            try {
                clearInterval(countdownInterval);
                this.flagInCount = false;
                this.resetIsVisible = true;
            } catch (err) {
                console.log(err);
            }
        }
    }, 
})

app.mount('#count_app')


