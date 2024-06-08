// This is the script that I wrote and ran on http://en.wikipedia.org/wiki/List_of_DNS_record_types via the chrome console

var records = [];
$('table:first tbody tr').each(function(i, tr) {
   var kids = $(tr).children().toArray();
  records.push({
    type: $.trim($(kids[0])[0].innerText),
    decimal_value: parseInt($(kids[1])[0].innerText),
    rfc: $(kids[2])[0].innerText.replace(0xa0, ' '),
    description: $(kids[3])[0].innerText.replace(0xa0, ' '),
    func: $(kids[4])[0].innerText.replace(0xa0, ' '),
  
  });
});
var out = JSON.stringify(records, null, 4);
console.log(out);

var a = document.createElement("a");
a.href = `data:application/json;charset=utf-8,` + encodeURIComponent(out);
a.download = "dns_record_types_wiki.json";
a.click();
