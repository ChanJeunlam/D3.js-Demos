var province_color = {
    "广东": "#DD6B66",
    "河南": "#759AA0",
    "浙江": "#E69D87",
    "湖南": "#8DC1A9",
    "安徽": "#EA7E53",
    "江西": "#EEDD78",
    "江苏": "#73A373",
    "重庆": "#73B9BC",
    "山东": "#7289AB",
    "四川": "#91CA8C",
    "黑龙江": "#F49F42",
    "北京": "#AA312C",
    "上海": "#39656D",
    "福建": "#B35E45",
    "河北": "#4B8E6F",
    "陕西": "#B6481C",
    "广西": "#BBA838",
    "云南": "#386F38",
    "海南": "#388589",
    "贵州": "#385177",
    "山西": "#50964A",
    "辽宁": "#C16B0D",
    "天津": "#FF8500",
    "甘肃": "#45BFD3",
    "吉林": "#FF5F2F",
    "内蒙古":"#50F3A8",
    "新疆":"#FF4800",
    "宁夏":"#FFDE1A",
    "香港":"#41D541",
    "青海":"#32E7EF",
    "台湾":"#ef638e",
    "澳门":"#3B7CDE",
    "西藏":"#58FD4A",
    "湖北":"#FF190F"
}

var province_color_themeriver = {
    "广东": "#DD6B66",
    "河南": "#759AA0",
    "浙江": "#E69D87",
    "湖南": "#8DC1A9",
    "安徽": "#EA7E53",
    "江西": "#EEDD78",
    "江苏": "#73A373",
    "重庆": "#73B9BC",
    "山东": "#7289AB",
    "四川": "#91CA8C",
    "黑龙江": "#F49F42",
    "北京": "#AA312C",
    "上海": "#39656D",
    "福建": "#B35E45",
    "河北": "#4B8E6F",
    "陕西": "#B6481C",
    "广西": "#BBA838",
    "云南": "#386F38",
    "海南": "#388589",
    "贵州": "#385177",
    "山西": "#50964A",
    "辽宁": "#C16B0D",
    "天津": "#FF190F",
    "甘肃": "#45BFD3",
    "吉林": "#FF5F2F",
    "内蒙古":"#50F3A8",
    "新疆":"#FF4800",
    "宁夏":"#FFDE1A",
    "香港":"#41D541",
    "青海":"#32E7EF",
    "台湾":"#ef638e",
    "澳门":"#3B7CDE",
    "西藏":"#58FD4A",
    "湖北":"#FF8500"
}

// var province_color = {
//     "北京": "#de5991",
//     "天津": "#759AA0",
//     "河北": "#E69D87",
//     "山西": "#be3259",
//     "辽宁": "#EA7E53",
//     "黑龙江": "#EEDD78",
//     "上海": "#9359b1",
//     "江苏": "#cb8eb3",
//     "浙江": "#F49F42",
//     "安徽": "#AA312C",
//     "福建": "#B35E45",
//     "江西": "#4B8E6F",
//     "山东": "#B6481C",
//     "河南": "#BBA838",
//     "湖北": "#FF190F",
//     "湖南": "#206c71",
//     "广东": "#385177",
//     "广西": "#50964A",
//     "海南": "#C16B0D",
//     "重庆": "#245824",
//     "四川": "#45BFD3",
//     "贵州": "#50F3A8",
//     "云南": "#FF4800",
//     "陕西": "#FFDE1A",
//     "宁夏": "#41D541"
// }

const privece_offset_x = {
    "广东": 5,
    "山东": 5,
    "河南": 30,
    "四川": 0,
    "江苏": 25,
    "河北": 5,
    "湖南": 5,
    "安徽": 0,
    "湖北": 0,
    "浙江": 35,
    "广西": -5,
    "云南": 10,
    "江西": -15,
    "辽宁": 30,
    "福建": -30,
    "陕西": 0,
    "黑龙江": -30,
    "山西": -10,
    "贵州": 0,
    "重庆": 25,
    "吉林": -5,
    "甘肃": 0,
    "内蒙古": 0,
    "新疆": 0,
    "上海": 35,
    "台湾": -10,
    "北京": 0,
    "天津": -30,
    "海南": 0,
    "香港": -2,
    "宁夏": 0,
    "青海": 25,
    "西藏": 0,
    "澳门": 0,
}

const privece_offset_y = {
    "广东": -5,
    "山东": 40,
    "河南": 20,
    "四川": -10,
    "江苏": 20,
    "河北": -10,
    "湖南": 30,
    "安徽": 30,
    "湖北": 35,
    "浙江": 20,
    "广西": -10,
    "云南": 0,
    "江西": -5,
    "辽宁": 20,
    "福建": 20,
    "陕西": -15,
    "黑龙江": 0,
    "山西": 40,
    "贵州": 0,
    "重庆": 35,
    "吉林": 40,
    "甘肃": 0,
    "内蒙古": -10,
    "新疆": -10,
    "上海": 20,
    "台湾": 0,
    "北京": 32,
    "天津": 20,
    "海南": -4,
    "香港": -10,
    "宁夏": 40,
    "青海": 20,
    "西藏": 0,
    "澳门": -25,
}

const city_color = {
    "武汉":"#ff1c12",
    "黄石": "#de5991",
    "十堰": "#759AA0",
    "荆州": "#E69D87",
    "宜昌": "#be3259",
    "襄阳": "#EA7E53",
    "鄂州": "#EEDD78",
    "荆门": "#9359b1",
    "孝感": "#47c0d4",
    "黄冈": "#F49F42",
    "咸宁": "#AA312C",
    "恩施州": "#B35E45",
    "随州": "#4B8E6F",
    "仙桃": "#ff8603",
    "天门": "#ffde1d",
    "潜江": "#1e9d95",
    "神农架": "#7289AB"
}

const city_offset_x = {
    "武汉": 0,
    "黄石": 0,
    "十堰": 36,
    "荆州": 40,
    "宜昌": -10,
    "襄阳": 0,
    "鄂州": 70,
    "荆门": 0,
    "孝感": 0,
    "黄冈": 0,
    "咸宁": 0,
    "恩施州": 0,
    "随州": 55,
    "仙桃": 0,
    "天门": -10,
    "潜江": 0,
    "神农架": 0
}

const city_offset_y = {
    "武汉": 45,
    "黄石": 40,
    "十堰": 10,
    "荆州": 10,
    "宜昌": -20,
    "襄阳": 40,
    "鄂州": -5,
    "荆门": 40,
    "孝感": 40,
    "黄冈": 40,
    "咸宁": 38,
    "恩施州": 40,
    "随州": 0,
    "仙桃": 35,
    "天门": -35,
    "潜江": 40,
    "神农架": 40
}