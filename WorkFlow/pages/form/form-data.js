const formData = {
  "tableName": "维修事件上报",
  "params": [
    {
      "id": "9",
      "alias": "处理事件表单",
      "groupid": "4011",
      "platform": "mobile",
      "type": "GROUP",
      "businesskey": "",
      "url": "",
      "expanded": false,
      "leaf": true,
      "items": [
        {
          "gid": "664",
          "groupid": "4011",
          "name": "eventid",
          "alias": "事件编号",
          "type": "TXT",
          "defaultvalue": "",
          "findex": 0,
          "visible": 0,
          "edit": 0,
          "required": 0,
          "value": "",
          "unit": "",
          "color": "",
          "width": "",
          "other_name": "",
          "selectValues": []
        },
        {
          "gid": "665",
          "groupid": "4011",
          "name": "eventtype",
          "alias": "事件类型",
          "type": "TXT",
          "defaultvalue": "",
          "findex": 0,
          "visible": 0,
          "edit": 0,
          "required": 0,
          "value": "",
          "unit": "",
          "color": "",
          "width": "",
          "other_name": "",
          "selectValues": []
        },
        {
          "gid": "67",
          "groupid": "4011",
          "name": "fashenweizhi",
          "alias": "发生位置",
          "type": "GEOM",
          "defaultvalue": "",
          "findex": 1,
          "visible": 1,
          "edit": 1,
          "required": 1,
          "value": "",
          "unit": "",
          "color": "",
          "width": "",
          "other_name": ""
        },
        {
          "gid": "69",
          "groupid": "4011",
          "name": "wentimiaoshu",
          "alias": "问题描述",
          "type": "TXT",
          "defaultvalue": "",
          "findex": 3,
          "visible": 1,
          "edit": 1,
          "required": 0,
          "value": "",
          "unit": "",
          "color": "",
          "width": "",
          "other_name": "",
          "selectValues": []
        },
        {
          "gid": "70",
          "groupid": "4011",
          "name": "zhaopian",
          "alias": "照片",
          "type": "IMG",
          "defaultvalue": "",
          "findex": 4,
          "visible": 1,
          "edit": 1,
          "required": 0,
          "value": "",
          "unit": "",
          "color": "",
          "width": "",
          "other_name": ""
        },
        {
          "gid": "71",
          "groupid": "4011",
          "name": "luyingxinxi",
          "alias": "录音信息",
          "type": "ADO",
          "defaultvalue": "",
          "findex": 5,
          "visible": 1,
          "edit": 1,
          "required": 0,
          "value": "",
          "unit": "",
          "color": "",
          "width": "",
          "other_name": ""
        },
        {
          "gid": "128",
          "groupid": "4011",
          "name": "shangbaoren",
          "alias": "上报人",
          "type": "DDL",
          "defaultvalue": "getAllUsers",
          "findex": 6,
          "visible": 0,
          "edit": 0,
          "required": 0,
          "value": "",
          "unit": "",
          "color": "",
          "width": "",
          "other_name": "",
          "colors": [],
          "selectValues": [
            {
              "alias": "系统管理员",
              "name": "2"
            },
            {
              "alias": "邵慧星",
              "name": "346"
            },
            {
              "alias": "科长",
              "name": "350"
            },
            {
              "alias": "testshx",
              "name": "373"
            },
            {
              "alias": "shaohuixing1",
              "name": "374"
            },
            {
              "alias": "平台管理人员001",
              "name": "400"
            },
            {
              "alias": "运维人员001",
              "name": "401"
            },
            {
              "alias": "抢修人员rz001",
              "name": "403"
            },
            {
              "alias": "抢修人员rz002",
              "name": "404"
            },
            {
              "alias": "抢修人员rz003",
              "name": "405"
            },
            {
              "alias": "养护科科长",
              "name": "406"
            },
            {
              "alias": "测试平台管理员",
              "name": "409"
            },
            {
              "alias": "测试抢修科科长",
              "name": "410"
            },
            {
              "alias": "测试抢修员1",
              "name": "411"
            },
            {
              "alias": "测试运维中心1",
              "name": "412"
            },
            {
              "alias": "测试养护科科长",
              "name": "413"
            },
            {
              "alias": "测试养护员",
              "name": "414"
            },
            {
              "alias": "徐明安",
              "name": "415"
            },
            {
              "alias": "杨志刚",
              "name": "416"
            },
            {
              "alias": "盛觐",
              "name": "418"
            },
            {
              "alias": "程鹏展",
              "name": "420"
            },
            {
              "alias": "张君芳",
              "name": "424"
            },
            {
              "alias": "黄贵顺",
              "name": "425"
            },
            {
              "alias": "孙斌",
              "name": "426"
            },
            {
              "alias": "刘要华",
              "name": "428"
            },
            {
              "alias": "曾国刚",
              "name": "453"
            },
            {
              "alias": "董保堂",
              "name": "454"
            },
            {
              "alias": "程忠超",
              "name": "456"
            },
            {
              "alias": "汤斌武",
              "name": "457"
            },
            {
              "alias": "冯佳伟",
              "name": "458"
            },
            {
              "alias": "骆耀林",
              "name": "459"
            },
            {
              "alias": "叶贞强",
              "name": "460"
            },
            {
              "alias": "鲁四元",
              "name": "461"
            },
            {
              "alias": "曹俊宇",
              "name": "463"
            },
            {
              "alias": "黄俊强",
              "name": "464"
            },
            {
              "alias": "丁志红",
              "name": "469"
            },
            {
              "alias": "周桂舟",
              "name": "470"
            },
            {
              "alias": "张俊",
              "name": "471"
            },
            {
              "alias": "刘海元",
              "name": "475"
            },
            {
              "alias": "曹召",
              "name": "486"
            },
            {
              "alias": "张斌",
              "name": "487"
            },
            {
              "alias": "程康",
              "name": "488"
            },
            {
              "alias": "何宝林",
              "name": "489"
            },
            {
              "alias": "何刚",
              "name": "490"
            },
            {
              "alias": "刘务长",
              "name": "491"
            },
            {
              "alias": "熊娟",
              "name": "493"
            },
            {
              "alias": "黄承林",
              "name": "494"
            },
            {
              "alias": "余文峰",
              "name": "496"
            },
            {
              "alias": "李锦林",
              "name": "497"
            },
            {
              "alias": "周国元",
              "name": "498"
            },
            {
              "alias": "徐润堂",
              "name": "499"
            },
            {
              "alias": "陈运桥",
              "name": "500"
            },
            {
              "alias": "李斌",
              "name": "501"
            },
            {
              "alias": "胡仕东",
              "name": "502"
            },
            {
              "alias": "桂万棣",
              "name": "503"
            },
            {
              "alias": "鲁舟",
              "name": "504"
            },
            {
              "alias": "张振",
              "name": "505"
            },
            {
              "alias": "陈强",
              "name": "507"
            },
            {
              "alias": "曾小华",
              "name": "508"
            },
            {
              "alias": "黄艳",
              "name": "510"
            },
            {
              "alias": "朱玉珍",
              "name": "511"
            },
            {
              "alias": "郑艳萍",
              "name": "512"
            },
            {
              "alias": "姚保华",
              "name": "513"
            },
            {
              "alias": "王艳",
              "name": "514"
            },
            {
              "alias": "潘小兰",
              "name": "515"
            },
            {
              "alias": "洪强进",
              "name": "516"
            },
            {
              "alias": "汪晓春",
              "name": "517"
            },
            {
              "alias": "崔褀",
              "name": "518"
            },
            {
              "alias": "姚军安",
              "name": "519"
            },
            {
              "alias": "熊小敏",
              "name": "520"
            },
            {
              "alias": "曹斌云",
              "name": "521"
            },
            {
              "alias": "姚秀玲",
              "name": "522"
            },
            {
              "alias": "许少红",
              "name": "523"
            },
            {
              "alias": "蔡望霞",
              "name": "524"
            },
            {
              "alias": "熊伟",
              "name": "525"
            },
            {
              "alias": "刘叶华",
              "name": "526"
            },
            {
              "alias": "黄琴华",
              "name": "527"
            },
            {
              "alias": "李震",
              "name": "528"
            },
            {
              "alias": "黄妍",
              "name": "530"
            },
            {
              "alias": "陈静",
              "name": "531"
            },
            {
              "alias": "许小爱",
              "name": "532"
            },
            {
              "alias": "刘丽萍",
              "name": "533"
            },
            {
              "alias": "柳莉",
              "name": "534"
            },
            {
              "alias": "艾芳",
              "name": "535"
            },
            {
              "alias": "丁佑珍",
              "name": "536"
            },
            {
              "alias": "杨艳珍",
              "name": "537"
            },
            {
              "alias": "范翠华",
              "name": "539"
            },
            {
              "alias": "付卫珍",
              "name": "540"
            },
            {
              "alias": "汤红萍",
              "name": "541"
            },
            {
              "alias": "周凤娇",
              "name": "542"
            },
            {
              "alias": "崔春梅",
              "name": "543"
            },
            {
              "alias": "连禹燕",
              "name": "544"
            },
            {
              "alias": "熊俊敏",
              "name": "545"
            },
            {
              "alias": "杨顺英",
              "name": "546"
            },
            {
              "alias": "董友珍",
              "name": "547"
            },
            {
              "alias": "肖云芳",
              "name": "548"
            },
            {
              "alias": "熊红艳",
              "name": "549"
            },
            {
              "alias": "邓丽",
              "name": "550"
            },
            {
              "alias": "车文静",
              "name": "551"
            },
            {
              "alias": "李永芳",
              "name": "553"
            },
            {
              "alias": "徐庆",
              "name": "554"
            },
            {
              "alias": "王丽萍",
              "name": "555"
            },
            {
              "alias": "张慧慧",
              "name": "556"
            },
            {
              "alias": "余守丽",
              "name": "558"
            },
            {
              "alias": "陈磊",
              "name": "560"
            },
            {
              "alias": "钟原 ",
              "name": "561"
            },
            {
              "alias": "张燕俐",
              "name": "563"
            },
            {
              "alias": "朱丹前",
              "name": "565"
            },
            {
              "alias": "周芹",
              "name": "566"
            },
            {
              "alias": "鲍磊",
              "name": "567"
            },
            {
              "alias": "宋浪",
              "name": "569"
            },
            {
              "alias": "曾凡",
              "name": "570"
            },
            {
              "alias": "胡玉华",
              "name": "571"
            },
            {
              "alias": "朱德安",
              "name": "574"
            },
            {
              "alias": "周少兰",
              "name": "581"
            },
            {
              "alias": "王珍",
              "name": "582"
            },
            {
              "alias": "杨琼林",
              "name": "583"
            },
            {
              "alias": "邓纯",
              "name": "584"
            },
            {
              "alias": "叶娜",
              "name": "585"
            },
            {
              "alias": "黄甜甜",
              "name": "586"
            },
            {
              "alias": "朱见祺",
              "name": "587"
            },
            {
              "alias": "周少威",
              "name": "588"
            },
            {
              "alias": "沈小红",
              "name": "589"
            },
            {
              "alias": "程双华",
              "name": "590"
            },
            {
              "alias": "张言豪",
              "name": "591"
            },
            {
              "alias": "张正勇",
              "name": "593"
            },
            {
              "alias": "陈武军",
              "name": "594"
            },
            {
              "alias": "施成乔",
              "name": "595"
            },
            {
              "alias": "王力",
              "name": "596"
            },
            {
              "alias": "刘小军",
              "name": "597"
            },
            {
              "alias": "许增辉",
              "name": "598"
            },
            {
              "alias": "薛兴瑶",
              "name": "599"
            },
            {
              "alias": "杨富文",
              "name": "602"
            },
            {
              "alias": "汤配威",
              "name": "603"
            },
            {
              "alias": "张涛",
              "name": "604"
            },
            {
              "alias": "曹谷洲",
              "name": "605"
            },
            {
              "alias": "李自强",
              "name": "606"
            },
            {
              "alias": "周庆",
              "name": "607"
            },
            {
              "alias": "涂玉梅",
              "name": "608"
            },
            {
              "alias": "厉春生",
              "name": "609"
            },
            {
              "alias": "李惠芬",
              "name": "610"
            },
            {
              "alias": "周素珍",
              "name": "611"
            },
            {
              "alias": "李磊",
              "name": "612"
            },
            {
              "alias": "吴露",
              "name": "613"
            },
            {
              "alias": "陈林奇",
              "name": "614"
            },
            {
              "alias": "周琼",
              "name": "615"
            },
            {
              "alias": "黄红燕",
              "name": "616"
            },
            {
              "alias": "程彦平",
              "name": "617"
            },
            {
              "alias": "杨进芬",
              "name": "618"
            },
            {
              "alias": "李婷",
              "name": "619"
            },
            {
              "alias": "刘毅刚",
              "name": "620"
            },
            {
              "alias": "肖兵",
              "name": "621"
            },
            {
              "alias": "吴晓琴",
              "name": "622"
            },
            {
              "alias": "孙张",
              "name": "623"
            },
            {
              "alias": "张武",
              "name": "624"
            },
            {
              "alias": "赵倩",
              "name": "625"
            },
            {
              "alias": "沈莉莉",
              "name": "626"
            },
            {
              "alias": "丁红涛",
              "name": "627"
            },
            {
              "alias": "邓育华",
              "name": "628"
            },
            {
              "alias": "魏亚明",
              "name": "629"
            },
            {
              "alias": "周华清",
              "name": "631"
            },
            {
              "alias": "李金珍",
              "name": "632"
            },
            {
              "alias": "徐红艳",
              "name": "633"
            },
            {
              "alias": "刘胜林",
              "name": "634"
            },
            {
              "alias": "季琼英",
              "name": "636"
            },
            {
              "alias": "汪偲",
              "name": "637"
            },
            {
              "alias": "程响",
              "name": "638"
            },
            {
              "alias": "连禹雯",
              "name": "639"
            },
            {
              "alias": "胡俊忠",
              "name": "640"
            },
            {
              "alias": "鲁艳梅",
              "name": "641"
            },
            {
              "alias": "吕庆舟",
              "name": "642"
            },
            {
              "alias": "桂三平",
              "name": "643"
            },
            {
              "alias": "黄捷",
              "name": "644"
            },
            {
              "alias": "刘琴",
              "name": "645"
            },
            {
              "alias": "李振",
              "name": "647"
            },
            {
              "alias": "何煦",
              "name": "648"
            },
            {
              "alias": "陈金文",
              "name": "649"
            },
            {
              "alias": "聂恒",
              "name": "650"
            },
            {
              "alias": "王红伟",
              "name": "652"
            },
            {
              "alias": "向少兵",
              "name": "653"
            },
            {
              "alias": "余向阳",
              "name": "654"
            },
            {
              "alias": "刘恺文",
              "name": "655"
            },
            {
              "alias": "吴庆辉",
              "name": "656"
            },
            {
              "alias": "肖虹",
              "name": "657"
            },
            {
              "alias": "彭纪卉",
              "name": "658"
            },
            {
              "alias": "彭凡",
              "name": "659"
            },
            {
              "alias": "姜尔恩",
              "name": "660"
            },
            {
              "alias": "厉成英",
              "name": "661"
            },
            {
              "alias": "王义奇",
              "name": "662"
            },
            {
              "alias": "肖金友",
              "name": "663"
            },
            {
              "alias": "廖丽平",
              "name": "664"
            },
            {
              "alias": "宋力",
              "name": "665"
            },
            {
              "alias": "孙友平",
              "name": "666"
            },
            {
              "alias": "刘丽华",
              "name": "670"
            },
            {
              "alias": "丁红霞",
              "name": "671"
            },
            {
              "alias": "彭敏杰",
              "name": "672"
            },
            {
              "alias": "陈卫",
              "name": "673"
            },
            {
              "alias": "肖丽霞",
              "name": "674"
            },
            {
              "alias": "程晓凤",
              "name": "676"
            },
            {
              "alias": "刘小芹",
              "name": "677"
            },
            {
              "alias": "程念华",
              "name": "678"
            },
            {
              "alias": "鲁佳",
              "name": "679"
            },
            {
              "alias": "刘爱东",
              "name": "680"
            },
            {
              "alias": "管彬彬",
              "name": "681"
            },
            {
              "alias": "张蔷",
              "name": "682"
            },
            {
              "alias": "徐慧芝",
              "name": "683"
            },
            {
              "alias": "邓少芬",
              "name": "684"
            },
            {
              "alias": "厉丹",
              "name": "685"
            },
            {
              "alias": "刘永红",
              "name": "686"
            },
            {
              "alias": "程晖",
              "name": "687"
            },
            {
              "alias": "李慧",
              "name": "688"
            },
            {
              "alias": "刘威",
              "name": "689"
            },
            {
              "alias": "冯俊纯",
              "name": "690"
            },
            {
              "alias": "黄秀华",
              "name": "691"
            },
            {
              "alias": "张少初",
              "name": "692"
            },
            {
              "alias": "李立川",
              "name": "693"
            },
            {
              "alias": "陈卫平",
              "name": "694"
            },
            {
              "alias": "季小堂",
              "name": "695"
            },
            {
              "alias": "邹燕琳",
              "name": "696"
            },
            {
              "alias": "涂明海",
              "name": "697"
            },
            {
              "alias": "姚高玉",
              "name": "698"
            },
            {
              "alias": "罗运平",
              "name": "699"
            },
            {
              "alias": "安楚雄",
              "name": "700"
            },
            {
              "alias": "房静",
              "name": "701"
            },
            {
              "alias": "张菁",
              "name": "702"
            },
            {
              "alias": "吴南",
              "name": "703"
            },
            {
              "alias": "曹广君",
              "name": "704"
            },
            {
              "alias": "郭卫",
              "name": "705"
            },
            {
              "alias": "王钗华",
              "name": "706"
            },
            {
              "alias": "卢庆浩",
              "name": "707"
            },
            {
              "alias": "周伟",
              "name": "708"
            },
            {
              "alias": "姜相敬",
              "name": "709"
            },
            {
              "alias": "徐薇娅",
              "name": "710"
            },
            {
              "alias": "彭秀梅",
              "name": "711"
            },
            {
              "alias": "肖兰",
              "name": "712"
            },
            {
              "alias": "徐光裕",
              "name": "713"
            },
            {
              "alias": "张锦",
              "name": "714"
            },
            {
              "alias": "周龙",
              "name": "715"
            },
            {
              "alias": "高翔",
              "name": "716"
            },
            {
              "alias": "王军安",
              "name": "717"
            },
            {
              "alias": "唐德胜",
              "name": "718"
            },
            {
              "alias": "钟平华",
              "name": "719"
            },
            {
              "alias": "陈庆军",
              "name": "720"
            },
            {
              "alias": "侯修俊",
              "name": "721"
            },
            {
              "alias": "刘平安",
              "name": "722"
            },
            {
              "alias": "王胜",
              "name": "723"
            },
            {
              "alias": "宋怀忠",
              "name": "724"
            },
            {
              "alias": "戴超群",
              "name": "725"
            },
            {
              "alias": "徐丹",
              "name": "726"
            },
            {
              "alias": "吕红俊",
              "name": "727"
            },
            {
              "alias": "石红霞",
              "name": "728"
            },
            {
              "alias": "刘艳辉",
              "name": "729"
            },
            {
              "alias": "王伟",
              "name": "730"
            },
            {
              "alias": "丁梁柱",
              "name": "731"
            },
            {
              "alias": "张立红",
              "name": "732"
            },
            {
              "alias": "程福学",
              "name": "733"
            },
            {
              "alias": "王冠群",
              "name": "734"
            },
            {
              "alias": "秦承翔",
              "name": "735"
            },
            {
              "alias": "冯轶昕",
              "name": "736"
            },
            {
              "alias": "罗国豹",
              "name": "737"
            },
            {
              "alias": "鲁洪清",
              "name": "739"
            },
            {
              "alias": "丁立雄",
              "name": "740"
            },
            {
              "alias": "城南值班",
              "name": "742"
            },
            {
              "alias": "城北值班",
              "name": "743"
            },
            {
              "alias": "肖超",
              "name": "744"
            },
            {
              "alias": "王长勇",
              "name": "745"
            },
            {
              "alias": "黄世刚",
              "name": "746"
            },
            {
              "alias": "丁阳",
              "name": "747"
            },
            {
              "alias": "余胜武",
              "name": "748"
            },
            {
              "alias": "杨锡州",
              "name": "749"
            },
            {
              "alias": "董劲勇",
              "name": "750"
            },
            {
              "alias": "丁红兵",
              "name": "751"
            },
            {
              "alias": "彭安平",
              "name": "752"
            },
            {
              "alias": "黄毅",
              "name": "753"
            },
            {
              "alias": "喻又斌",
              "name": "754"
            },
            {
              "alias": "丁一",
              "name": "755"
            },
            {
              "alias": "刘秀丽",
              "name": "756"
            },
            {
              "alias": "孙林",
              "name": "757"
            },
            {
              "alias": "陈杰",
              "name": "758"
            },
            {
              "alias": "郑群林",
              "name": "759"
            },
            {
              "alias": "吴汉玲",
              "name": "760"
            },
            {
              "alias": "田玉琴",
              "name": "761"
            },
            {
              "alias": "朱玉华",
              "name": "762"
            },
            {
              "alias": "高凤娣",
              "name": "763"
            },
            {
              "alias": "杨红梅",
              "name": "764"
            },
            {
              "alias": "陈冬",
              "name": "765"
            },
            {
              "alias": "丁玲英",
              "name": "766"
            },
            {
              "alias": "李玲英",
              "name": "767"
            },
            {
              "alias": "黄丽萍",
              "name": "768"
            },
            {
              "alias": "朱芬",
              "name": "769"
            },
            {
              "alias": "吕庆辉",
              "name": "770"
            },
            {
              "alias": "田蓉",
              "name": "771"
            },
            {
              "alias": "胡秀华",
              "name": "772"
            },
            {
              "alias": "梁丽平",
              "name": "773"
            },
            {
              "alias": "摆满芝",
              "name": "774"
            },
            {
              "alias": "李桂红",
              "name": "775"
            },
            {
              "alias": "陈自娟",
              "name": "776"
            },
            {
              "alias": "赵剑",
              "name": "777"
            },
            {
              "alias": "陈四华",
              "name": "778"
            },
            {
              "alias": "夏保红",
              "name": "779"
            },
            {
              "alias": "胡嘉彬",
              "name": "780"
            },
            {
              "alias": "桂建华",
              "name": "781"
            },
            {
              "alias": "刘孝丽",
              "name": "782"
            },
            {
              "alias": "曾鸣",
              "name": "783"
            },
            {
              "alias": "陈小玲",
              "name": "784"
            },
            {
              "alias": "管新华",
              "name": "785"
            },
            {
              "alias": "刘红英",
              "name": "786"
            },
            {
              "alias": "孙红利",
              "name": "787"
            },
            {
              "alias": "程燕平",
              "name": "788"
            },
            {
              "alias": "厉锐进",
              "name": "789"
            }
          ]
        },
        {
          "gid": "129",
          "groupid": "4011",
          "name": "shangbaoshijian",
          "alias": "上报时间",
          "type": "DATE",
          "defaultvalue": "",
          "findex": 7,
          "visible": 0,
          "edit": 0,
          "required": 0,
          "value": "",
          "unit": "",
          "color": "",
          "width": "",
          "other_name": ""
        },
        {
          "gid": "1286",
          "groupid": "4011",
          "name": "base_phone",
          "alias": "联系电话",
          "type": "TXT",
          "defaultvalue": "queryPhone",
          "findex": 10,
          "visible": 1,
          "edit": 1,
          "required": 1,
          "value": "18971954758",
          "unit": "",
          "color": "",
          "width": "",
          "other_name": "",
          "colors": [],
          "selectValues": [
            {
              "alias": "18971954758",
              "name": "18971954758"
            }
          ]
        }
      ]
    }
  ]
}

module.exports = {
   data:formData
}