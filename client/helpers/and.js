import { Template } from 'meteor/templating';

Template.registerHelper('and', function(a, b) {
  return a && b;
});