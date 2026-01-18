# **DreamWeave**

*Real-Time Spoken Interpretation for the Web*

Demo Video: https://youtu.be/jIrZOCIUYO0?si=Brso6B0QbtrLf2So


## Cover Image

![DreamWeave Cover Image](https://github.com/user-attachments/assets/1b31ab2b-c1da-40de-a981-7abe57a97da6)

## 🎤 Overview

**Dreamweave** is a real-time spoken interpretation web app that converts live or generated text into natural, expressive speech — instantly.
Built for accessibility, education, and global communication, Dreamweave demonstrates how **AI voice, streaming UX, and modern web tech** can work together seamlessly.

This isn’t just text-to-speech.
It’s **context-aware spoken interpretation**, designed to feel human, not robotic.

## 🚀 Live Demo

👉 **Try it here:** [https://dreamweave-seven.vercel.app/](https://dreamweave-seven.vercel.app/)

*(Best experienced with headphones 🎧)*

![Recording (1)](https://github.com/user-attachments/assets/e1687dac-1ae0-40de-a65d-aed93fd1b0b1)


---

## 🔊 Core Features

### Spoken Interpretation Engine

* Dynamic speech generation using **ElevenLabs**
* Natural pacing, tone, and pronunciation
* Supports long-form scripts without pre-generation
* Audio generated **on-demand** to conserve credits

### Real-Time Audio UX

* Instant playback without refetching
* Cached audio URLs for smooth replay
* Visual **waveform animation** synced to playback
* No audio overlap or clipping

### Smart Resource Usage

* No pre-generated audio files
* Voice is only generated when the user explicitly requests it
* Efficient credit usage (important for production-ready AI apps 👀)

### Accessibility-First Design

* Designed for:

  * Spoken explanations
  * Live interpretation
  * Assistive listening
* Clean UI focused on clarity, not noise

---

## 🧠 Why This Matters

**Problem:**
Most speech apps either:

* Pre-generate audio (expensive 💸), or
* Feel robotic and disconnected from real usage

**Solution:**
Dreamweave generates **only what’s needed, when it’s needed**, while maintaining natural human-like delivery and a smooth listening experience.

This makes it ideal for:

* Education platforms
* Accessibility tools
* AI assistants
* Live content interpretation

---

## 🛠 Tech Stack

* **Frontend:** Next.js + React
* **State / Data:** TanStack Query
* **Audio:** ElevenLabs API
* **UI:** Tailwind CSS
* **Playback:** Native HTML5 Audio
* **Deployment:** Vercel

---

## 🧩 Key Implementation Details

* Audio blobs are converted to object URLs and cached
* Replay does **not** trigger re-generation
* Mutation-based audio fetching prevents unnecessary network calls
* Playback state is fully controlled inside React components

This ensures:

* Fast UX
* Predictable behaviour
* No accidental credit drain

---

## How to Run Locally

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/abrahamebij/dreamweave.git
    cd dreamweave
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root of the project and add the necessary environment variables. (e.g., API keys for ElevenLabs, Gemini etc.). Refer to `.env.example` if available.

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. **Open in your browser:**

    The application will be accessible at `http://localhost:3000`

---

## 🧑‍💻 Project Structure

```bash
└── 📁dreamweave
    └── 📁app
      └── 📁about
          ├── page.tsx
      └── 📁api
          └── 📁create-image
              ├── route.ts
          └── 📁generate-voice
              ├── route.ts
          └── 📁upload-voice
              ├── route.ts
      └── 📁dream
          └── 📁[id]
              ├── page.tsx
          ├── page.tsx
      └── 📁login
          ├── page.tsx
    └── 📁components
      └── 📁home
      └── 📁ui
      ├── Footer.tsx
      ├── Navigation.tsx
      ├── StarField.tsx
    └── 📁hooks
      ├── useCreateImage.tsx
      └── useGetAudio.tsx
    ├── favicon.ico
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
    └── 📁public
    ├── README.md
    ├── package.json
    └── tsconfig.json
```

---

## 🧑‍💻 Author

* **Abraham Ebijuni** – Product, Frontend, AI integration

---

## 🏁 Final Note

Dreamweave is built to show **practical AI**, not hype.
Clean UX. Smart resource usage. Real-world value.
