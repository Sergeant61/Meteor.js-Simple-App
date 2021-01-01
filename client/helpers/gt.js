import { Template } from 'meteor/templating';

Template.registerHelper('gt', function (a, b) {
  return a > b;
});