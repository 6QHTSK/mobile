module.exports={
    data:function(){
        return {
            column : [
                {title:'ID',width:90,name:'id'},
                {title:'曲名',name:'songname'},
                {title:'难度',width:70,name:'maxdiff'}
            ],
            flitersong : getsonglist()
        }
    },
    components:{
        'listitem' : httpVueLoader('.\\components\\listitem\\listitem.vue')
    },
    methods:{
        imgsrc(e){
            return 'https://test-1300838857.cos.ap-singapore.myqcloud.com/WEBP/'+e+'.webp'
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
            if(e.kpsrc==undefined)
            {
                window.open('http://coppercomplex.gitee.io/kirapack-store/' + e.id + '.kirapack', "_blank");
            }
            else
            {
                window.open(this.item.kpsrc, "_blank");
            }
        },
    }
}