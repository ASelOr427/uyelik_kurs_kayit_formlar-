var is_loading = false;
var page_elements_height;
$(function () {
	setUpSelectize($('.selectize'));
	$('#side-menu').metisMenu();
	page_elements_height = $('header').height() + $('footer').height() + 11;
	if($('.breadcrumb-nav').length){
		page_elements_height = page_elements_height + $('.breadcrumb-nav').height();
	}
	$('.page-wrapper').css({'min-height':parseInt($(window).height() - page_elements_height) + 'px'});
	$(window).on('resize',function(){
		$('.page-wrapper').css({'min-height':parseInt(page_elements_height) + 'px'})
	});
	$('#toggle_sidebar').bind('click',function(){
		$('html').toggleClass('sidebar-closed');
	});
	if($(window).width()<768){
		$('html').toggleClass('sidebar-closed');
	}
	$('.btn-notify').on('click',function(){
		showNoty($(this).attr('data-text'),$(this).attr('data-class'),$(this).attr('data-title'));
		return false;
	});
	$('.ajax-form').submit(function(){
		if(is_loading){
			return false;
		}
		var form = $(this);
		var target = form.attr('action');
		var data = form.serialize();
		var loading_button = form.find('.button-loader');
		toggleLoadingButton(loading_button);
		$.ajax({
			type:'POST',
			url:target,
			data:data,
			dataType:'json',
			success:function(msg){
				if(msg.SAVE.id){
					form.find('input[name="id"]').val(msg.SAVE.id);
				}
				showNoty(msg.MSG,msg.CLASS,msg.TITLE);
				if(typeof(form.attr('data-redirect'))!='undefined' && msg.RES=='OK'){
					setTimeout(function(){window.location = form.attr('data-redirect');},1000);
				}
				toggleLoadingButton(loading_button);
			},
			error:function(xhr){
				toggleLoadingButton(loading_button);
			}
		});
		return false;
	});
	$('.ajax-upload-form').submit(function(){
		if(is_loading){
			return false;
		}
		var form = $(this);
		var target = form.attr('action');
		var data = new FormData($(this)[0]);		
		var loading_button = form.find('.button-loader');
		toggleLoadingButton(loading_button);
		$.ajax({
			type:'POST',
			url:target,
			data:data,
			processData: false,
			contentType: false,
			dataType:'json',
			success:function(msg){
				if(msg.SAVE.id){
					form.find('input[name="id"]').val(msg.SAVE.id);
					if(typeof(msg.SAVE.redirect)!='undefined'){
						form.attr('data-redirect',msg.SAVE.redirect);
					}
				}
				showNoty(msg.MSG,msg.CLASS,msg.TITLE);
				if(typeof(form.attr('data-redirect'))!='undefined' && msg.RES=='OK'){
					setTimeout(function(){window.location = form.attr('data-redirect');},1000);
				}
				toggleLoadingButton(loading_button);
			},
			error:function(xhr){
				toggleLoadingButton(loading_button);
			}
		});
		return false;
	});
	$('.btn-update-confirm').on('click',function(){
		swal({   
			title: 'Bilgilerimi Güncelle',   
			text: 'HSVportal Bilgilerimi güncellemek istiyorum.',   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#28a745",   
			confirmButtonText: 'Evet',   
			cancelButtonText: 'Hayır',   
			closeOnConfirm: false 
		},
		function(){  
			swal.disableButtons();
			window.location = homepage+'hesabim/duzenle';
		});
	});
});
Selectize.define("stop_backspace_delete", function (options) {
  var self = this;

  this.deleteSelection = (function() {
    var original = self.deleteSelection;

    return function (e) {
      if (!e || e.keyCode !== 8) {
        return original.apply(this, arguments);
      }

      return false;
    };
  })();
});
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      '00',
    ].join(':')
  );
}
function showHideOtherOption(val,other_val,target){
	if(val==other_val){
		$(target).removeClass('d-none');
	}else{
		$(target).addClass('d-none');
		$('input[data-input="'+target+'"').val('');
	}
}
function toggleLoadingButton(button){
	is_loading = is_loading ? false : true;
	button.toggleClass('is-loading');
}
function swtichTab(tab){
	$('a.nav-link[data-bs-target="#' + tab + '"]').tab('show');
	return false;
}
function setUpSelectize(el){
	el.each(function(){
		$(this).selectize({
			plugins: typeof($(this).attr('data-plugins'))!=='undefined' ? JSON.parse($(this).attr('data-plugins')) : [],
			allowEmptyOption:$(this).attr('data-allow-empty')==='false' ? false : true
		});
	});
}
function showNoty(text,type,title,sticky){
	if(!sticky){
		sticky = false;
	}
	if(!title){
		title = '';
	}
	if(type=='danger'){
		type = 'error';
	}
	if(type=='information'){
		type = 'info';
	}
	toastr.options = {
		closeButton:true,
		progressBar:true,
		timeOut:sticky ? 0 : 5000,
		extendedTimeOut:sticky ? 0 : 1000,
	}
    toastr[type](text,title)
}
function uniqid(prefix = "", random = false) {
    const sec = Date.now() * 1000 + Math.random() * 1000;
    const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0").toUpperCase();
    return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}`:""}`;
};
/*ScrollTop*/
$(function() { $.fn.scrollToTop = function() { $(this).hide().removeAttr("href"); if ($(window).scrollTop() != "0") { $(this).fadeIn("slow") } var scrollDiv = $(this); $(window).scroll(function() { if ($(window).scrollTop() == "0") { $(scrollDiv).fadeOut("slow") } else { $(scrollDiv).fadeIn("slow") } }); $(this).click(function() { $("html, body").animate({ scrollTop: 0 }, "slow") }) } }); $(function() { $("#hb-gotop").scrollToTop(); }); 