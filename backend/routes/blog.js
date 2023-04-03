const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Posts = require("../models/Posts");
const { body, validationResult } = require("express-validator");


// ROUTE-1 :: get all recipes - GET - "/api/blog/getposts" - DOES NOT REQUIRE LOGIN
router.get("/getposts", async (req, res) => {
    Posts.find({}, async (err, posts) => {
        if(err)
        {
            console.log(err);
            return res.status(500).send(err);
        }
        else
        {
            return res.json(posts);
        }
    })
});


// ROUTE-2 :: add a new post - POST - "/api/blog/addpost" - REQUIRES LOGIN
router.post('/addpost', 
fetchuser, // middleware to get user info from jwt
[
    body("title", "enter a valid title").not().isEmpty(),
    body("description", "description must be atleast 8 characters").isLength({min: 8,}),
    body("vegetarian", "enter a valid boolean for vegetarian status").isBoolean(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    else
    {
        const newPost = new Posts({
            user: req.user.id,
            title: req.body.title,
            description: req.body.description,
            procedure: req.body.procedure,
            vegetarian: req.body.vegetarian,
            tag: req.body.tag,
          });

          newPost.save((err, post) => {
            if(err)
            {
                return res.status(500).json({ error: "some error occoured" });
            } 
            else {
              return res.json(post);
            }
          });
    }
});


// ROUTE-3 :: updating an existing post - PUT - "/api/blog/updatepost" - REQUIRES LOGIN
router.put('/updatepost/:id', fetchuser , async (req, res) => {
    const {title , description, procedure, vegetarian,  tag} = req.body;

    try{
        const newPost = {};
        if (title) { newPost.title = title };
        if (description) { newPost.description = description };
        if (procedure) { newPost.procedure = procedure};
        if (vegetarian) { newPost.vegetarian = vegetarian};
        if (tag) { newPost.tag = tag };
        newPost.edited = true;

        let post = await Posts.findById(req.params.id);
        if (!post) {
             return res.status(404).send("Not Found")
            }
        else
        {
            if(post.user.toString() !== req.user.id)
            {
                return res.status(401).send("Not Allowed");
            }
            else
            {
                post = await Posts.findByIdAndUpdate(req.params.id , { $set: newPost }, { new: true });
                res.json(post);
            }
           
        }
    }
    catch (error)
    {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
});

// ROUTE-4 :: deleting an existing post - DELETE - "/api/blog/deletepost" - REQUIRES LOGIN
router.delete("/deletepost/:id", fetchuser, async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let post = await Posts.findById(req.params.id);
      if (!post) {
        return res.status(404).send("Not Found");
      }
      else
      {
        // Allow deletion only if user owns this Post
        if (post.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        else if(post.user.toString() === req.user.id) 
        {
            post = await Posts.findByIdAndDelete(req.params.id);
            res.json({ Success: "Post has been deleted", note: note });
    
        }
      }
  
     
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });

module.exports = router;   