const handleSuccess = require('../service/handleSuccess');
const handleError = require('../service/handleError');
const errorMsg = require('../service/errorMsg');
const Post = require('../models/postsModel');

const getPosts = async (req,res) =>{
  const allPosts = await Post.find();
  handleSuccess(res , allPosts);
}
const createPost = async (req, res) =>{
  try{
    const post = req.body;
    const { content, image , name, likes, comments } = post;
    if(!post){
      handleError(res , errorMsg.POST);
      return; 
    };
    const newPost = await Post.create({
      ...post
    })
    handleSuccess(res, newPost);
  }catch{
    handleError(res, errorMsg.POST)
  }
}
const deleteMany = async (req, res) =>{
  try{
    await Post.deleteMany({});
    const data = await Post.find()
    handleSuccess(res, data);
  }catch{
    handleError(res, errorMsg.DELETES);
  }
}
const updatePost = async (req, res) =>{
  try{
    const id = req.params.id;
    //const data = JSON.parse(body);
    const { body } = req;
    const editedPost = await Post.findByIdAndUpdate(id, body, { new: true });
    if(body.content !== undefined && editedPost){
      handleSuccess(res, editedPost);
    }else{
      handleError(res, errorMsg.PATCH);
    }
  }catch{
    handleError(res, errorMsg.PATCH);
  }
}
const deletePost = async (req, res) =>{
  try{
    const id = req.params.id;
    const deleteOne = await Post.findByIdAndDelete(id);
    if(deleteOne){
      handleSuccess(res,deleteOne);
    }else{
      handleError(res, errorMsg.DELETE);
    }
  }catch{
    handleError(res, errorMsg.DELETE);
  }
}

module.exports = { getPosts, createPost, deleteMany, updatePost, deletePost };
