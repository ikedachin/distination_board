const app = Vue.createApp({
    data: () => ({
        title: '行先表示',
        division: '好き勝手営業部',
        dists: [' ', '帰宅', '在宅', '取引先A', '取引先B', '会議室A', '会議室B', '好きなところ'],
        // members: ['池田', '小川', '星野', '寺岡', ],
        newMember: '',
        newDist: '',
        datas: [
            {
                name: 'わたし',
                dist: '',
                noReturn: false,
            },
            {
                name: 'あなた',
                dist: '',
                noReturn: false,
            },
            {
                name: 'わらし',
                dist: '',
                noReturn: false,
            },
        ],
        isVisible: false
    }),
    methods: {
        addDist: function (newdist) {
            let flag = true
            for (element of this.dists) {
                if (element === newdist) {
                    flag = false
                }
            }
            if (flag === true) {
                if (newdist === '') return;
                this.dists.push(newdist)
            }
            this.newDist = ''
        },
        addMember: function(member) {
            if (member === '') return;

            let flag = true
            for (data of this.datas) {
                if (data.name === member) {
                    flag = false
                }
            }

            if (flag === true) {
                let newmember = {
                    name: member,
                    dist: '',
                    office: false,
                }
                this.datas.push(newmember)
                this.newMember = ''

            }
        },
        delMember: function(index) {
            console.log(index)
            this.datas.splice(index, 1)
        },
        toggle: function () {
            this.isVisible = !this.isVisible;
        },
        delDist: function (index) {
            if (index != 0 ) {
                this.dists.splice(index, 1)
            }

        }
    }
    })


app.mount('#app')