// 搜索框关键字
var dataSearchConfig=[
		{'Key':'小米5s Plus','Rst':5,'Url':'http://search.mi.com/search_%E5%B0%8F%E7%B1%B35s%C2%A0Plus'},
		{'Key':'小米Max','Rst':8,'Url':'http://search.mi.com/search_%E5%B0%8F%E7%B1%B3Max'},
		{'Key':'小米手机5','Rst':10,'Url':'http://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA5'},
		{'Key':'空气净化器2','Rst':3,'Url':'http://search.mi.com/search_%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A82'},
		{'Key':'活塞耳机','Rst':3,'Url':'http://search.mi.com/search_%E6%B4%BB%E5%A1%9E%E8%80%B3%E6%9C%BA'},
		{'Key':'小米路由器','Rst':6,'Url':'http://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E8%B7%AF%E7%94%B1%E5%99%A8'},
		{'Key':'移动电源','Rst':14,'Url':'http://search.mi.com/search_%E7%A7%BB%E5%8A%A8%E7%94%B5%E6%BA%90'},
		{'Key':'运动相机','Rst':11,'Url':'http://search.mi.com/search_%E8%BF%90%E5%8A%A8%E7%9B%B8%E6%9C%BA'},
		{'Key':'小蚁摄像机','Rst':2,'Url':'http://search.mi.com/search_%E5%B0%8F%E8%9A%81%E6%91%84%E5%83%8F%E6%9C%BA'},
		{'Key':'小米体重秤','Rst':1,'Url':'http://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E4%BD%93%E9%87%8D%E7%A7%A4'},
		{'Key':'小米插线板','Rst':10,'Url':'http://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E6%8F%92%E7%BA%BF%E6%9D%BF'},
		{'Key':'配件优惠套装','Rst':23,'Url':'http://search.mi.com/search_%E9%85%8D%E4%BB%B6%E4%BC%98%E6%83%A0%E5%A5%97%E8%A3%85'}
	];

// header导航内容
var childrenList=[
	[
		{'url':'http://www.mi.com/mi5c/','src':'img/head_nav/xiaomi1.png','title':'小米手机5c','pic':'1499','flag':'新品'},
		{'url':'http://www.mi.com/minote2/','src':'img/head_nav/xiaomi2.jpg','title':'小米Note 2','pic':'2799','flag':''},
		{'url':'http://www.mi.com/mix/','src':'img/head_nav/xiaomi3.jpg','title':'小米MIX','pic':'3499','flag':''},
		{'url':'http://www.mi.com/mi5s','src':'img/head_nav/xiaomi4.jpg','title':'小米5s','pic':'1899','flag':'赠1000书币'},
		{'url':'http://www.mi.com/mi5splus/','src':'img/head_nav/xiaomi5.jpg','title':'小米5s Plus','pic':'2299','flag':'赠1000书币'},
		{'url':'http://www.mi.com/mi5/','src':'img/head_nav/xiaomi6.jpg','title':'小米手机5','pic':'1799','flag':'赠1000书币'}
	],
	[
		{'url':'http://www.mi.com/redminote4x/','src':'img/head_nav/hongmi1.jpg','title':'红米Note 4X','pic':'999','flag':'新品'},
		{'url':'http://www.mi.com/redminote4/','src':'img/head_nav/hongmi2.jpg','title':'红米Note 4','pic':'999','flag':''},
		{'url':'http://www.mi.com/redmi4x/','src':'img/head_nav/hongmi3.jpg','title':'红米4X','pic':'699','flag':'新品'},
		{'url':'http://www.mi.com/redmi4','src':'img/head_nav/hongmi4.jpg','title':'红米4','pic':'799','flag':''}
	],
	[
		{'url':'http://www.mi.com/mipad2/','src':'img/head_nav/pingban1.jpg','title':'小米平板2 16GB','pic':'999','flag':''},
		{'url':'http://www.mi.com/mibookair/','src':'img/head_nav/pingban2.jpg','title':'小米笔记本Air 12.5','pic':'3499','flag':''},
		{'url':'http://www.mi.com/mibookair/','src':'img/head_nav/pingban3.jpg','title':'小米笔记本Air 13.3','pic':'4499','flag':''},
		{'url':'http://www.mi.com/mibookair/','src':'img/head_nav/pingban4.jpg','title':'小米笔记本Air 13.3" 尊享版','pic':'5499','flag':'新品'}
	],
	[
		{'url':'http://www.mi.com/mitv3s/48/','src':'img/head_nav/dianshi1.png','title':'小米电视3s 48英寸','pic':'2599','flag':''},
		{'url':'http://www.mi.com/mitv3s/55/','src':'img/head_nav/dianshi2.png','title':'小米电视3s 55英寸','pic':'3999','flag':''},
		{'url':'http:///www.mi.com/mitv3s/60/','src':'img/head_nav/dianshi3.png','title':'小米电视3s 60英寸','pic':'4699','flag':''},
		{'url':'http://www.mi.com/mitv3s/65flat/','src':'img/head_nav/dianshi4.png','title':'小米电视3s 65英寸','pic':'6699','flag':''},
		{'url':'http://www.mi.com/mitv3/70/','src':'img/head_nav/dianshi5.png','title':'小米电视3 70英寸','pic':'9999','flag':''},
		{'url':'http://www.mi.com/buytv/','src':'img/head_nav/dianshi6.png','title':'查看全部<br/>小米电视','pic':'','flag':''}
	],
	[
		{'url':'http://www.mi.com/mitv3s/48/','src':'img/head_nav/hezi1.png','title':'小米盒子3s','pic':'299','flag':''},
		{'url':'http://www.mi.com/mitv3s/55/','src':'img/head_nav/hezi2.png','title':'小米盒子3c','pic':'199','flag':''},
		{'url':'http:///www.mi.com/mitv3s/60/','src':'img/head_nav/hezi3.jpg','title':'小米盒子3 增强版','pic':'399','flag':''},
		{'url':'http://www.mi.com/mitv3s/65flat/','src':'img/head_nav/hezi4.png','title':'小米盒子mini版','pic':'179','flag':''},
		{'url':'http://www.mi.com/mitv3/70/','src':'img/head_nav/hezi5.png','title':'小米家庭影院','pic':'1999','flag':''},
		{'url':'http://www.mi.com/buytv/','src':'img/head_nav/hezi6.jpg','title':'小米家庭音响 标准版','pic':'699','flag':''}
	],
	[
		{'url':'http://www.mi.com/miwifihd/','src':'img/head_nav/luyou1.png','title':'小米路由器 HD','pic':'1299','flag':''},
		{'url':'http://www.mi.com/miwifihd/','src':'img/head_nav/luyou2.png','title':'小米路由器 Pro','pic':'499','flag':''},
		{'url':'http://www.mi.com/miwifi3/','src':'img/head_nav/luyou3.png','title':'小米路由器 3','pic':'149','flag':''},
		{'url':'http://www.mi.com/miwifi3c/','src':'img/head_nav/luyou4.jpg','title':'小米路由器 3C','pic':'99','flag':''},
		{'url':'http://item.mi.com/1164700010.html','src':'img/head_nav/luyou5.jpg','title':'小米WiFi放大器 2','pic':'49','flag':''}
	],
	[
		{'url':'http://www.mi.com/miwifihd/','src':'img/head_nav/zhineng1.jpg','title':'小米体脂秤','pic':'199','flag':''},
		{'url':'http://www.mi.com/miwifihd/','src':'img/head_nav/zhineng2.jpg','title':'米家行车记录仪','pic':'349','flag':''},
		{'url':'http://www.mi.com/miwifi3/','src':'img/head_nav/zhineng3.png','title':'小米无人机 4k 版','pic':'2999','flag':''},
		{'url':'http://www.mi.com/miwifi3c/','src':'img/head_nav/zhineng4.jpg','title':'小米米家对讲机','pic':'249','flag':''},
		{'url':'http://item.mi.com/1164700010.html','src':'img/head_nav/zhineng5.jpg','title':'米家IH电饭煲','pic':'399','flag':''},
		{'url':'http://item.mi.com/1164700010.html','src':'img/head_nav/zhineng6.jpg','title':'查看全部<br/>智能硬件','pic':'','flag':''}
	]
];




// 搜索框关键字
var childrenNavList=[
		[{'Key':'小米手机5C','src':'img/children-list/shouji1.jpg','str':'选购'},
		{'Key':'小米Noto2','src':'img/children-list/shouji2.jpg','str':'选购'},
		{'Key':'小米MIX','src':'img/children-list/shouji3.jpg','str':'选购'},
		{'Key':'小米5s','src':'img/children-list/shouji4.jpg','str':'选购'},
		{'Key':'小米5s Plus','src':'img/children-list/shouji5.jpg','str':'选购'},
		{'Key':'小米手机5','src':'img/children-list/shouji6.jpg','str':'选购'},
		{'Key':'红米Note 4X','src':'img/children-list/shouji7.jpg','str':'选购'},
		{'Key':'红米Note 4','src':'img/children-list/shouji8.png','str':'选购'},
		{'Key':'红米4X','src':'img/children-list/shouji9.png','str':'选购'},
		{'Key':'红米4','src':'img/children-list/shouji10.jpg','str':'选购'},
		{'Key':'红米4A','src':'img/children-list/shouji11.jpg','str':'选购'},
		{'Key':'对比手机','src':'img/children-list/shouji12.jpg','str':'选购'},
		{'Key':'小米移动 电话卡','src':'img/children-list/dianhuaka13.jpg'}],

		[{'Key':'小米笔记本Air','src':'img/children-list/bijiben1.jpg','str':'选购'},
		{'Key':'小米平板2','src':'img/children-list/bijiben2.jpg','str':'选购'},
		{'Key':'USB-C转接器','src':'img/children-list/bijiben3.jpg'},
		{'Key':'小米笔记本内胆包','src':'img/children-list/bijiben4.jpg'},
		{'Key':'小米便携鼠标','src':'img/children-list/bijiben5.jpg'}],

		[{'Key':'小米电视3s 48英寸','src':'img/children-list/mitv1.jpg'},
		{'Key':'小米电视3s 55英寸','src':'img/children-list/mitv2.png'},
		{'Key':'小米电视3s 60英寸','src':'img/children-list/mitv3.png'},
		{'Key':'小米电视3s 65英寸','src':'img/children-list/mitv4.png'},
		{'Key':'小米电视3s 65英寸 曲面','src':'img/children-list/mitv5.jpg'},
		{'Key':'小米电视3 60英寸','src':'img/children-list/mitv6.jpg'},
		{'Key':'小米电视3 70英寸','src':'img/children-list/mitv7.jpg'},
		{'Key':'小米盒子3s','src':'img/children-list/mitv8.png'},
		{'Key':'小米盒子3c','src':'img/children-list/mitv9.jpg'},
		{'Key':'小米盒子3增强版','src':'img/children-list/mitv10.jpg'},
		{'Key':'小米盒子mini','src':'img/children-list/mitv11.jpg'},
		{'Key':'小米低音炮','src':'img/children-list/mitv12.jpg'},
		{'Key':'蓝牙手柄','src':'img/children-list/mitv13.jpg'},
		{'Key':'家庭音响','src':'img/children-list/mitv14.jpg'},
		{'Key':'电视盒子配件','src':'img/children-list/mitv15.jpg'}],

		[{'Key':'小米扫地机器人及配件','src':'img/children-list/zhineng1.jpg'},
		{'Key':'小米VR眼镜','src':'img/children-list/zhineng2.jpg'},
		{'Key':'小米路由器','src':'img/children-list/zhineng3.jpg'},
		{'Key':'九号平衡车','src':'img/children-list/zhineng4.jpg'},
		{'Key':'电助力折叠自行车','src':'img/children-list/zhineng5.jpg'},
		{'Key':'米家恒温电水壶','src':'img/children-list/zhineng6.jpg'},
		{'Key':'米家车载空气净化器','src':'img/children-list/zhineng7.jpg'},
		{'Key':'手表','src':'img/children-list/zhineng8.jpg'},
		{'Key':'米家智能电饭煲','src':'img/children-list/zhineng9.jpg'},
		{'Key':'智能摄像机','src':'img/children-list/zhineng10.jpg'},
		{'Key':'净化器及滤芯','src':'img/children-list/zhineng11.jpg'},
		{'Key':'净水器及滤芯','src':'img/children-list/zhineng12.jpg'},
		{'Key':'血压计','src':'img/children-list/zhineng13.jpg'},
		{'Key':'米兔积木机器人','src':'img/children-list/zhineng14.jpg'},
		{'Key':'智能灯','src':'img/children-list/zhineng15.jpg'},
		{'Key':'米兔智能故事机','src':'img/children-list/zhineng16.jpg'},
		{'Key':'智能家庭组合','src':'img/children-list/zhineng17.jpg'},
		{'Key':'手环及配件','src':'img/children-list/zhineng18.jpg'},
		{'Key':'体重秤','src':'img/children-list/zhineng19.jpg'},
		{'Key':'电动滑板车','src':'img/children-list/zhineng20.jpg'},
		{'Key':'小米无人机','src':'img/children-list/zhineng21.jpg'},
		{'Key':'米家行车记录仪','src':'img/children-list/zhineng22.jpg'},
		{'Key':'小米米家对讲机','src':'img/children-list/zhineng23.jpg'},
		{'Key':'全部只能硬件','src':'img/children-list/zhineng24.jpg'}],

		[{'Key':'小米移动电源','src':'img/children-list/dianyuan1.jpg'},
		{'Key':'插线板','src':'img/children-list/dianyuan2.jpg'},
		{'Key':'品牌移动电源','src':'img/children-list/dianyuan3.jpg'},
		{'Key':'移动电源附件','src':'img/children-list/dianyuan4.jpg'},
		{'Key':'充电器','src':'img/children-list/dianyuan5.jpg'},
		{'Key':'彩虹5号电池','src':'img/children-list/dianyuan6.jpg'},
		{'Key':'彩虹7号电池','src':'img/children-list/dianyuan7.jpg'}],

		[{'Key':'小米头戴式耳机','src':'img/children-list/yinyue1.jpg'},
		{'Key':'头戴式耳机轻松版','src':'img/children-list/yinyue2.jpg'},
		{'Key':'小米圈铁耳机Pro','src':'img/children-list/yinyue3.jpg'},
		{'Key':'小米圈铁耳机','src':'img/children-list/yinyue4.jpg'},
		{'Key':'小米胶囊耳机','src':'img/children-list/yinyue5.jpg'},
		{'Key':'小米活塞耳机清新版','src':'img/children-list/yinyue6.jpg'},
		{'Key':'小米蓝牙耳机','src':'img/children-list/yinyue7.jpg'},
		{'Key':'小米运动蓝牙耳机','src':'img/children-list/yinyue8.jpg'},
		{'Key':'品牌耳机','src':'img/children-list/yinyue9.jpg'},
		{'Key':'小米网络音响','src':'img/children-list/yinyue10.jpg'},
		{'Key':'小米蓝牙音箱','src':'img/children-list/yinyue11.png'},
		{'Key':'小米随身蓝牙音箱','src':'img/children-list/yinyue12.jpg'},
		{'Key':'小钢炮音箱2','src':'img/children-list/yinyue13.jpg'},
		{'Key':'小米方盒子音箱','src':'img/children-list/yinyue14.jpg'},
		{'Key':'小米音乐闹钟','src':'img/children-list/yinyue15.jpg'},
		{'Key':'小米米兔音箱','src':'img/children-list/yinyue16.jpg'},
		{'Key':'音乐蓝牙车充','src':'img/children-list/yinyue17.jpg'}],

		[{'Key':'贴膜','src':'img/children-list/baohu1.jpg'},
		{'Key':'保护套/保护壳','src':'img/children-list/baohu2.jpg'}],

		[{'Key':'线材','src':'img/children-list/peijian1.jpg'},
		{'Key':'自拍杆','src':'img/children-list/peijian2.jpg'},
		{'Key':'手机支架','src':'img/children-list/peijian3.jpg'},
		{'Key':'存储卡','src':'img/children-list/peijian4.jpg'}],

		[{'Key':'箱包','src':'img/children-list/xiangbao1.jpg'},
		{'Key':'90分旅行箱','src':'img/children-list/xiangbao2.jpg'},
		{'Key':'服饰','src':'img/children-list/fushi3.jpg'}],

		[{'Key':'米兔玩偶','src':'img/children-list/zhoubian1.jpg'},
		{'Key':'鼠标垫','src':'img/children-list/zhoubian2.jpg'},
		{'Key':'生活周边','src':'img/children-list/zhoubian3.jpg'},
		{'Key':'《小米》会刊','src':'img/children-list/zhoubian4.jpg'},
		{'Key':'8H乳胶枕','src':'img/children-list/zhoubian5.jpg'}]
	];


