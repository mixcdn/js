var $ =  jQuery.noConflict();

(function($){	

	var site = {

		defaultMethods: function(){

			this.showForm(),
			this.disableKey();
			this.setCookie();
			this.playGround();
		},

		setCookie: function(cookie){
			
			/*
				set cookie after the form is successfully submitted
			*/
			if($.cookie("test") == 1){

				$('#frm-form').remove();

				this.updateTitle();
				this.showMessage();
				this.addConversionCodeToForm();
			}
		},

		updateTitle: function(){

			/*
				prepend a new title after the form is successfully submitted
			*/
			var newtitle = 'Thank You | ';
			$('html head').find('title').prepend(newtitle);
		},

		disableKey: function(){

			/*
				disable none numeric keys for phone and postcode fields
			*/
			$('#Phone, #Postcode').keypress(function (e){
				if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
					return false;
				}
			});
		},

		showForm: function(){

			/*
				if browser's javascript is disabled form will not show
			*/
			var form = '<form method="POST" role="form" id="frm-form"><div class="form-group"><input type="text" name="pd_fname" class="form-control" id="Firstname" placeholder="First Name" autocomplete="off" autofocus></div><div class="form-group"><input type="text" name="pd_lname" class="form-control" id="Surname" placeholder="Surame" autocomplete="off"></div><div class="form-group"><input type="text" name="pd_email" class="form-control" id="Email" placeholder="Email" autocomplete="off"></div><div class="form-group"><input type="text" name="pd_phone" class="form-control" id="Phone" placeholder="Phone" autocomplete="off" maxlength="10"></div><div class="form-group"><input type="text" name="pd_postcode" class="form-control" id="Postcode" placeholder="Postcode" autocomplete="off" maxlength="4"></div><button type="submit" class="btn btn-warning">Submit</button></form>';
			$('.div-form').append(form);

			$('button').on('click', function(){

				site.validateForm();

			});
		},

		validateForm: function(){
			
			/*
				execute form validation
			*/
			$('#frm-form').validate({
				rules: {
					pd_fname: {
						required: true
					},
					pd_lname: {
						required: true,
					},
					pd_email: {
						required: true,
						email: true
					},
					pd_phone: {
						required: true,
						number: true
					},
					pd_postcode:{
						required: true,
						number: true
					}
				},
				messages: {
					pd_fname: {
						required: "Firstname is required"
					},
					pd_lname: {
						required: "Surname is required"
					},
					pd_email: {
						required: "Email is required",
						email: "Please enter a valid email"
					},
					pd_phone: {
						required: "Phone is required",
						number: "Only number is allowed"
					},
					pd_postcode:{
						required: "Postcode is required",
						number: "Only number is allowed"
					}
				},
				submitHandler: function(form){

					var form 		= $('#frm-form'),
						form_url 	= form.attr('action', 'http://localhost:90/LANDING-TEMPLATE/'),
						form_type 	= form.attr('type'),
						form_data 	= {};

						form.find('[name]').each(function(index, value){
							var form_field 					= $(this),
								form_field_name 			= form_field.attr('name'),
								form_field_value 			= form_field.val();
								form_data[form_field_name] 	= form_field_value;
						});

					$.ajax({
						url: form_url,
						type: form_type,
						data: form_data,
						contentType: "application/json; charset=utf-8",
						dataType: "jsonp",
						crossDomain: true,
						
						beforeSend: function(data){

							var cookie = $.cookie("test", 1, { expires : 1 });
							this.setCookie(cookie);

						},
						success: function(data){
							console.log('ok');
						},
						error: function(error){
							console.log(error);
						}
					});
				}
			});
		},

		showMessage: function(){

			/*
				append the message after a successful form submit
			*/
			var message = '<div class="div-thankyou"><p class="p-thankyou"><span>Thank you for </span><span>your interest</span></p></div>';
			$('.div-form').append(message);
		},

		addConversionCodeToForm: function(){
			
			/*
				append the conversion code after a successful form submit
			*/
			var code_toform = '<!-- Google Code for Lead Conversion Page --><script type="text/javascript">/* <![CDATA[ */var google_conversion_id = 1019802622;var google_conversion_language = "en";var google_conversion_format = "3";var google_conversion_color = "ffffff";var google_conversion_label = "fGaLCNqE3QIQ_uej5gM";var google_conversion_value = 1.00;var google_conversion_currency = "AUD";var google_remarketing_only = false;/* ]]> */</script><script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script><noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1019802622/?value=1.00&amp;currency_code=AUD&amp;label=fGaLCNqE3QIQ_uej5gM&amp;guid=ON&amp;script=0"/></div></noscript>';
			$('.div-form').append(code_toform);
		},

		addConversionCodeToBody: function(){
			
			/*
				append the conversion code after a successful form submit
			*/
			var code_tobody = '<!-- Google Code for Lead Conversion Page --><script type="text/javascript">/* <![CDATA[ */var google_conversion_id = 1019802622;var google_conversion_language = "en";var google_conversion_format = "3";var google_conversion_color = "ffffff";var google_conversion_label = "fGaLCNqE3QIQ_uej5gM";var google_conversion_value = 1.00;var google_conversion_currency = "AUD";var google_remarketing_only = false;/* ]]> */</script><script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script><noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1019802622/?value=1.00&amp;currency_code=AUD&amp;label=fGaLCNqE3QIQ_uej5gM&amp;guid=ON&amp;script=0"/></div></noscript>';
			$('.div-form').append(code_tobody);
		},

		playGround: function(){

			/* do stuff */

			/* javascript/jquery media query */

			/* UNFINISHED TO BE CONTINUED */

			enquire
				.register("screen and (max-width: 1020px)", {

				    match : function() {
				        alert('asdasd');
				    }

				}, true);
		}
	}

	site.defaultMethods();

})(jQuery);