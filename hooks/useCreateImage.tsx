"use client";
import { useMutation } from "@tanstack/react-query";

type ImgResponse = {
  success: boolean;
  msg: string;
  data: ImgData;
};

export type ImgData = {
  tags: string;
  interpretation: string;
  img: string;
  imgColor: string;
};
export function useCreateImage() {
  return useMutation({
    mutationFn: async ({ prompt }: { prompt: string }) => {
      const response = await fetch("/api/create-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const responseData: ImgResponse = await response.json();
      if (!response.ok) {
        throw new Error("Failed to create image");
      }

      return responseData.data;
      // return response.results[0].urls.regular;
    },
  });
}
