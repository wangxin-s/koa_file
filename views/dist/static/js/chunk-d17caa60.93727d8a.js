(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d17caa60"],{2453:function(t,e,a){"use strict";var s=a("c8a2");a.n(s).a},"8fe6":function(t,e,a){"use strict";a.r(e);var s={props:{value:{type:Boolean,default:!1},height:{type:String,default:"100%"},backgroundColor:{type:String,default:"rgba(0, 0, 0, 0.7)"}},computed:{currentValue:{get:function(){return this._setShowDetails(this.value),this.value},set:function(t){return this.$emit("input",t)}}},watch:{showDetails:function(t,e){var a=this;!t&&e&&setTimeout((function(){a.currentValue=!1}),400)}},data:function(){return{showDetails:!1}},methods:{close:function(){this.showDetails=!1},_setShowDetails:function(t){var e=this;setTimeout((function(){e.showDetails=t}),100)}}},i=(a("2453"),a("2877")),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"hs-dialog",style:{height:t.height,backgroundColor:t.backgroundColor},on:{click:function(e){e.stopPropagation(),t.showDetails=!1}}},[a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}],staticClass:"details"},[t._t("default")],2)])],1)])}),[],!1,null,"3154ff68",null);e.default=n.exports},c8a2:function(t,e,a){}}]);