import { Template } from 'meteor/templating';
import moment from 'moment';

Template.registerHelper('formatDate', function (a) {
  return moment(a).format('DD/MM/YYYY');
});