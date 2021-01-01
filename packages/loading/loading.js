export const name = 'loading';

Loading = {};

Loading.show = function() {
  $('.Loading').css('display', 'inherit');
  $('.layout').css('display', 'none');
};

Loading.hide = function() {
  $('.Loading').css('display', 'none');
  $('.layout').css('display', 'inherit');

};