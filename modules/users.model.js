'use strict';
const mongoose = require('mongoose');
const BooksSchema = require('./books.model');



const UserSchema = new mongoose.Schema({
  email: String,
  books: [BooksSchema]
});

const UserModel = mongoose.model('users', UserSchema);


function seedUserCollection() {
  // eslint-disable-next-line new-cap
  const sufian = new UserModel({
    email: 'sufian.hamdan.1992.94@gmail.com',
    books: [
      {
        name: 'Harry Potter',
        description: 'On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry. Harry discovers that not only is he a wizard, but he is a famous one. He meets two best friends, Ron Weasley and Hermione Granger, and makes his first enemy, Draco Malfoy.',
        status:'available'
      },
      {
        name: 'The Lord of the Rings ',
        description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkiens extensive knowledge of philology and folklore.',
        status:'available'
      },
      {
        name: 'Staying Strong',
        description: 'Demi Lovato wakes up each morning and affirms her commitment to herself-to her health, her happiness, her being. Those commitments are the bedrock of her recovery and her work helping other young people dealing with the issues she lives with every single day.',
        status:'available'
      }
    ]
  });
  // eslint-disable-next-line new-cap
  const sukina = new UserModel({
    email: 'sukinaabuhammad2013@gmail.com',
    books: [
      {
        name: 'The Great Gatsby',
        description: 'The Great Gatsby explores the decadence of the Jazz Age, and one man’s introduction into a world where even those with the most indulgent lives cannot earn love.',
        status: 'available'
      },
      {
        name: 'Pride and Prejudice',
        description: 'Pride And Prejudice details the courtship of two opposed characters in a world where manners and courtesy are of the utmost importance.',
        status: 'available'
      },
      {
        name: 'The Hobbit',
        description: 'The Hobbit was originally written as a short children’s book. Meet your favourite characters for the first time as the unforgettable Bilbo Baggins traverses the harsh landscapes of Middle Earth to challenge a dragon.',
        status: 'available'
      }
    ]
  });

  sufian.save();
  sukina.save();
}
seedUserCollection();


module.exports = UserModel;
