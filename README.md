# Pharmacology Basics for Physical Therapy

## Overview
This project is a small HTML, CSS, and JavaScript learning activity for DPT 6221 Clinical Medicine II. It introduces common medication categories that physical therapy students are likely to encounter in clinical settings and reinforces core ideas with a compact, PT-focused quiz.

The activity is designed to run as a standalone web page or inside a SCORM 1.2-compatible learning management system.

## Learning Objectives
- Identify basic medication categories commonly encountered in physical therapy practice.
- Describe the common purpose of each medication category in simple, introductory language.
- Recognize PT-relevant considerations such as dizziness, sedation, bleeding risk, exercise tolerance, and medication timing.
- Apply basic pharmacology concepts through original, concept-based quiz questions.

## File Structure
- `index.html`: Main dashboard structure with the selector rail, topic display area, and sticky quiz panel.
- `styles.css`: Baylor-inspired visual styling, dashboard layout, responsive behavior, and focus states.
- `script.js`: Topic-switching behavior, content rendering, one-question-at-a-time quiz flow, retry logic, and LMS completion flow.
- `scorm.js`: Basic SCORM 1.2 detection and communication helper.
- `imsmanifest.xml`: SCORM 1.2 manifest for packaging and LMS import.
- `README.md`: Project documentation and usage notes.

## Local Testing Instructions
1. Open `index.html` directly in a browser for a quick local review.
2. For a more browser-like test environment, serve the folder with a lightweight local server.
3. Verify that the topic dropdown and topic buttons update the center reference panel, quiz feedback appears immediately, retrying missed questions works, and the full reset button clears quiz progress.
4. When testing locally without an LMS, the activity should still function normally because the SCORM helper fails gracefully when no LMS API is present.

## SCORM Packaging Instructions
1. Place `index.html`, `styles.css`, `script.js`, `scorm.js`, `imsmanifest.xml`, and any optional support files in the root of a package folder.
2. Zip the contents of that folder, not the folder itself, so `imsmanifest.xml` remains at the top level of the `.zip`.
3. Upload the `.zip` package to a SCORM 1.2-compatible LMS.
4. On launch, the activity attempts to initialize the LMS API, sets `cmi.core.lesson_status` to `incomplete`, and stores score updates using `cmi.core.score.raw`.
5. When the learner reaches the end of the quiz flow, the activity sets `cmi.core.lesson_status` to `completed`. The score can continue to improve if the learner retries missed questions.

## GitHub Documentation Notes
- This project is fully static and can be hosted with GitHub Pages.
- SCORM communication will not activate on GitHub Pages because a standard web host does not expose an LMS API object.
- If sharing on GitHub, describe the SCORM behavior in the repository so instructors understand that completion tracking appears only inside an LMS.
- Screenshots or a short screen recording can help document the learner experience for reviewers.

## Accessibility Notes
- The activity uses semantic headings, buttons, fieldsets, legends, and labeled radio inputs.
- A skip link is included for keyboard users.
- Focus states are intentionally visible and use strong contrast.
- The topic selector uses a labeled dropdown plus keyboard-accessible topic buttons for quick navigation.
- Quiz feedback is announced through live regions and remains visible after each answer.
- The layout is responsive for smaller screens and stacks the dashboard sections vertically when space is limited.
