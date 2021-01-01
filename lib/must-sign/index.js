import { Meteor } from 'meteor/meteor';

MustSignOut = function (context, redirect, stop) {
  if (Meteor.userId()) {
    redirect('/');
    stop();
  }
}

MustSignIn = function (context, redirect, stop) {
  if (!Meteor.userId()) {
    redirect(`/auth/sign-in?redirect=${encodeURI(context.path)}`);
    stop();
  }
}