const { Configuration, OpenAIApi } = require("openai");

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

exports.getRecipeRecommendation = async (ingredients) => {
  const prompt = `Suggest a recipe using: ${ingredients.join(", ")}`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
  });
  return response.data.choices[0].text;
};
