import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.componentNavbar.onRendered(function () {

});

Template.componentNavbar.events({
  'click .sign-out': function (event, template) {
    event.preventDefault();
    Loading.show();

    Meteor.logout(function () {
      Loading.hide();
      FlowRouter.go('/auth/sign-in');
    });
  }
});
