jQuery(function($) {
	$('#billing\\:country_id').change(function(e) {
		var $this = $(this);
		var $input = $('#checkout-step-billing #billing\\:vat_id');
		var $label = $('#checkout-step-billing label[for="billing:vat_id"]');
		if ($this.val() == "IT") {
			$input.addClass('required-entry validate-alphanum');
			$label.addClass('required');
			$('<span id="vat_id_required"><em>*</em></span>').appendTo($label);
		} else {
			$input.removeClass('required-entry validate-alphanum');
			$label.removeClass('required');
			$('#vat_id_required').remove();
		}
	}).trigger('change');
	
	/*Inserire il codice fiscale durante lo shipping se non è stato inserito durante il billing*/
	$('#shipping\\:country_id').change(function(e){
		var $this = $(this);
		var $input = $('#checkout-step-shipping #billing\\:vat_id');
		var $label = $('#checkout-step-shipping label[for="billing:vat_id"]');
		if ($this.val() == "IT" && $('#billing\\:vat_id').val() == "") {
			$input.addClass('required-entry validate-alphanum');
			$label.addClass('required');
			$('<span id="vat_id_required"><em>*</em></span>').appendTo($label);
		} else {
			$input.removeClass('required-entry validate-alphanum');
			$label.removeClass('required');
			$('#vat_id_required').remove();
		}
	}).trigger('change');
	
	
	$('#country').change(function(e) {
		var $this = $(this);
		var $input = $('#vat_id');
		var $label = $('label[for="vat_id"]');
		if ($this.val() == "IT") {
			$input.addClass('required-entry validate-alphanum');
			$label.addClass('required');
			$('<span id="vat_id_required"><em>*</em></span>').appendTo($label);
		} else {
			$input.removeClass('required-entry validate-alphanum');
			$label.removeClass('required');
			$('#vat_id_required').remove();
		}
	}).trigger('change');
});  
