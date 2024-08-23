const app = Vue.createApp({
    data: () => ({
        title: '行先表示',
        division: '好き勝手営業部',
        noReturnResetTime: '18:1',
        dists: [' ', '帰宅', '在宅', '取引先A', '取引先B', '会議室A', '会議室B', '好きなところ'],
        transWays: [' ', '直行', '直帰', '直行直帰'],
        newMember: '',
        newDist: '',
        message: '',
        datas: [
            {
                name: 'わたし',
                dist: '',
                way: '',
                ddnrButton: true,
                directDepart: false,
                noReturn: false,
                DDNR: false,
                ddNrDate: '',
            },
            {
                name: 'あなた',
                dist: '',
                way: '',
                ddnrButton: true,
                directDepart: false,
                noReturn: false,
                DDNR: false,
                ddNrDate: '',
            },
            {
                name: 'わらし',
                dist: '',
                way: '',
                ddnrButton: true,
                directDepart: false,
                noReturn: false,
                DDNR: false,
                ddNrDate: '',
            },
        ],
        isVisible: false,
    }),
    mounted() {
        this.checkTime();
        setInterval(this.checkTime, 1000);
    },
    methods: {
        addDist: function (newdist) {
            let flag = true
            if (this.message !== '') {
                this.message = ''
            }
            for (element of this.dists) {
                if (element === newdist) {
                    flag = false
                    this.message = '登録済みの行先です'
                    this.newDist = ''
                }
            }
            if (flag === true) {
                if (newdist === '') return;
                this.dists.push(newdist)
            }
            this.newDist = ''
        },
        addMember: function(member) {
            if (this.message !== '') {
                this.message = ''
            }
            if (member === '') return;
            
            let flag = true
            for (data of this.datas) {
                if (data.name === member) {
                    flag = false
                    this.message = '登録済みの名前です'
                    this.newMember = ''
                }
            }
            
            if (flag === true) {
                this.message = ''
                let newmember = {
                    name: menber,
                    dist: '',
                    way: '',
                    ddnrButton: true,
                    directDepart: false,
                    noReturn: false,
                    DDNR: false,
                    ddNrDate: '',
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
        },
        setDivision: function (div) {
            this.division = div
            
        },
        directDep: function (index) {
            console.log('直行', index)
            this.datas[index].ddnrButton = !this.datas[index].ddnrButton
            this.datas[index].directDepart = !this.datas[index].directDepart

        },
        noRet: function (index) {
            console.log('直帰', index)
            this.datas[index].ddnrButton = !this.datas[index].ddnrButton
            this.datas[index].noReturn = !this.datas[index].noReturn
        },
        dDnR: function (index) {
            console.log('直行直帰', index)
            this.datas[index].ddnrButton = !this.datas[index].ddnrButton
            this.datas[index].DDNR = !this.datas[index].DDNR
            const date = new Date();
            const day = String(date.getDate()).padStart(2, 0);
            const month = String(date.getMonth() + 1).padStart(2, '0');
            this.datas[index].ddNrDate = `${month}/${day}`
        },
        resetWay: function (index) {
            this.datas[index].ddnrButton = true
            this.datas[index].directDepart = false
            this.datas[index].noReturn = false
            this.datas[index].DDNR = false
            this.datas[index].dist = ''
        },
        checkTime() {
            console.log('checktime')
            const currentTime = new Date();
            const nrTargetTime = new Date(); // NR用

            const [hours, minutes] = this.noReturnResetTime.split(':').map(Number);
            
            nrTargetTime.setHours(hours, minutes, 0, 0);

            for (const data of this.datas) {
                // NR用
                if (data.noReturn === true) {
                    if (currentTime >= nrTargetTime) {
                        data.ddnrButton = true
                        data.directDepart = false
                        data.noReturn = false
                        data.DDNR = false
                        data.dist = ''
                    };
                // DDNR用
                } else if (data.DDNR === true) {
                    // console.log(data.ddNrDate)
                    const [month, date] = data.ddNrDate.split('/').map(Number);
                    // console.log(month, date)
                    const ddNrTime = new Date();
                    ddNrTime.setMonth(month)
                    ddNrTime.setDate(date + 1)
                    ddNrTime.setHours(hours, minutes, 0, 0)

                    // console.log(ddNrTime)
                    if (currentTime >= ddNrTime) {
                        data.ddnrButton = true
                        data.directDepart = false
                        data.noReturn = false
                        data.DDNR = false
                        data.dist = ''
                    };
                };
            }
        }
    }
    })

app.mount('#app')