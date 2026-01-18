"use client";
import { useState, useRef, useEffect } from "react";
import { FaMicrophone, FaSpinner, FaStop } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface HeroProps {
  dreamText: string;
  setDreamText: (text: string) => void;
  onVisualize: () => void;
  isLoading: boolean;
}

export const Hero = ({
  dreamText,
  setDreamText,
  onVisualize,
  isLoading,
}: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-10">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Describe your dream...
        </h1>

        <div className="relative mb-8">
          <textarea
            value={dreamText}
            onChange={(e) => setDreamText(e.target.value)}
            placeholder="I dreamed of floating through a cosmic garden where flowers sang melodies of starlight..."
            className="w-full h-40 p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all"
            disabled={isLoading}
          />
          <div className="absolute bottom-4 right-3">
            <RecorderButton setDreamText={setDreamText} />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity" />

          {/* {dreamText.trim() && (
            <div className="mt-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-sm text-white/70">
                ✨ Ready to visualize your dream
              </div>
            </div>
          )} */}
        </div>

        <button
          onClick={onVisualize}
          disabled={!dreamText.trim() || isLoading}
          className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] relative overflow-hidden group"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Weaving your dream...</span>
            </div>
          ) : (
            <>
              <span className="relative z-10">Visualise Dream</span>
              <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

function RecorderButton({
  setDreamText,
}: {
  setDreamText: (text: string) => void;
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [supported, setSupported] = useState(true);
  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">(
    "idle"
  );
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setSupported(false);
    }

    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const localUrl = URL.createObjectURL(blob);
        setAudioUrl(localUrl); // 🔥 THIS enables playback
        await uploadBlob(blob);
      };

      recorder.start();
      setIsRecording(true);
      setStatus("idle");
    } catch (err) {
      console.error("Mic error:", err);
      setSupported(false);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    streamRef.current?.getTracks().forEach((t) => t.stop());
    setIsRecording(false);
  };

  const uploadBlob = async (blob: Blob) => {
    try {
      setStatus("uploading");

      const fd = new FormData();
      fd.append("audio", blob, `dream-${Date.now()}.webm`);

      const res = await fetch("/api/upload-voice", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) throw new Error("Upload failed");
      const response = await res.json();
      setDreamText(response.text);

      // const { url } = await res.json();
      // setAudioUrl(url);
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!supported) {
    return (
      <button
        className="px-3 py-2 bg-white/10 text-white rounded-md text-sm"
        disabled
      >
        🎤 Unsupported
      </button>
    );
  }

  return (
    <div className="flex flex-col items-end gap-2">
      <Tooltip defaultOpen={true}>
        <TooltipTrigger asChild>
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`px-3 py-2 rounded-md text-sm transition-all ${
              isRecording ? "bg-red-500 text-white" : "bg-white/10 text-white"
            }`}
          >
            {status === "uploading" ? (
              <FaSpinner className="animate-spin" />
            ) : isRecording ? (
              <FaStop />
            ) : (
              <FaMicrophone />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Use Elevenlabs&apos; Scribe V2 model to listen to the
            interpretation.
          </p>
        </TooltipContent>
      </Tooltip>

      {/* {status === "uploading" && (
        <div className="text-xs text-white/60">Uploading...</div>
      )}
      {status === "error" && (
        <div className="text-xs text-red-400">Upload failed</div>
      )} */}

      {/* {audioUrl && <audio src={audioUrl} controls className="h-8 text-xs" />} */}
    </div>
  );
}
