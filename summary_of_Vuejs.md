
## JavaScript with Vue.js

```JavaScript
const app = Vue.createApp({
    data: () => ({ // データを保持するためのプロパティ
        title: 'Count Down Timer',
        setTimeString: '', // 設定した分、秒（string）
    }),
    mounted() {
        // this.countStart(); // 関数実行（初回）
        // setInterval(this.countStart, 1000) // インタバル設定
    },
    watch: { // 監視プロパティー（変更があれば即時に関数を実行する）
        setTimeString: function(value) { // この場合、「setTimeString」変数に変更があった場合に関数場実行
            // 実行内容
        },
    },
    methods: { // 関数場呼ばれた時に実行する
        set: function (event) { 
            // 実行内容
        },
        countStart: function (params) {
            // 実行内容
        },
    }, 
})

app.mount('#count_app')
```



## HTML

```html
<!-- v-cloakはcssで非表示をしておくとリロード時にソースがチラ見えするのが防げる -->
<div v-cloak id="count_app" style="padding: 50px 50px 50px 50px;">

<h3 v-bind>{{ title }}</h3>
    <div>
        <!-- v-showにtrueを入れると表示、falseは非表示 -->
        <div v-show="!setTimeIsVisible">
            <!-- v-modelは双方向バインディング（dataに記載される） -->
            <input type="text" v-model="setTimeString" placeholder="mm:ss">
            <!-- 監視プロパティを入れたので廃止 -->
            <!-- <button v-on:click="set">set</button> -->

            <div>{{ alart }}</div>
        </div>

        <div v-show="setTimeIsVisible">
            <div class="setTime">設定時間: {{ setTimeString }}</div>
        </div>

        <div v-show="setTimeIsVisible">
            <hr>
            <div class="setTime">残り時間:</div>
            <div class="mainDisplay">{{ countDowntime }}</div>
            <hr>

            <div class="buttons">
                <button class="button" v-on:click="countStart">start</button>
                <button class="button" v-on:click="stop">stop</button>
                <button class="button" v-on:click="reset">reset</button>
            </div>
        </div>
    </div>
<!-- <div>setSeconds: {{ setSeconds }}</div> -->
<div>
    
</div>

<!-- <pre>{{ $data }}</pre> -->

</div>
```

## css (v-cloak)

```css
/* ソースが一瞬見えちゃう対策 */
[v-cloak] {
    display: none;
}
```


## Vue.jsめも


v-if
v-for
v-on
v-model
v-once
v-pre
v-html
v-text
v-cloak
v-bind
