(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-15fca838"],{1616:function(t,e,a){"use strict";a.r(e);var i={props:{id:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"500px"}},mounted:function(){this.myChart=this.$echarts.init(document.getElementById(this.id))},data:function(){return{}},methods:{setChartOptions:function(){this.chartOptions={color:["#457DFE","#6452FF","#3BC79B","#F3876A","#F0585D","#F7BF46","#349CF5","#F04572"],series:[{type:"treemap",width:"100%",height:"100%",roam:"zoom",label:{formatter:"{b} {c}"},leafDepth:1,data:[{name:"亚洲",value:10,children:[{name:"中国",value:4},{name:"日本",value:6}]},{name:"欧洲",value:20,children:[{name:"德国",value:40,children:[{name:"莫斯科",value:20},{name:"柏林",value:20}]}]}]}]},this.myChart.setOption(this.chartOptions)}},components:{}},n=(a("7afe"),a("2877")),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-treemap-container"},[a("div",{staticClass:"basic-treemap",style:{width:t.width,height:t.height},attrs:{id:t.id}})])}),[],!1,null,"796f390e",null);e.default=s.exports},"3c1c":function(t,e,a){},"7afe":function(t,e,a){"use strict";var i=a("3c1c");a.n(i).a}}]);