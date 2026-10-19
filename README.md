# Yucheng Zhao · Research Portfolio

**Robotics · Perception · Expressive systems**

[Visit the portfolio](https://zyc-chenli.github.io) · [GitHub profile](https://github.com/zyc-chenli) · [Email](mailto:Yucheng.Zhao23@student.xjtlu.edu.cn)

A concise showcase of my research and engineering work at XJTLU and HKUST (Guangzhou).

## Selected projects

| Project | My focus | Explore |
| --- | --- | --- |
| Text-guided facial motion | Regional facial actions, strength and timing control | [Video demos](https://zyc-chenli.github.io/projects/talking-head.html) |
| Tactile perception & dexterous hand | ROS 2 sensing, CNN digit recognition and gesture control | [Hardware demo](https://zyc-chenli.github.io/projects/tactile-hand.html) · [Source](https://github.com/zyc-chenli/Linker_Hand-Pressure_sensor) |
| Biomimetic facial robot | Cheek/jaw mechanisms, skin-mould CAD and actuator communication | [Project overview](https://zyc-chenli.github.io/projects/biomimetic-face.html) |

## About this repository

This repository contains **website files and selected demo media**. Talking-head and biomimetic-face implementation code, weights, training data and design files are not included.

The website is plain HTML, CSS and a small local JavaScript file, with no build step or external tracking. Videos are H.264 MP4s with manual playback and still-image posters.

## Update the portfolio

- Edit `index.html` for the introduction, education and selected-work cards.
- Edit `projects/*.html` for the project descriptions and evaluation context.
- Put new approved demo files in `assets/media/`; include a descriptive filename, poster, caption and source credit.
- Keep unreleased code, checkpoints, original slide decks and private contact information out of this repository.
- Commit and push to `main`; GitHub Pages publishes from the repository root.

To preview locally: `python -m http.server 8000`, then open `http://localhost:8000`.

## Attribution & scope

Talking-head demos build on [KDTalker](https://github.com/chaolongy/KDTalker), using [MEAD](https://wywu.github.io/projects/MEAD/MEAD.html) identities. The facial robot adapts the [Morpheus hardware platform](https://github.com/ZZongzheng0918/Morpheus-Hardware). The dexterous hand uses the [LinkerBot ROS 2 SDK](https://github.com/linkerbotai/linker_hand_ros2_sdk). My contributions and experiment scope are identified on each project page.

Demo media are shared for research presentation. Third-party faces, datasets, platform designs and baseline methods retain their original rights and terms; this repository does not relicense them.
