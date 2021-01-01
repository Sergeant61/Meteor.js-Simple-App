import SimpleSchema from 'simpl-schema';

const Book = new Mongo.Collection('books');

const BookSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200,
  },
  author: {
    type: String,
    label: 'Author',
  },
  copies: {
    type: SimpleSchema.Integer,
    label: 'Number of copies',
    min: 0,
  },
  lastCheckedOut: {
    type: Date,
    label: 'Last date this book was checked out',
    optional: true,
  },
  summary: {
    type: String,
    label: 'Brief summary',
    optional: true,
    max: 1000,
  },
});

export default Book.attachSchema(BookSchema);