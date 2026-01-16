"use server"

import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import { NextResponse } from "next/server";

const elevenlabs = new ElevenLabsClient();

export async function POST(request: Request) {
  const { script } = await request.json();

  if (!script) {
    return NextResponse.json({ error: "No script provided" }, { status: 400 });
  }

  try {
    const audioStream = await elevenlabs.textToSpeech.convert(
      "JBFqnCBsd6RMkjVDRZzb",
      {
        text: script,
        modelId: "eleven_multilingual_v2",
        outputFormat: "mp3_44100_128",
      }
    );

    const reader = audioStream.getReader();
    const chunks: Uint8Array[] = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }

    const audioBuffer = Buffer.concat(chunks);
    // console.log('audioBuffer: ', audioBuffer);

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length.toString(),
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Voice generation failed" }, { status: 500 });
  }
}