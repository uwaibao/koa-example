let xml= '<?xml version="1.0" encoding="utf-8"?><SubmitResult xmlns="http://106.ihuyi.cn/"><code>2</code><msg>ζδΊ€ζε</msg><smsid>15200628912765675054</smsid></SubmitResult>'
var doc = new dom().parseFromString(xml)
for(var node = result.firstChild; node !== null; node = node.nextSibling) {
    json[node.tagName] = node.firstChild.data;
}
console.log(json)