# recycle-tracker-app

Develop a cross-platform mobile app for real-time detection and tracking of recyclable containers (aluminum cans, HDPE2 plastic bottles, PET1 plastic bottles, glass bottles, milk cartons).

Key Features & Technologies:

Frontend: React Native for a smooth user experience across iOS and Android.
Backend: TensorFlow Lite for on-device machine learning, ensuring privacy and offline capabilities.
Object Detection:
Primary Choice: YOLOv5 (for its speed and accuracy).
Alternative: EfficientDet (if size/efficiency is a priority).
Both models will be pre-trained on a custom dataset and converted to TFLite.
State Management:
Primary Choice: Redux (robust for complex apps).
Alternative: Context API (simpler for smaller projects).
Camera Access:
Primary Choice: Expo Camera (easier setup and integration).
Alternative: React Native Camera (more customization if needed).
Real-time Processing:
Primary Choice: Web Workers (better for CPU-intensive tasks).
Alternative: Background Tasks (consider for non-JS logic).
Rendering: OffscreenCanvas and WebGL for high-performance visualization.
Additional Goals:

Intuitive UI: Simple controls for starting/stopping detection, toggling options.
Informative Feedback: Clear display of identified objects, counts, types, etc.
Potential for Expansion: Design with future features in mind (e.g., saving detection history, user-submitted images for retraining).

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/recycle-tracker-app.git
cd recycle-tracker-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
