import { Template } from 'meteor/templating';

Template.registerHelper('formatDecimal', function (a) {
  return a.toFixed(2);
});