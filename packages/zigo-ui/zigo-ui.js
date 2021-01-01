// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See omni-commerce-ui-tests.js for an example of importing.
export const name = 'zigo-ui';
import Swal from 'sweetalert2';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

ZigoUi = {

  errorHandler: function (error) {
    Swal.fire({
      title: 'Hata',
      text: error.reason,
      icon: 'error',
      confirmButtonText: 'Tamam'
    });
  },


  // errorHandlerReset: function () {
  //   $('.form-floating label').attr('data-content', null);
  //   $('label').prev().removeClass('.is-invalid');
  // },

  // errorHandler: function (_error) {
  //   if (_error.error == 422) {
  //     const errors = _error.details.errors;

  //     $(`#${error}`).addClass('is-invalid');
  //     $(`#${error}+label`).attr('data-content', ` (${errors[error][0]})`);

  //     return;
  //   }


  //   if (_error.error == 400 || _error.error == 404) {
  //     const errors = _error.details.message;

  //     Swal.fire({
  //       title: 'Hata',
  //       text: errors,
  //       icon: 'error',
  //       confirmButtonText: 'Tamam'
  //     });

  //     return;
  //   }

  //   if (_error.error == 401) {
  //     Meteor.logout(function () {
  //       FlowRouter.go('/auth/sign-in');
  //     });
  //   }

  // },
}