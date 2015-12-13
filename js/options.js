$(function() {
  $("#jaz-messages").hide();

  chrome.storage.sync.get('jazautosavefreq', function (result) {
    // console.log('>>>'+JSON.stringify(result));
    if (result.jazautosavefreq != null) $("#jaz-auto-save-freq").val(result.jazautosavefreq);
  });

  $("#jaz-save").click(function() {
    $("#jaz-messages").hide();
    if ($("#jaz-form").valid()) {
      var autoSaveFreq = $("#jaz-auto-save-freq").val();
      if (!autoSaveFreq) {
        autoSaveFreq = 1;
      }
      chrome.storage.sync.set({'jazautosavefreq': autoSaveFreq}, function() {
        console.log('Settings saved=' + autoSaveFreq);
        $("#jaz-messages").show();
      });
    }
  });

  $("#jaz-form").validate({
    rules: {
      "jaz-auto-save-freq": {
          digits: true
      }
    },
    highlight: function (element) {
      $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    unhighlight: function (element) {
      $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
    }
  });
});
