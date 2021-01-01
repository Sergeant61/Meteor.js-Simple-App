import { Template } from 'meteor/templating';

Template.registerHelper('isEmpty', function (a) {
  return !a || a.length === 0;
});