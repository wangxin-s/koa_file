(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0e5e2705"],{"0df1":function(e,t,a){},"37d5":function(e,t,a){"use strict";a.r(t);var n=(a("d3b7"),{mounted:function(){var e=this;setTimeout((function(){e.$refs.TrainSummaryMonth.setChartOptions(),e.$refs.TrainRouteTreemap.setChartOptions(),e.$refs.TrainSummaryRefund.setChartOptions(),e.$refs.TrainSummaryCity.setChartOptions(),e.$refs.TrainSummarySeat.setChartOptions(),e.$refs.TrainSummaryDepartment.setChartOptions(),e.$refs.TrainSummaryCost.setChartOptions(),e.$refs.TrainSummaryBooking.setChartOptions()}),2e3)},data:function(){return{traMonConIndex:0,traRefAndChaIndex:0,details:{StartDate:"2020-02",EndDate:"2020-5",Sum:8e4,Datalist:[{Name:"国内酒店",OrderBusinessType:6,Value:[100,200,300,400],Sum:600},{Name:"国际酒店",OrderBusinessType:11,Value:[200,200,300,400],Sum:700},{Name:"同比",OrderBusinessType:1001,Value:[10,20,30,40],Sum:0},{Name:"环比",OrderBusinessType:1002,Value:[30,20,50,40],Sum:0}]},refundDetails:{StartDate:"2020-02",EndDate:"2020-5",Sum:8e4,Datalist:[{name:"退票费",OrderBusinessType:1006,Value:[100,200,300,400],Sum:600},{name:"改签费",OrderBusinessType:1007,Value:[200,100,400,400],Sum:600},{name:"退票率",OrderBusinessType:1008,Value:[30,20,40,10],Sum:600},{name:"改签率",OrderBusinessType:1009,Value:[30,10,10,20],Sum:600}]},consumptionDatalist:[{Name:"火车票票价",Value:"￥542",Des1:"100%",Des2:"120%",icon:"icon-report-summary-train"},{Name:"火车票张数",Value:"42",Des1:"100%",Des2:"120%",icon:"icon-report-summary-train"},{Name:"火车票均价",Value:"￥542",Des1:"100%",Des2:"120%",icon:"icon-report-summary-train"}],destinationDetails:{Sum:150,datalist:[{name:"北京",value:10,percent:"10%"},{name:"成都",value:20,percent:"10%"},{name:"柏林",value:30,percent:"10%"},{name:"广州",value:40,percent:"10%"},{name:"上海",value:50,percent:"10%"}]},seatDetails:{Sum:150,datalist:[{name:"二等座",value:10,percent:"10%"},{name:"一等座",value:20,percent:"10%"},{name:"商务座",value:30,percent:"10%"},{name:"无座",value:40,percent:"10%"},{name:"其他",value:50,percent:"10%"}]},departmentDetails:{Sum:150,datalist:[{name:"技术研发中心",value:10,percent:"10%"},{name:"销售部",value:20,percent:"10%"},{name:"财务部",value:30,percent:"10%"},{name:"产品部",value:40,percent:"10%"},{name:"运营部",value:50,percent:"10%"}]},bookingDetails:{Sum:190,datalist:[{name:"IOS",value:20,percent:"10%"},{name:"安卓",value:30,percent:"10%"},{name:"H5",value:40,percent:"10%"},{name:"PC",value:50,percent:"10%"},{name:"线下",value:50,percent:"10%"}]}}},methods:{_tabSwitch:function(e,t){this[e]!==t&&(this[e]=t,"rouAndCarAnaIndex"===e&&this.$refs.PlaneRouteTreemap.setChartOptions())}},components:{BarLine:function(){return a.e("chunk-267a2a28").then(a.bind(null,"8031"))},BasicPie:function(){return a.e("chunk-12158a3e").then(a.bind(null,"ea47"))},BasicTreemap:function(){return a.e("chunk-15fca838").then(a.bind(null,"1616"))},Blank:function(){return a.e("chunk-4e3a6edf").then(a.bind(null,"38f1"))},Consumption:function(){return a.e("chunk-4ed2dd2f").then(a.bind(null,"9671"))},DoughnutPie:function(){return a.e("chunk-ae4859d4").then(a.bind(null,"bab0"))},HsScroll:function(){return a.e("chunk-d0a9530e").then(a.bind(null,"4295"))}}}),r=(a("c100"),a("2877")),i=Object(r.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hs-container"},[a("hs-scroll",{staticClass:"table-view",attrs:{data:[e.details]}},[a("ul",[a("div",{staticStyle:{height:"1px"}}),a("consumption",{attrs:{title:"火车票总金额",datalist:e.consumptionDatalist}}),a("blank",{attrs:{title:"火车票逐月消费"}},[a("bar-line",{ref:"TrainSummaryMonth",attrs:{id:"train-summary-month",details:e.details,tabIndex:e.traMonConIndex},on:{select:function(t){return e._tabSwitch("traMonConIndex",t)}}})],1),a("blank",{attrs:{title:"热门路线"}},[a("basic-pie",{ref:"TrainSummaryCity",attrs:{id:"train-summary-city",details:e.destinationDetails}})],1),a("blank",{attrs:{title:"热门目的地与线路"}},[a("basic-treemap",{ref:"TrainRouteTreemap",attrs:{id:"train-route-treemap"}})],1),a("blank",{attrs:{title:"座席分析"}},[a("basic-pie",{ref:"TrainSummarySeat",attrs:{id:"train-summary-seat",details:e.seatDetails}})],1),a("blank",{attrs:{title:"退改签情况"}},[a("bar-line",{ref:"TrainSummaryRefund",attrs:{id:"train-summary-refund",details:e.refundDetails,tabIndex:e.traRefAndChaIndex},on:{select:function(t){return e._tabSwitch("traRefAndChaIndex",t)}}})],1),a("blank",{attrs:{title:"前五部门消费情况"}},[a("basic-pie",{ref:"TrainSummaryDepartment",attrs:{id:"train-summary-department",details:e.departmentDetails}})],1),a("blank",{attrs:{title:"前五成本中心消费情况"}},[a("basic-pie",{ref:"TrainSummaryCost",attrs:{id:"train-summary-cost",details:e.departmentDetails}})],1),a("blank",{attrs:{title:"预订方式"}},[a("doughnut-pie",{ref:"TrainSummaryBooking",attrs:{id:"train-summary-booking",details:e.bookingDetails}},[a("div",{staticClass:"custom-booking"},[a("p",[a("span",[e._v("IOS")]),a("span",[e._v("20%")])]),a("p",[a("span",[e._v("安卓")]),a("span",[e._v("20%")])]),a("p",[a("span",[e._v("H5")]),a("span",[e._v("10%")])]),a("p",[a("span",[e._v("PC")]),a("span",[e._v("25%")])]),a("p",[a("span",[e._v("线下")]),a("span",[e._v("25%")])])])])],1),a("div",{staticStyle:{height:"15px"}})],1)])],1)}),[],!1,null,"02736a8b",null);t.default=i.exports},c100:function(e,t,a){"use strict";var n=a("0df1");a.n(n).a}}]);