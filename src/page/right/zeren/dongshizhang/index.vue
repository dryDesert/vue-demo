<template>
	<div id="dongshizhang" class="box">
		<div class="list-title">
			<span class="dqwzyb">
				首页<span>&nbsp;&gt;</span>
				<a href="#">社会责任</a><span>&nbsp;&gt;</span>
				<a href="#">董事长致辞</a><span>&nbsp;&gt;</span>
			</span>
			董事长致辞
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
        name: 'dongshizhang',
        data: function (){
        	return {
          		active:true,
          		items:[
          			{
          				date:'2016-07-27',
          				href:'#',
          				content:'2015年度社会责任报告董事长致辞'
          			},
          			{
          				date:'2015-12-27',
          				href:'#',
          				content:'2011年度社会责任报告董事长致辞'
          			},
          			{
          				date:'2011-12-27',
          				href:'#',
          				content:'2010年度社会责任报告董事长致辞'
          			},
          			{
          				date:'2010-12-27',
          				href:'#',
          				content:'2009年度社会责任报告董事长致辞'
          			},
          		]
        	}
        }
    }
</script>
<style lang="scss">
@import '../../box';

// .box{
// 	float: right;
//     width: 946px;
//     /* background-color: #FFFFFF; */
//     -moz-box-shadow: 0px 1px 3px #e6e6e6;
//     -webkit-box-shadow: 0px 1px 3px #e6e6e6;
//     box-shadow: 0px 1px 3px #e6e6e6;
//     -moz-border-radius: 5px;
//     -webkit-border-radius: 5px;
//     border-radius: 5px;
//     border: 1px solid #D5D5D5;
//     background-image: url(../../../../assets/img/n-bg.jpg);
//     background-repeat: no-repeat;
//     background-position: center top;
//     .list-title {
// 	    font-size: 20px;
// 	    line-height: 25px;
// 	    font-weight: bold;
// 	    margin-top: 30px;
// 	    margin-right: 50px;
// 	    margin-bottom: 30px;
// 	    margin-left: 50px;
// 	    padding-bottom: 10px;
// 	    border-bottom-width: 2px;
// 	    border-bottom-style: solid;
// 	    border-bottom-color: #C4BBB6;
// 	    .dqwzyb{
// 	    	font-size:12px;
// 	    	float:right;
// 		}
// 	}
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
		    .date{
		    	float:right;
		    }
		}
	}
// }
</style>