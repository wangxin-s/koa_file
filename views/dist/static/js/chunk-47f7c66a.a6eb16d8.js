(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-47f7c66a"],{"220b":function(t,e,n){"use strict";var o=n("b15c");n.n(o).a},a61e:function(t,e,n){"use strict";n.r(e);var o=(n("d3b7"),{data:function(){return{datalist:[{name:"总概",path:"/report/summary",icon:"icon-report-summary",children:null},{name:"机票",path:"",extend:!1,icon:"icon-report-plane",children:[{name:"机票总概",icon:"icon-report-whole",path:"/report/planeSummary"},{name:"节省与损失",icon:"icon-report-save",path:"/report/planeSave"},{name:"多维度分析",icon:"icon-report-size",path:"/report/planeDepartmentCost"},{name:"预订方式",icon:"icon-report-booking",path:"/report/planeBooking"},{name:"承运商&航线",icon:"icon-report-line",path:"/report/planeRoute"},{name:"退改签情况",icon:"icon-report-change",path:"/report/planeRefund"},{name:"逐月KPI",icon:"icon-report-kpi",path:"/report/planeKpi"},{name:"碳排放",icon:"icon-report-c",path:"/report/carbonEmission"}]},{name:"酒店",path:"",extend:!1,icon:"icon-report-hotel",children:[{name:"酒店总概",icon:"icon-report-whole",path:"/report/hotelSummary"},{name:"节省与损失",icon:"icon-report-save",path:"/report/hotelSave"},{name:"多维度分析",icon:"icon-report-size",path:"/report/hotelDepartmentCost"},{name:"预订方式",icon:"icon-report-booking",path:"/report/hotelBooking"},{name:"协议酒店",icon:"icon-report-agreement",path:"/report/hotelAgreement"}]},{name:"火车票",path:"",extend:!1,icon:"icon-report-train",children:[{name:"火车票总概",icon:"icon-report-whole",path:"/report/trainSummary"},{name:"节省与损失",icon:"icon-report-save",path:"/report/trainSave"},{name:"多维度分析",icon:"icon-report-size",path:"/report/trainDepartmentCost"},{name:"预订方式",icon:"icon-report-booking",path:"/report/trainBooking"},{name:"热门路线",icon:"icon-report-line",path:"/report/trainRoute"}]},{name:"用车",path:"",extend:!1,icon:"icon-report-car",children:[{name:"用车总概",icon:"icon-report-whole",path:"/report/carSummary"},{name:"节省与损失",icon:"icon-report-save",path:"/report/carSave"},{name:"多维度分析",icon:"icon-report-size",path:"/report/carDepartmentCost"},{name:"预订方式",icon:"icon-report-booking",path:"/report/carBooking"}]},{name:"差旅定位",path:"/report/travelLocation",icon:"icon-report-city",children:null}]}},methods:{_gotoPath:function(t){if(t&&t.path){if(t.path===this.$route.path)return!1;this.$router.push(t.path),this.$emit("delegate")}}},components:{HsScroll:function(){return n.e("chunk-d0a9530e").then(n.bind(null,"4295"))}}}),r=(n("220b"),n("2877")),a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hs-report-menu"},[n("div",{staticClass:"header"},[t._v("在线管理报告")]),n("hs-scroll",{staticClass:"menu-items",attrs:{data:[t.datalist]}},[n("ul",t._l(t.datalist,(function(e,o){return n("div",{key:o,staticClass:"custom-item"},[n("div",{staticClass:"details",on:{click:function(n){e.extend=!e.extend,t._gotoPath(e)}}},[n("div",{staticClass:"logo",class:e.icon}),n("p",[t._v(t._s(e.name))]),e.children&&e.children.length>0?n("div",{staticClass:"icon-arrow-right",style:{transform:"rotate("+(e.extend?"90deg":"0deg")+")"}}):t._e()]),t.datalist[o].extend?n("div",{staticClass:"children"},t._l(e.children,(function(e,o){return n("div",{key:o,staticClass:"item-child",on:{click:function(n){return t._gotoPath(e)}}},[n("div",{staticClass:"logo",class:e.icon}),n("p",[t._v(t._s(e.name))])])})),0):t._e()])})),0)])],1)}),[],!1,null,"6132a60c",null);e.default=a.exports},b15c:function(t,e,n){}}]);