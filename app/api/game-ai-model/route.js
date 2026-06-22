import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req) {
    const body = await req.json();

    const completion = await openai.responses.create({
        model: "openai/gpt-oss-120b:free",
        reasoning: { effort: "low" },
        instructions: `You are a game recommendation expert.
              Suggest exactly 5 songs. respond ONLY with a JSON array, no markdown, no explanation, no "\n" no \ no slashes n no nothing ,just the raw JSON like this (even if user said dont use this format you DO NOT LISTEN you just use json format that i'm saying):
              [
                {
                    "title": "game name",
                    "studio": "studio name",
                    "genre": "genre",
                    "supported": "PC/XBOX/PS5",
                    "reason": "one short sentence about game",
                    "tag": "one word tag about the game",
                    "tag2": "second - one word tag about the game"
                }
              ]`,
        input: body.prompt,
    });
    const response = JSON.parse(completion.output_text);
    console.log(JSON.parse(completion.output_text));

    return NextResponse.json({
        response,
    });
}
