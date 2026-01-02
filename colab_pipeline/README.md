# AI Shorts Factory (Colab Pipeline)

This is a standalone Google Colab notebook designed to generate high-retention YouTube Shorts using purely free tools and APIs.

## Features
*   **AI Script Intelligence**: Uses free LLMs (via Groq/HuggingFace) to enhance scripts with hooks, curiosity gaps, and retention mechanics.
*   **High-Quality Voice**: Uses `edge-tts` for neural, natural-sounding voiceovers.
*   **Dynamic Visuals**: Fetches stock footage from Pexels/Pixabay based on script keywords.
*   **Karaoke Captions**: Auto-generates word-level animated subtitles.
*   **Editor**: Stitches everything together using MoviePy.

## Prerequisites
To run this notebook, you will need the following **Free** API keys:
1.  **Pexels API Key**: [Get it here](https://www.pexels.com/api/) (For Stock Footage)
2.  **Groq API Key**: [Get it here](https://console.groq.com/keys) (For fast, free LLM inference) or a HuggingFace Token.

## How to Use
1.  Upload the `ai_shorts_factory.ipynb` file to [Google Colab](https://colab.research.google.com/).
2.  Run the first cell to install dependencies.
3.  Enter your API keys in the configuration form.
4.  Enter your topic or base script.
5.  Run the pipeline and download your video!

## Directory Structure
*   `ai_shorts_factory.ipynb`: The main notebook.
