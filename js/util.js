window['util'] = {

	//使用方法： $form.validation( formId );
	
	validation : function(form ){
        console.log( 'good' );
		var $form = $(form);
		var $subBtn = $form.find('.subtn');
		var $input = $form.find('.input');
		var rules = {};
		var msg = {};

		rules = {
			tel:{
				required : true,
				telephone : true
			},
			name:{
				required : true,
			},
			time:{
				required : true,
			},
			address:{
				required:true,
			},
            product:{
                required : true,
            },
            msg:{
                required : true,
            }
		};
		msg = {
			tel:{
				required : "请输入手机号码",
				telephone : "请输入正确手机号码"
			},
			name:{
				required : "请输入姓名",
			},
			time:{
				required : "请输入购买时间",
			},
			product:{
				required : "请输入产品的名称",
			},
			msg:{
				required:'请输入产品情况',
			},
			address:{
				required:'请输入地址',
			}
		};



		//修改角色验证
		$form.validate({
			rules: rules,
			messages:msg,
			errorPlacement: function(error, element) { //指定错误信息位置
				element.parents(".input-wrap-msg").append(error);    //将错误信息添加当前元素的父结点后面
				element.parents(".input-wrap-msg").find('.df_tip').hide();    //将错误信息添加当前元素的父结点后面
			}
			//submitHandler : function(){
			//	console.log('good');
			//}
		});


		//只能由英文字母、数字组成
		$.validator.addMethod("lettersdigits" , function(value) {
			var reg = /^[a-zA-Z0-9]+$/;
			return reg.test(value);
		}, '只能由英文字母、数字组成');

		//数字小数点位数控制
		$.validator.addMethod("decimal", function(value, element) {
			var decimal = /^-?\d+(\.\d{1,3})?$/;
			return this.optional(element) || (decimal.test(value));
		},"小数位数不能超过三位!");

		$.validator.addMethod("cnCharset", function(value, element){   
			return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);   
		},"请输入中文");

		$subBtn.click(function(){
			$form.submit();
			return false;
		});
	
		$input.keydown(function(e){
			if( e.keyCode == 13){
				$form.submit();
			}
		});

		if( blur ) {
			$input.eq(0).focus();
		}
	}
};

(function(win, doc, $){
    $(function(){

        util.validation('#com_form');

    });
})(window, document, jQuery);

