let users = require('../models/users');
const {v4:uuidv4} = require('uuid');

// get user
const getUsers = (req,res) => {
  res.send(users)
};

// create user
const createUser = (req,res) => {
  console.log(req.body);
  const newUser = {
    id : uuidv4(),
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.send(users);
};

// update user
const updateUser = (req,res) => {
  const id = req.params.id;
  users.filter((user)=>{
    return user.id == id;
  }).map((selected)=>{
    selected.name = req.body.name;
    selected.email = req.body.email;
  });
  res.send(users);
};

// delete user
const deleteUser = (req,res) => {
  const id = req.params.id;
  users = users.filter((user)=>{
    return user.id != id;
  });
  res.send(users);
};

// export 
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};