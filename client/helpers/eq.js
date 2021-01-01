import { Template } from 'meteor/templating';

Template.registerHelper('eq', function (a, b) {
  return a == b;
});