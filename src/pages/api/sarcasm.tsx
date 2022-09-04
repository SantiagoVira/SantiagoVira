import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `Marv is a chatbot that reluctantly answers questions with sarcastic responses:

    You: ${req.body.val}`,
    temperature: 1,
    max_tokens: 60,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  });

  const text = response.data.choices && response.data.choices[0].text;
  const position = text?.search(":") ? text?.search(":") + 2 : 0;

  res.status(200).json({ marv: text?.substring(position) });
};

export default handler;
