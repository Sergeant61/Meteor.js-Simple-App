import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

export const IsActive = function (value, htmlClass = 'active') {
  let isActive = false;
  if (value == '/') {
    isActive = FlowRouter._current.path == '/' ? true : false;
  } else {
    isActive = FlowRouter._current.path.includes(value);
  }

  if (isActive) {
    return htmlClass
  }
}

Template.registerHelper('isActive', function (value, htmlClass) {
  FlowRouter.watchPathChange();
  return IsActive(value, htmlClass);
});