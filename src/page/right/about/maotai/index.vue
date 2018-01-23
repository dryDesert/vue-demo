<template>
	<div id="maotai" class="box">
		<div class="list-title">
			<span class="dqwzyb">
				首页<span>&nbsp;&gt;</span>
				<a href="#">走进茅台</a><span>&nbsp;&gt;</span>
				<a href="#">美丽茅台</a><span>&nbsp;&gt;</span>
			</span>
			美丽茅台
		</div>
		<div class="box-imgs">
			<div class="img-xunhuan">
				<a href="#" target="_blank"><img src="../../../../assets/img/gjmt.png" title="国酒茅台" width="288" height="202"></a>
  				<p><a href="#" target="_blank">国酒茅台</a></p>
			</div>
			<div class="img-xunhuan">
				<a href="#" target="_blank"><img src="../../../../assets/img/bgdl.jpg" title="办公大楼" width="288" height="202"></a>
  				<p><a href="#" target="_blank">办公大楼</a></p>
			</div>
			<div class="img-xunhuan">
				<a href="#"><img src="../../../../assets/img/mlmt.jpg" title="魅力茅台" width="288" height="202"></a>
  				<p><a href="#" target="_blank">魅力茅台</a></p>
			</div>
			<div class="img-xunhuan">
				<a href="#"><img src="../../../../assets/img/njcj.jpg" title="酿酒车间" width="288" height="202"></a>
  				<p><a href="#" target="_blank">酿酒车间</a></p>
			</div>
			<div class="img-xunhuan">
				<a href="#"><img src="../../../../assets/img/jszx.jpg" title="技术中心" width="288" height="202"></a>
  				<p><a href="#">技术中心</a></p>
			</div>
			<div class="img-xunhuan">
				<a href="#"><img src="../../../../assets/img/qpsg.jpg" title="棋盘、树根" width="288" height="202"></a>
  				<p><a href="#" target="_blank">棋盘、树根</a></p>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
        name: 'maotai'
    }
</script>
<style lang="scss">
@import '../../box';

	.box-imgs{
		min-height: 500px;
	    padding: 20px;
	    margin-bottom: 0px;
	    .img-xunhuan {
		    margin: 5px;
		    float: left;
		    height: 250px;
		    width: 288px;
		    padding: 1px;
		    border: 1px solid #E3E3E3;
		    p {
			    line-height: 20px;
			    font-size: 12px;
			    text-align: center;
			    padding: 8px;
			}
		}
	}
</style>