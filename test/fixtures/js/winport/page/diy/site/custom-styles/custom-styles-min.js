(function(g,f){var h=f.Util,b=f.diy.Diy,e=f.diy.Msg,a=f.diy.Component;var d={applyStyle:function(k,i){var j=this._getSheet();if(typeof k==="string"){k=CssParser.parseCss(k)}g.each(k,function(){var p=this,l=p.selector,n=p.styles,m=null;g.each(n,function(){var o=this,q=h.toCamelString(o.property);if(i!==false&&o.value){m={};m[q]=o.value;j.set(l,m);g.log("set style: "+l+" "+o.property+":"+o.value)}else{j.unset(l,q);g.log("unset style: "+l+" "+o.property)}})})},_getSheet:function(){if(!this._sheet){this._sheet=new FE.ui.StyleSheet(g("#custom-style")[0])}return this._sheet}};var c={init:function(j,i){this.div=j;this.config=i;this.CssParser=f.widget.CssParser;this._styleConfig=this._parseStyleConfig(this.config.customStyleConfig);this.name="SiteCustomStyles";h.initParts(this)},_parseStyleConfig:function(k){var i=this,j={};g.each(k,function(){var l=this;l.styleJson=i.CssParser.parseCss(l.styleContent||"");j[l.subject]=l});return j},getStyleConfig:function(j,i){if(i===true){i={subject:j,isEnable:false,styleJson:[]}}return this._styleConfig[j]||(this._styleConfig[j]=i)},updateStyleConfig:function(j){var i=this.getStyleConfig(j);d.applyStyle(i.styleJson,i.isEnable);this._saveStyleConfig(i)},_saveStyleConfig:function(k){var i=this,l=null,j=this.config.customizeStyleUrl;l=function(){b.authAjax(j,{type:"POST",data:i._wrapSaveStyleData(k),dataType:"json",success:function(m){if(m.success){g(window).trigger("diychanged",{type:"custom-style"});e.info("�Զ��������óɹ�")}else{e.error("�Զ���������ʧ��")}}})};h.schedule("style-"+k.subject,l)},_wrapSaveStyleData:function(i){i.styleContent=this.CssParser.toCss(i.styleJson);return{pageSid:a.getContentConfig().sid,_csrf_token:a.getDocConfig()._csrf_token,subject:i.subject,enabled:i.isEnable,styleContent:i.styleContent||"/* custom style */"}}};c.Parts={};g.namespace("Platform.winport.diy.site");f.diy.site.CustomStyles=c;f.SettingContext.register("custom-styles",c,{configField:"stylesConfig"})})(jQuery,Platform.winport);