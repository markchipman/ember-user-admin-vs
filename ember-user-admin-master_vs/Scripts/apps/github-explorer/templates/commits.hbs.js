﻿var commits = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "        <tr>\r\n            <td><img "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'src': (((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.author : stack1)) != null ? stack1.avatar_url : stack1))
  },"data":data})))
    + " style=\"width:100px\" /></td>\r\n            <td>\r\n                <h5>Sha: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.sha : stack1), depth0))
    + "</h5>\r\n                <p>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.commit : stack1)) != null ? stack1.message : stack1), depth0))
    + "</p>\r\n                <hr />\r\n                <p class=\"text-muted\">"
    + escapeExpression(((helpers.fromDate || (depth0 && depth0.fromDate) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.created_at : stack1), {"name":"fromDate","hash":{},"data":data})))
    + "</p>\r\n            </td>\r\n        </tr>";
},"3":function(depth0,helpers,partials,data) {
  return "\r\n        <tr>\r\n            <td>\r\n                <p class=\"text-muted\">No Commits</p>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿<h4>COMMITS</h4>\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>Avatar</th>\r\n            <th>Full Name</th>\r\n        <tr>\r\n    </thead>\r\n    <tbody>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.item : depth0), (depth0 != null ? depth0['in'] : depth0), (depth0 != null ? depth0.model : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody>\r\n</table>";
},"useData":true});