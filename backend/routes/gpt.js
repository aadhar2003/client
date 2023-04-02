require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());




const port = 3001;

const OpenAIimport = require("openai");
const { Configuration, OpenAIApi } = OpenAIimport;
const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

async function sendPrompt(prompt) {
  console.log("working on it.....");

  console.log({prompt});


  const model = "gpt-3.5-turbo";
  const messages = [
    {
      "role": "system",
      "content": "You are a pro chef. Your job is to give people options and recipes on how to cook with the ingredients they have. Prefer Indian dishes.",
    },
    {
      "role": "user",
      "content": `${prompt}`,
    },
  ];

  const comlpetion = await openai.createChatCompletion({
    model,
    messages,
  });

  
  console.log("done");
  console.log(comlpetion.data.choices[0].message.content);

    return (comlpetion.data.choices[0].message.content);

}

// const response = await openai.listEngines();



router.post("/getrecipe", async function (req, res) {

    const { message } =  req.body;
    console.log("req.body is " );
    console.log(req.body);
    // console.log(message);

    // const message = "egg , spinach , onion";
    const response = await sendPrompt(message);


    if(response)
    {
        res.json({
            message: response,
          });
    }

});



module.exports = router;