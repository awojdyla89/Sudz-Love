const Post = require('../models/post');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3();

const BUCKET_NAME = process.env.BUCKET_NAME

module.exports = {
    create,
    index,
    deletePost
}

function create(req, res){
    console.log(req.file, req.body, 'this is create method', req.user)
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){
            if(err){
                console.log(err);
                res.json({data: err})
            }


            const post = await Post.create({
                favBeer: req.body.favBeer, 
                abv: req.body.abv, 
                beerType: req.body.beerType,
                aboutBeer: req.body.aboutBeer, 
                postedDate: req.body.postedDate,
                user: req.user, 
                photoUrl: data.Location});

                      // We have to populate the user on the post we just created
            // on a document you have to call execPopulate()
            
            const populatedPost = await post.populate('user').execPopulate();
            // userSchema.set('toObject') gets invoked, to delete the password
            // when we populate the user so we don't have to worry about sending over the password!


            // tells the client, success create worked
            res.status(201).json({post: populatedPost})
        })


    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function index(req, res){
    try {
        const posts = await Post.find({}).sort('-postedDate').populate('user').exec()
        res.status(200).json({posts})
    } catch(err){

    }
}

async function deletePost(req, res){
    try {
        const post = await Post.findById(req.params.id);
        
        post.remove();
        await post.save();
        res.json({data: 'post removed'})
    } catch(err){
        res.json({error: err})
    }
}