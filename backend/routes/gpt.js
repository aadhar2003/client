require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const readFileSync = require("fs");

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
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




// making it using GEMINI
async function sendPromptGemini(prompt) {
  console.log("working on it.....");

  console.log({prompt});

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const CompletePrompt = `You are a pro chef. Your job is to give people options and recipes on how to cook with the ingredients they have. Prefer Indian dishes. Ingredients - ${prompt}`;

  const result = await model.generateContent([CompletePrompt ]);
  const response = result.response;
  const text = response.text();

  console.log("done");
  console.log(text);
  return (text);
}


router.post("/getrecipe", async function (req, res) {

    const { message } =  req.body;
    console.log("req.body is " );
    console.log(req.body);
    // console.log(message);

    // const message = "egg , spinach , onion";
    // const response = await sendPrompt(message);
    const response = await sendPromptGemini(message);


    if(response)
    {
        res.json({
            message: response,
          });
    }

});



module.exports = router;