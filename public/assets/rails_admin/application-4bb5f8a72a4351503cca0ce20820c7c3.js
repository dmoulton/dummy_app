if(typeof $j=="undefined"&&typeof jQuery!="undefined")var $j=jQuery.noConflict();$j("#list input.checkbox.toggle").live("click",function(){var a=$j(this).is(":checked");$j("td.action.select input.checkbox[name='bulk_ids[]']").each(function(){$j(this).attr("checked",a),a?$j(this).parent().addClass("checked"):$j(this).parent().removeClass("checked")})}),$j("#list a, #list form").live("ajax:complete",function(a,b,c){$j("#list").html(b.responseText)}),$j("#list table th.header").live("click",function(){$j.ajax({url:$j(this).data("link"),success:function(a){$j("#list").html(a)}})}),$j("table#history th.header").live("click",function(){window.location=$j(this).data("link")}),$j(document).ready(function(){$j(".alert-message").alert(),$j("[rel=twipsy]").twipsy()})