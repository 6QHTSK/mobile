module.exports={
    data:function(){
        return {
            sort: {
                name: 'id',
                order: 'desc'
              },
            column : [
                {title:'ID',width:90,name:'id', sortable: true},
                {title:'曲名',name:'songname'},
                {title:'难度',width:70,name:'maxdiff', sortable: true}
            ],
            flitersong : getsonglist().sort(function(a,b){return b.id-a.id})
        }
    },
    components:{
        'listitem' : httpVueLoader('.\\components\\listitem\\listitem.vue')
    },
    methods:{
        imgsrc(e){
            return 'https://assets-1300838857.cos.ap-nanjing.myqcloud.com/pic/'+e+'.jpg/webp'
        },
        openbdlink(e) {
            if(e.newid==undefined)
            {
                window.open('https://bestdori.com/community/charts/' + e.id, "_blank");
            }
            else
            {
                window.open('https://bestdori.com/community/charts/' + e.newid, "_blank");
            }
        },
        openpbbblink(e) {
            if(e.newid==undefined)
            {
                window.open('https://reikohaku.gitee.io/bang-player/#/?id=' + e.id + '&type=community&autoload=true', "_blank")
            }
            else
            {
                window.open('https://reikohaku.gitee.io/bang-player/#/?id=' + e.newid + '&type=community&autoload=true', "_blank")
            }
        },
        openkirapack(e) {
                window.open('https://assets-1300838857.cos.ap-nanjing.myqcloud.com/kirapack/' + e.id + '.kirapack', "_blank");
        },
        handleSortChange ({name, order}) {
            this.flitersong = this.flitersong.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
          }
    }
}