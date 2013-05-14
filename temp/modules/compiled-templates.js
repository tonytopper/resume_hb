this["resume"] = this["resume"] || {};
this["resume"]["Templates"] = this["resume"]["Templates"] || {};

this["resume"]["Templates"]["resume/templates/jobs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<li class=\"job\">\r\n  <h3>";
  if (stack1 = helpers.positionTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.positionTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n  <div class=\"info\">\r\n    <div><span class=\"startYear\"></span> to <span class=\"endYear\"></span></div>\r\n    <div class=\"company\"></div>\r\n    <div class=\"city\"></div>\r\n    </div>\r\n    <ul class=\"highlights\">\r\n        <li></li>\r\n    </ul>\r\n<strong>Technologies:</strong>&nbsp;<span class=\"technologiesUsed\"></span>\r\n</li>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.jobs, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });