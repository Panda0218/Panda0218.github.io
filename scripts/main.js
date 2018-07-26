var vm=new Vue({
	el:"#app",
	data:{
		list:[
			{id:0,content:"不能说小傻子"},
			{id:1,content:"吵架不过夜"}
		],
		addContent:""
	},
	created:function(){
		if(!localStorage.getItem("contents")){
			localStorage.setItem("contents", JSON.stringify(this.list));
		}else{
			var cont=JSON.parse(localStorage.getItem("contents"));
			this.list=cont;
		}
	},
	methods:{
		saveUl:function(){
			localStorage.setItem("contents",JSON.stringify(this.list));
		},
		addOne:function(){
			var len=this.list.length;
			var addContent=this.addContent;
			var storedList=JSON.parse(localStorage.getItem("contents"));
			if(addContent){//如果输入了内容
			var val=storedList.every(function(item){
				return item.content!=addContent;
			});
				if(val){//val为true代表列表中没有用户输入的内容
					this.list.push({id:len,content:this.addContent});
			this.addContent="";
			this.saveUl();
				}else{
					alert("已经添加过了");
				}
				
		}else{
			alert("请输入内容后添加");
		}
		},
		delOne:function(cont){
			this.list=this.list.filter(function(item) {
				return item.content!=cont;
			});
			this.saveUl();
		}
	}
});