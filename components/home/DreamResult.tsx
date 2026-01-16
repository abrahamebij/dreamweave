"use client";

import { ImgData } from "@/hooks/useCreateImage";
import Img from "../ui/Img";
import { useEffect, useRef } from "react";
import dayjs from "dayjs";
import { MdVolumeUp } from "react-icons/md";
import { useGetAudio } from "@/hooks/useGetAudio";
import { FaSpinner } from "react-icons/fa";

interface DreamResultProps {
  dreamText: string;
  result: ImgData;
  onBack: () => void;
}

export const DreamResult = ({
  dreamText,
  result,
  onBack,
}: DreamResultProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { mutate, data: audioUrl, isPending } = useGetAudio();

  const handlePlay = () => {
    // If audio already exists → just play it
    if (audioUrl && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }

    // Otherwise, generate once
    mutate(result.interpretation);
  };

  useEffect(() => {
    if (audioUrl && audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    }
  }, [audioUrl]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <button
          onClick={onBack}
          className="mb-8 text-white/70 hover:text-white transition-colors flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to dreams</span>
        </button>

        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Your Dream
                </h2>
                <p className="text-white/80">{dreamText}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    AI Interpretation
                  </h3>

                  <button
                    onClick={handlePlay}
                    disabled={isPending}
                    className="text-white/80 hover:text-white disabled:opacity-50 text-xl"
                    title={isPending ? "Generating voice…" : "Play voice"}
                  >
                    {isPending ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      <MdVolumeUp />
                    )}
                  </button>

                  {/* hidden audio */}
                  <audio ref={audioRef} />
                </div>

                <p className="text-white/70">{result.interpretation}</p>
              </div>

              <div className="text-xs text-white/50 mt-auto">
                Dream Saved · {dayjs().format("MMM D, YYYY")}
              </div>
            </div>

            <div>
              <div
                style={{ backgroundColor: result.imgColor }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <Img
                  src={result.img}
                  alt="Dream visual"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
