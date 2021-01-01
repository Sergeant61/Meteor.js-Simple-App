import { Template } from 'meteor/templating';

Template.registerHelper('or', function (a, b) {
  return a || b;
});