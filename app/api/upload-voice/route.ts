// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use server"
import { NextResponse } from 'next/server';
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
// import fs from "node:fs";
// import path from "node:path";

const elevenlabs = new ElevenLabsClient();

// export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get('audio') as File | null;
    if (!file) {
      return NextResponse.json({ error: 'No audio file' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const audioBlob = new Blob([buffer], { type: "audio/webm" });

    const transcription = await elevenlabs.speechToText.convert({
      file: audioBlob,
      modelId: "scribe_v2", // Model to use
      // tagAudioEvents: true, // Tag audio events like laughter, applause, etc.
      // languageCode: "eng", // Language of the audio file. If set to null, the model will detect the language automatically.
      // diarize: true, // Whether to annotate who is speaking
    });

    // const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    // fs.mkdirSync(uploadsDir, { recursive: true });

    // const filename = `${Date.now()}-${file.name || 'recording.webm'}`;
    // const filePath = path.join(uploadsDir, filename);
    // fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ ok: true, text: transcription.text });
    // return NextResponse.json({ ok: true, text: "Transcription not implemented" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
