/*function returnleveldata(leveldata){
    var rtr=[];
    for(i=0;i<=25;i++){
        rtr.push(leveldata[i][1])
    }
    return rtr
}
function returntimedata(timedata){
    var rtrdata=[]
    var rtrlabel = []
    for(var year in timedata){
        for(var month in timedata[year]){
            rtrdata.push(timedata[year][month])
            rtrlabel.push(year+'-'+month)
        }
    }
    return {datasets: [{data:rtrdata , borderColor: "#409EFF"}], labels : rtrlabel}
}
function calcchartdata(vm) {
    var diffctx = document.getElementById("diffchart").getContext("2d")
    var levelctx = document.getElementById("levelchart").getContext("2d")
    var timectx = document.getElementById("timechart").getContext("2d")
    var likeperchartctx = document.getElementById("likeperchart").getContext("2d")
    var diffdata = [
        {
            label: "Easy",
            value: vm.results["diffcounter"][0][1],
            color: "#409EFF"
        },
        {
            label: "Normal",
            value: vm.results["diffcounter"][1][1],
            color: "#67C23A"
        },
        {
            label: "Hard",
            value: vm.results["diffcounter"][2][1],
            color: "#E6A23C"
        },
        {
            label: "Expert",
            value: vm.results["diffcounter"][3][1],
            color: "#F56C6C"
        },
        {
            label: "Special",
            value: vm.results["diffcounter"][4][1],
            color: "#EC41D5"
        }
    ];
    var diffconfig = {
        type: 'pie',
        data: {
            datasets: [{
                data: [vm.results["diffcounter"][0][1], vm.results["diffcounter"][1][1], vm.results["diffcounter"][2][1], vm.results["diffcounter"][3][1], vm.results["diffcounter"][4][1]],
                backgroundColor: ["#409EFF", "#67C23A", "#E6A23C", "#F56C6C", "#EC41D5"]
            }
            ],
            labels: ["Easy","Normal","Hard","Expert","Special"]
        },
        options: {
            showTooltips: false,
            title: {
                display: true,
                text: "谱面难度分布"
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    }
    var levelconfig = {
        type: 'bar',
        data : {
            datasets: [{
                data: returnleveldata(vm.results["levelcounter"]),
                backgroundColor: [
                    '#409EFF','#47A4DE','#4DAABD','#54B09D','#5AB67C',
                    '#61BC5B','#67C23A','#80BC3A','#9AB53B','#B3AF3B',
                    '#CDA83C','#E6A23C','#E89A43','#EA934A','#EC8B51',
                    '#EF8357','#F17B5E','#F37465','#F56C6C','#F4667B',
                    '#F2608A','#F15A99','#F053A8','#EF4DB7','#ED47C6','#EC41D5'
                ]
            }],
            labels : [5,6,7,8,9,
                      10,11,12,13,14,
                      15,16,17,18,19,
                      20,21,22,23,24,
                      25,26,27,28,29,30]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "谱面等级分布"
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    }
    var timeconfig = {
        type: 'line',
        data : returntimedata(vm.results["timecaculate"]),
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "有效谱面发表时间分布"
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    }
    var likeperconfig = {
        type: 'line',
        data : returntimedata(vm.results["likeperchart"]),
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "有效谱面平均获赞"
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    }
    //console.log(timeconfig)
    var diffchart = new Chart(diffctx, diffconfig)
    vm.diffdata = diffdata
    var levelchart = new Chart(levelctx,levelconfig)
    var timechart = new Chart(timectx,timeconfig)
    var likeperchart = new Chart(likeperchartctx,likeperconfig)
}*/
var nicknametoauthor = {}
module.exports = {
    data: function () {
        return {
            onloading: false,
            searchload: false,
            searchsee: false,
            searchuser: "",
            results: {},
            searchres: {},
            diffdata: [],
            authorname : [],
            active : 0,
            levelconfig: { data: {} },
            columns: [
                [
                    { title: 'ID', width: 90, name: 0 },
                    { title: '曲名', name: 3 },
                    { title: '获赞数', width: 90, name: 5 }
                ],
                [
                    { title: 'ID', width: 90, name: 0 },
                    { title: '曲名', name: 3 },
                    { title: '时长', width: 90, name: 5 }
                ],
                [
                    { title: 'ID', width: 90, name: 0 },
                    { title: '曲名', name: 3 },
                    { title: '物量', width: 90, name: 5 }
                ],
                [
                    { title: 'ID', width: 90, name: 0 },
                    { title: '曲名', name: 3 },
                    { title: 'NPS', width: 90, name: 5 }
                ],
                [
                    { title: '用户名', name: 3 },
                    { title: '有效谱面', width: 70, name: 2 }
                ],
                [
                    { title: '用户名', name: 3 },
                    { title: '获赞数', width: 70, name: 2 }
                ],
                [
                    { title: '用户名', name: 3 },
                    { title: '平均难度', width: 90, name: 2 }
                ],
                [
                    { title: '名称', name: 0 },
                    { title: '数量', width: 90, name: 1 }
                ],
                [
                    { title: '有效谱面', name: 0 },
                    { title: '获赞数量', name: 1 },
                    { title: '谱面难度', name: 1 }
                ],
                [
                    { title: '排名', width: 90, name: 0 },
                    //{ title: 'ID', width: 90, name: 1 },
                    { title: '曲名', name: 3 },
                    { title: '获赞数', width: 90, name: 5 }
                ],
                [
                    { title: '排名', width: 90, name: 0 },
                    //{ title: 'ID', width: 90, name: 1 },
                    { title: '曲名', name: 3 },
                    { title: '时长', width: 90, name: 5 }
                ],
                [
                    { title: '排名', width: 90, name: 0 },
                    //{ title: 'ID', width: 90, name: 1 },
                    { title: '曲名', name: 3 },
                    { title: '密度', width: 90, name: 5 }
                ],
                [
                    { title: '排名', width: 90, name: 0 },
                    //{ title: 'ID', width: 90, name: 1 },
                    { title: '曲名', name: 3 },
                    { title: '物量', width: 90, name: 5 }
                ],
            ]
        }
    },
    methods: {
        outputchange(e) {
            this.outputstr = this.constoutput;
        },
        pullbdchart() {
            this.onloading = true
            vm = this
            url = "https://bird.ioliu.cn/v1?url=http://106.55.249.77:7091/calcdata";
            axios.get(url).then(function (res) {
                vm.onloading = false;
                if (res.status == 200) {
                    vm.results = res.data
                    vm.createFilter()
                    //calcchartdata(vm)
                    //console.log(res.data)
                }
                else {
                    vm.$message("拉取资源失败")
                }
            }
            )
        },
        /*querySearch(queryString, cb) {
            rtr = queryString ? this.createFilter(queryString) : user;
            console.log(rtr)
            // 调用 callback 返回建议列表的数据
            cb(rtr);
        },*/
        createFilter() {
            rtr = []
            console.log(this.results["usernames"])
            if (this.results["usernames"] != undefined) {
                for (i = 0; i < this.results["usernames"].length; i++) {
                    name = this.results["usernames"][i][0]
                    value = this.results["usernames"][i][1] != null ? this.results["usernames"][i][1] + '@' + this.results["usernames"][i][0] : this.results["usernames"][i][0]
                    //console.log(this.results["usernames"][i][0])

                    //rtr.push({"value":value,"username":name})
                    rtr.push(value)
                    nicknametoauthor[value] = name
                }
            }
            this.authorname = rtr
        },
        handleSelect(item) {
            this.search(nicknametoauthor[item])
            console.log(nicknametoauthor[item])
        },
        search(username) {
            this.searchload = true
            vm = this
            url = "https://bird.ioliu.cn/v1?url=http://106.55.249.77:7091/calcauthor?author=" + username
            axios.get(url).then(function (res) {
                vm.searchload = false
                if (res.status == 200) {
                    vm.searchres = res.data
                    if (res.data["result"]) {
                        console.log(res.data)
                        vm.searchsee = true
                    }
                    else {
                        vm.$message("无此谱师或此谱师未满足条件")
                    }
                }
                else {
                    vm.$message("拉取资源失败")
                }
            })
        }
    },
    mounted() {
        this.pullbdchart()
        //this.search("psk2019")
    }
}