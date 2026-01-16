import { useMutation } from "@tanstack/react-query";

export function useGetAudio() {
  return useMutation({
    mutationFn: async (script: string) => {
      const response = await fetch("/api/generate-voice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ script }),
      });
      // console.log('response: ', await response.arrayBuffer());
      // const data = await response.json();
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      // console.log('audioUrl: ', audioUrl);

      return audioUrl;
    },
  });
}
