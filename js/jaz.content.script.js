console.log('Jasmine Software');
chrome.storage.sync.get('jazautosavefreq', function (result) {
  // console.log('>>>'+JSON.stringify(result));
  var autoSaveFreq = 5;
  var button = $('input[name="save"]');
  if (result.jazautosavefreq != null) {
    autoSaveFreq = result.jazautosavefreq;
  }
  setTimeout(function() {
    button.trigger('click');
  },autoSaveFreq * 60*1000);
});
