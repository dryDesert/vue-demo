<template>
	<div id="jtxw" class="box">
		<div class="list-title">
			<span class="dqwzyb">
				首页<span>&nbsp;&gt;</span>
				<a href="#">新闻资讯</a><span>&nbsp;&gt;</span>
				<a href="#">公告公示</a><span>&nbsp;&gt;</span>
			</span>
			公告公示
		</div>
		<ul class="list-nw" style="min-height:500px;">
			<li v-for="item in items">
				<span class="date">{{item.date}}</span>
				<a href="#">{{item.content}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
    export default {
        name: 'jtxw',
        data: function (){
        	return {
          		active:true,
          		items:[
          			{
          				date:'2016-07-27',
          				href:'#',
          				content:'茅台广告现身拉斯维加斯国际消费电子展'
          			},
          			{
          				date:'2015-12-27',
          				href:'#',
          				content:'一张图带你了解茅台集团2018年度工作大会'
          			},
          			{
          				date:'2011-12-27',
          				href:'#',
          				content:'居安思危 埋头苦干——以奋斗换取百年茅台新辉煌'
          			},
          			{
          				date:'2010-12-27',
          				href:'#',
          				content:'袁仁国：新发展致敬新时代 千亿茅台触手可及'
          			},
          			{
          				date:'2016-07-27',
          				href:'#',
          				content:'茅台广告现身拉斯维加斯国际消费电子展'
          			},
          			{
          				date:'2015-12-27',
          				href:'#',
          				content:'一张图带你了解茅台集团2018年度工作大会'
          			},
          			{
          				date:'2011-12-27',
          				href:'#',
          				content:'居安思危 埋头苦干——以奋斗换取百年茅台新辉煌'
          			},
          			{
          				date:'2010-12-27',
          				href:'#',
          				content:'袁仁国：新发展致敬新时代 千亿茅台触手可及'
          			},
          			{
          				date:'2016-07-27',
          				href:'#',
          				content:'茅台广告现身拉斯维加斯国际消费电子展'
          			},
          			{
          				date:'2015-12-27',
          				href:'#',
          				content:'一张图带你了解茅台集团2018年度工作大会'
          			},
          			{
          				date:'2011-12-27',
          				href:'#',
          				content:'居安思危 埋头苦干——以奋斗换取百年茅台新辉煌'
          			},
          			{
          				date:'2010-12-27',
          				href:'#',
          				content:'袁仁国：新发展致敬新时代 千亿茅台触手可及'
          			},
          		]
        	}
        }
    }
</script>
<style lang="scss">
@import '../../box';
.list-nw {
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    li {
	    background-image: url(../../../../assets/img/list-ioc.png);
	    background-repeat: no-repeat;
	    background-position: left center;
	    padding-left: 12px;
	    line-height: 50px;
	    border-bottom-width: 1px;
	    border-bottom-style: dotted;
	    border-bottom-color: #CCCCCC;
	    font-size: 16px;
	    a:hover{
	    	color:#f00
	    }
	    .date{
	    	float:right;
	    }
	}
}

</style>