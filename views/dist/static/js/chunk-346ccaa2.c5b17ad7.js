(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-346ccaa2"],{"815d":function(e,a,t){"use strict";var n=t("ca59");t.n(n).a},abee:function(e,a,t){"use strict";t.r(a);var n=(t("d3b7"),{mounted:function(){var e=this;setTimeout((function(){e.$refs.PlaneSummaryMonth.setChartOptions(),e.$refs.PlaneSummarySave.setChartOptions(),e.$refs.PlaneSummaryRefund.setChartOptions(),e.$refs.PlaneSummaryCity.setChartOptions(),e.$refs.PlaneSummaryDepartment.setChartOptions(),e.$refs.PlaneSummaryCost.setChartOptions(),e.$refs.PlaneSummaryCabin.setChartOptions(),e.$refs.PlaneSummaryBooking.setChartOptions()}),2e3)},data:function(){return{bookDayIndex:0,aveMilPriIndex:0,posAnaIndex:0,ticMonConIndex:0,savAndLosIndex:0,refAndChaIndex:0,topFivCitTicAnaIndex:0,topFivDepCosIndex:0,topFivCosCenIndex:0,bookTypeIndex:0,details:{StartDate:"2020-02",EndDate:"2020-5",Sum:8e4,Datalist:[{Name:"国内机票",OrderBusinessType:1,Value:[100,200,300,400],Sum:600},{Name:"国际机票",OrderBusinessType:2,Value:[200,200,300,400],Sum:700},{Name:"同比",OrderBusinessType:1001,Value:[10,20,30,40],Sum:0},{Name:"环比",OrderBusinessType:1002,Value:[30,20,50,40],Sum:0}]},saveDetails:{StartDate:"2020-02",EndDate:"2020-5",Sum:8e4,Datalist:[{name:"价格节省",OrderBusinessType:1003,Value:[100,200,300,400],Sum:600},{name:"潜在节省",OrderBusinessType:1004,Value:[200,100,400,400],Sum:600},{name:"最大节省",OrderBusinessType:1005,Value:[300,100,100,400],Sum:600}]},refundDetails:{StartDate:"2020-02",EndDate:"2020-5",Sum:8e4,Datalist:[{name:"退票费",OrderBusinessType:1006,Value:[100,200,300,400],Sum:600},{name:"改签费",OrderBusinessType:1007,Value:[200,100,400,400],Sum:600},{name:"退票率",OrderBusinessType:1008,Value:[30,20,40,10],Sum:600},{name:"改签率",OrderBusinessType:1009,Value:[30,10,10,20],Sum:600}]},consumptionDatalist:[{Name:"国内平均票价(经济舱)",Value:"￥1,232,733",Des1:"100%",Des2:"120%",icon:"icon-report-summary-plane"},{Name:"国际平均票价(经济舱)",Value:"￥1,232,733",Des1:"100%",Des2:"120%",icon:"icon-report-summary-intl-plane"},{Name:"国内机票张数(经济舱)",Value:"1233",Des1:"100%",Des2:"120%",icon:"icon-report-summary-plane"},{Name:"国际机票张数(经济舱)",Value:"4225",Des1:"100%",Des2:"120%",icon:"icon-report-summary-intl-plane"},{Name:"国内机票里程",Value:"2,733",Des1:"100%",Des2:"120%",icon:"icon-report-summary-plane"},{Name:"国际机票里程",Value:"32,733",Des1:"100%",Des2:"120%",icon:"icon-report-summary-intl-plane"}],departmentDetails:{Sum:150,datalist:[{name:"技术研发中心",value:10,percent:"10%"},{name:"销售部",value:20,percent:"10%"},{name:"财务部",value:30,percent:"10%"},{name:"产品部",value:40,percent:"10%"},{name:"运营部",value:50,percent:"10%"}]},destinationDetails:{Sum:150,datalist:[{name:"北京",value:10,percent:"10%"},{name:"成都",value:20,percent:"10%"},{name:"柏林",value:30,percent:"10%"},{name:"广州",value:40,percent:"10%"},{name:"上海",value:50,percent:"10%"}]},cabinDetails:{Sum:190,datalist:[{name:"头等舱",value:20,percent:"10%"},{name:"公务舱",value:30,percent:"10%"},{name:"全价经济舱",value:40,percent:"10%"},{name:"折扣经济舱",value:50,percent:"10%"},{name:"超级经济舱",value:50,percent:"10%"}]},bookingDetails:{Sum:190,datalist:[{name:"IOS",value:20,percent:"10%"},{name:"安卓",value:30,percent:"10%"},{name:"H5",value:40,percent:"10%"},{name:"PC",value:50,percent:"10%"},{name:"线下",value:50,percent:"10%"}]}}},methods:{_tabSwitch:function(e,a){this[e]!==a&&(this[e]=a,"posAnaIndex"===e&&this.$refs.PlaneSummaryCabin.setChartOptions())}},components:{BarLine:function(){return t.e("chunk-267a2a28").then(t.bind(null,"8031"))},BasicPie:function(){return t.e("chunk-12158a3e").then(t.bind(null,"ea47"))},Blank:function(){return t.e("chunk-4e3a6edf").then(t.bind(null,"38f1"))},Consumption:function(){return t.e("chunk-4ed2dd2f").then(t.bind(null,"9671"))},DoughnutPie:function(){return t.e("chunk-ae4859d4").then(t.bind(null,"bab0"))},HsScroll:function(){return t.e("chunk-d0a9530e").then(t.bind(null,"4295"))},ReportTab:function(){return t.e("chunk-687f2fda").then(t.bind(null,"9c29"))}}}),s=(t("815d"),t("2877")),i=Object(s.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"hs-container"},[t("hs-scroll",{staticClass:"table-view",attrs:{data:[e.details]}},[t("ul",[t("div",{staticStyle:{height:"1px"}}),t("consumption",{attrs:{title:"机票总金额",datalist:e.consumptionDatalist}}),t("blank",{attrs:{title:"机票逐月消费"}},[t("bar-line",{ref:"PlaneSummaryMonth",attrs:{id:"plane-summary-month",details:e.details,tabIndex:e.ticMonConIndex},on:{select:function(a){return e._tabSwitch("ticMonConIndex",a)}}})],1),t("blank",[t("div",{staticClass:"custom-kpi"},[t("div",{staticClass:"header"},[e._v("机票KPI分析")]),t("div",{staticClass:"des"},[e._v("我司国内平均折扣（仅经济舱）,国内全价票比例,国内提前预订天数优于商旅均值，国内里程均价（仅经济舱）表现与携程商旅均值略有差距，建议进一步强化差旅管控.")]),t("div",{staticClass:"details"},[t("div",{staticClass:"item"},[t("div",{staticClass:"header"},[t("p",[e._v("国内平均折扣（仅经济舱）")])]),t("div",{staticClass:"info"},[t("p",[t("span",[e._v("我司")]),t("span",[e._v("0.45")])]),t("p",[t("span",[e._v("商旅")]),t("span",[e._v("0.55")])])])]),t("div",{staticClass:"item"},[t("div",{staticClass:"header"},[t("p",[e._v("国内全价票比例")])]),t("div",{staticClass:"info"},[t("p",[t("span",[e._v("我司")]),t("span",[e._v("0.45")])]),t("p",[t("span",[e._v("商旅")]),t("span",[e._v("0.55")])])])]),t("div",{staticClass:"item"},[t("div",{staticClass:"header"},[t("p",[e._v("提前预订天数")]),t("report-tab",{attrs:{options:["国内","国际"],selected:e.bookDayIndex},on:{select:function(a){return e._tabSwitch("bookDayIndex",a)}}})],1),t("div",{staticClass:"info"},[t("p",[t("span",[e._v("我司")]),t("span",[e._v(e._s(e.bookDayIndex?.45:.65))])]),t("p",[t("span",[e._v("商旅")]),t("span",[e._v(e._s(e.bookDayIndex?.55:.75))])])])]),t("div",{staticClass:"item"},[t("div",{staticClass:"header"},[t("p",[e._v("里程均价（仅经济舱）")]),t("report-tab",{attrs:{options:["国内","国际"],selected:e.aveMilPriIndex},on:{select:function(a){return e._tabSwitch("aveMilPriIndex",a)}}})],1),t("div",{staticClass:"info"},[t("p",[t("span",[e._v("我司")]),t("span",[e._v(e._s(e.aveMilPriIndex?.45:.65))])]),t("p",[t("span",[e._v("商旅")]),t("span",[e._v(e._s(e.aveMilPriIndex?.55:.75))])])])])])])]),t("blank",{attrs:{title:"节省与损失"}},[t("bar-line",{ref:"PlaneSummarySave",attrs:{id:"plane-summary-save",details:e.saveDetails,tabIndex:e.savAndLosIndex},on:{select:function(a){return e._tabSwitch("savAndLosIndex",a)}}})],1),t("blank",{attrs:{title:"退改签情况"}},[t("bar-line",{ref:"PlaneSummaryRefund",attrs:{id:"plane-summary-refund",details:e.refundDetails,tabIndex:e.refAndChaIndex},on:{select:function(a){return e._tabSwitch("refAndChaIndex",a)}}})],1),t("blank",{attrs:{title:"机票前五城市分析"}},[t("basic-pie",{ref:"PlaneSummaryCity",attrs:{id:"plane-summary-city",details:e.destinationDetails,tabIndex:e.topFivCitTicAnaIndex,options:["全部","国内","国际"]},on:{select:function(a){return e._tabSwitch("topFivCitTicAnaIndex",a)}}})],1),t("blank",{attrs:{title:"前五部门消费情况"}},[t("basic-pie",{ref:"PlaneSummaryDepartment",attrs:{id:"plane-summary-department",details:e.departmentDetails,tabIndex:e.topFivDepCosIndex,options:["全部","国内","国际"]},on:{select:function(a){return e._tabSwitch("topFivDepCosIndex",a)}}})],1),t("blank",{attrs:{title:"前五成本中心消费情况"}},[t("basic-pie",{ref:"PlaneSummaryCost",attrs:{id:"plane-summary-cost",details:e.departmentDetails,tabIndex:e.topFivCosCenIndex,options:["全部","国内","国际"]},on:{select:function(a){return e._tabSwitch("topFivCosCenIndex",a)}}})],1),t("blank",{attrs:{title:"舱位分析"}},[t("doughnut-pie",{ref:"PlaneSummaryCabin",attrs:{id:"plane-summary-cabin",details:e.cabinDetails,tabIndex:e.posAnaIndex,options:["全部","国内","国际"]},on:{select:function(a){return e._tabSwitch("posAnaIndex",a)}}},[t("div",{staticClass:"custom"},[t("p",[e._v("机票总张数")]),t("p",[e._v(e._s(e.cabinDetails.Sum))])])])],1),t("blank",{attrs:{title:"预订方式"}},[t("doughnut-pie",{ref:"PlaneSummaryBooking",attrs:{id:"plane-summary-booking",details:e.bookingDetails,tabIndex:e.bookTypeIndex,options:["全部","国内","国际"]},on:{select:function(a){return e._tabSwitch("bookTypeIndex",a)}}},[t("div",{staticClass:"custom-booking"},[t("p",[t("span",[e._v("IOS")]),t("span",[e._v("20%")])]),t("p",[t("span",[e._v("安卓")]),t("span",[e._v("20%")])]),t("p",[t("span",[e._v("H5")]),t("span",[e._v("10%")])]),t("p",[t("span",[e._v("PC")]),t("span",[e._v("25%")])]),t("p",[t("span",[e._v("线下")]),t("span",[e._v("25%")])])])])],1),t("div",{staticStyle:{height:"15px"}})],1)])],1)}),[],!1,null,"37fc3fad",null);a.default=i.exports},ca59:function(e,a,t){}}]);