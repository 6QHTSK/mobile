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
            url = "https://testapi.ayachan.fun:11496/calcdata";
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