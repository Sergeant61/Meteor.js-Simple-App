import { Template } from 'meteor/templating';

export const Translate = i18n.createReactiveTranslator();

Template.registerHelper('_', function (_key) {
  return Translate(_key, {
    _purify: true
  });
});