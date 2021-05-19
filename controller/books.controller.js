'use strict';
const UserModel = require('../modules/users.model');

const getBooksByUser = async (req,res) => {
  const { email } = req.query;
  console.log (email);
  await UserModel.find({ email: email }, function (err, userData) {
    if (err) res.send('didnt work');
    res.send(userData);
  });
}

const createBooks = async (request, response) => {
  console.log(request.body);
  const { email, bookName, bookDescription, bookStatus } = request.body;
  await UserModel.find({ email: email }, (error, userData) => {
    console.log(userData);
    userData[0].books.push({
      name: bookName,
      description: bookDescription,
      status: bookStatus
    });
    userData[0].save();
    response.send(userData);
  });
}

const deleteBooksForEmail= async (req, res) => {

  const index = Number(req.params.index);
  console.log(req.params);

  const { email } = req.query;
  console.log(email);
  await UserModel.find({ email: email }, (err, userData) => {

    const newBooksArr = userData[0].books.filter((user, idx) => {
      return idx !== index;
    });
    userData[0].books = newBooksArr;
    userData[0].save();

    res.send(' Book deleted!');
  });
}

const updateBooksData = async (req, res) => {
  const index = Number(req.params.index);
  const { email, bookName, bookDescription, bookStatus } = req.body;
  await UserModel.find({ email: email }, (error, userData) => {
    userData[0].books.splice(index, 1, {
      name: bookName,
      description: bookDescription,
      status: bookStatus
    });
    userData[0].save();
    res.send(userData[0].books);
  });
}
module.exports = {
  getBooksByUser,
  createBooks,
  deleteBooksForEmail,
  updateBooksData
};

