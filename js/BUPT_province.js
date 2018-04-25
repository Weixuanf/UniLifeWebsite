$(document).ready(function() { var ctx = document.getElementById("province");
	var myChart = new Chart(province, {
		type: 'bar',
		data: {
			labels: [ "Beijing","Shandong","Hebei","Shanxi","Henan","Liaoning","Heilongjiang","Hunan","Xinjiang","Sichuang","Hubei","Anhui","Jiangxi","Neimenggu","Jiangsu","Shanxi","Jilin","Guangdong","Tianjin","Guangxi","Fujian","Shanghai","Zhejiang","Chongqing","Gansu","Yunnan","Ningxia","Guizhou","Hainan","Qinghai","Tibet"],
			datasets: [{label: 'Percentage 百分比',
			data: [15.80,7.89,7.28,5.07,4.60,4.59,3.88,3.76,3.66,3.44,3.17,2.83,2.79,2.78,2.64,2.64,2.61,2.20,2.05,2.02,1.91,1.70,1.70,1.69,1.45,1.44,1.27,1.26,.77,.73,.37],
			backgroundColor: ['rgba(255, 159, 64, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)'],
			borderColor: ['rgba(255, 159, 64, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)'],
			borderWidth: 1}]},
			options: {}});
	var gender = document.getElementById("gender");
	var myPieChart = new Chart(gender,{
		type: 'doughnut',
		data: {
			labels: ["Female 女","Male 男"],
			datasets: [{
				data: [5504, 7758],
				backgroundColor: ["#FF6384","#36A2EB"],
				hoverBackgroundColor: ["#FF6384","#36A2EB"]}]},});
	var nextuni = document.getElementById("nextuni");
	var mybar = new Chart(nextuni, {
		type: 'bar',data: {
			labels: [ "BUPT/北京邮电大学","Tsinghua Uni/清华大学","Peking Uni/北京大学","University of Southern California","北京航空航天大学","中科院","Queen Mary","北京师范大学","Columbia University","New York University","Carnegie Mellon University","中国人民公安大学","北京交通大学","北京科技大学","中国人民大学","中国农业大学","中国政法大学","东华大学","中国传媒大学","Southampton",],
			datasets: [{
				label: '人数',
				data: [500,62,41,38,36,35,19,18,17,16,15,15,15,14,14,14,13,13,12,12,],
				backgroundColor: ['rgba(255, 159, 64, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)'],
				borderColor: ['rgba(255, 159, 64, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)'],
				borderWidth: 1}]},
				options: {scales: {yAxes: [{display:false}],xAxes: [{ticks:{autoSkip:false}}]}}}); 
	$('#company').append('<button type="button" class="btn btn-default">China Mobile 中国移动</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">China Telecom 中国电信</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">BUPT 北京邮电大学</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">IBM</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">Baidu 百度</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">China Unicom 中国联通</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">Beijing Beichen 北京北辰</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">Beijing Xinxi 北京信息</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">北京东方</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">Huawei 华为技术</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">千橡互动</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">北京奥雷神州管理顾问</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">Sina 新浪</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">Microsoft 微软</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">Bank of China 中国银行</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">Tencent 腾讯</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">华为</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">中国人寿</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">北京京京肉食厂</button>'); 
	$('#company').append('<button type="button" class="btn btn-default">北京移动</button>');
	var addr = document.getElementById("addr");
	var myAddrChart = new Chart(addr,{type: 'doughnut',data: {labels: ['北京','北京市','上海','广州市','天津',],
		datasets: [{data: [1973,1732,248,117,90,],
			backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#E7E9ED','#4BC0C0']}]},}); 
	$('#split').append('<code>Live 生活</code>'); $('#split').append('<code>Exam 考试</code>'); 
	$('#split').append('<code>Pleasure 快乐</code>'); $('#split').append('<code>Happiness 幸福</code>'); 
	$('#split').append('<code>Happy 开心</code>'); $('#split').append('<code>Work 工作</code>'); 
	$('#split').append('<code>Not Bad 不错</code>'); $('#split').append('<code>Boring 无聊</code>'); 
	$('#split').append('<code>Depression 郁闷</code>'); $('#split').append('<code>BUPT 北邮</code>'); 
	$('#split').append('<code>Bless 祝福</code>'); $('#split').append('<code>Bad 不好</code>'); 
	$('#split').append('<code>Contest 比赛</code>'); $('#split').append('<code>Success 成功</code>'); 
	$('#split').append('<code>English 英语</code>'); $('#split').append('<code>Lonely 寂寞</code>'); 
	$('#split').append('<code>Happy Birthday 生日快乐</code>'); $('#split').append('<code>Cute 可爱</code>'); 
	$('#split').append('<code>Pain 痛苦</code>'); $('#split').append('<code>No Way 不行</code>');
	var senti = document.getElementById("senti");
	var mySentiChart = new Chart(senti,{
		type: 'doughnut',
		data: {labels: ['Happy 开心','Good 好','Angry 愤怒','Sad 悲伤','Afraid 害怕','Disgust 恶',],datasets: [{data: [92417,203256,4855,52692,13462,123220,],
				backgroundColor: ['#FFCE56','#FFDF95','#FF6384','#5EB5EF','#AFDBF8','#E7E9ED']}]},});})(jQuery) 