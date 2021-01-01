import { Meteor } from 'meteor/meteor';
import Book from '/lib/collections/Book.js';

Meteor.publish('book-all', function () {
  return Book.find();
});

Meteor.methods({
  insertBook: function (obj) {
    Book.insert(obj);
  },
  deteleBook: function (id) {
    Book.remove(id);
  },
  editBook: function (id, obj) {
    Book.update(id, obj);
  }
});