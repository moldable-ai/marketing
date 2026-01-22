// Types for use case data

export interface UseCasePrompt {
  label?: string;
  content: string;
}

export interface UseCaseStep {
  title: string;
  content: string;
  prompts?: UseCasePrompt[];
  responseTitle?: string;
  response?: string;
}

export interface StarterApp {
  name: string;
  description: string;
  icon: string;
  image?: string; // Screenshot of the app
  appId?: string; // Reference to app id in apps.ts for linking
}

export interface UseCase {
  slug: string;
  title: string;
  description: string;
  author: string;
  category: string;
  features: string[];
  image?: string;
  starterApp?: StarterApp; // Optional official app they can fork
  steps: UseCaseStep[];
  relatedSlugs?: string[];
}

const meetingNotesUseCase: UseCase = {
  slug: "build-a-meeting-notes-app",
  title: "Build a Meeting Notes App",
  description:
    "Create a custom meeting recorder with real-time transcription, speaker detection, and a notes pane — all running locally on your machine.",
  author: "Moldable",
  category: "Productivity",
  features: ["Real-time transcription", "Local-first", "Deepgram"],
  starterApp: {
    name: "Meetings",
    description:
      "Already have something similar in mind? Start with our official Meetings app and customize it to your needs.",
    icon: "/apps/meetings-icon.png",
    image: "/apps/meetings.png",
    appId: "meetings",
  },
  steps: [
    {
      title: "Describe what you need",
      content: `Most meeting tools force you into their workflow. With Moldable, you describe what you want and it builds exactly that — no compromises, no monthly fees.

Start with a simple prompt describing your ideal meeting notes app. Be specific about the features that matter to you.`,
      prompts: [
        {
          content: `Build me a meeting recorder app that:
- Records audio from my microphone
- Transcribes in real-time using Deepgram
- Detects different speakers automatically
- Has a rich text notes pane using Moldable's editor where I can write alongside the transcript
- Exports to Markdown`,
        },
      ],
    },
    {
      title: "Watch Moldable build it",
      content: `Moldable takes your description and generates a fully functional app in seconds. You'll see the code being written and the UI taking shape.

Your transcripts and notes are stored locally in your Moldable workspace.`,
      responseTitle: "From Moldable",
      response: `I'll create a meeting recorder with real-time transcription and a notes pane.

**Setting up the app...**

✓ Created data structure for meetings, transcripts, and notes
✓ Added audio recording with microphone access
✓ Connected to Deepgram for real-time speech-to-text
✓ Enabled speaker diarization to identify different speakers
✓ Built two-pane view with rich text notes editor and live transcript
✓ Added Markdown export

**Your app is ready!** You can start recording your first meeting now.`,
    },
    {
      title: "Customize and extend",
      content: `Your app isn't frozen in stone. Need a new feature? Just ask. Moldable apps evolve through conversation.`,
      prompts: [
        {
          label: "Add calendar integration",
          content:
            "Connect this to my Google Calendar so it automatically pulls meeting titles and attendees",
        },
        {
          label: "Add AI summaries",
          content:
            "After the meeting ends, generate a summary with key decisions and action items",
        },
        {
          label: "Save audio files",
          content:
            "Add an option to save the audio recording alongside the transcript",
        },
      ],
    },
    {
      title: "Tips for best results",
      content: `**Be specific about your workflow**
The more detail you provide about how you actually work, the better Moldable can tailor the app to you. Mention specific formats, integrations, or quirks you need.

**Start simple, then iterate**
You don't need to specify everything upfront. Start with the core functionality and add features as you discover what you need.

**Use Skills for heavy lifting**
Skills handle complex tasks like audio transcription, PDF processing, and API integrations. Moldable includes some built-in skills, but you can also use any agent skills available on the web.

**Keep data local by default**
Your data stays on your machine as simple JSON files unless you explicitly connect external services. This means your meeting recordings and notes are private by design.`,
    },
  ],
  relatedSlugs: ["build-a-notes-app", "build-a-time-tracker"],
};

const remotionUseCase: UseCase = {
  slug: "build-programmatic-videos-with-remotion",
  title: "Build Programmatic Videos with Remotion",
  description:
    "Create a custom video editor that uses React components to generate and render professional videos programmatically.",
  author: "Moldable",
  category: "Developer Tools",
  features: ["React-based video", "Live preview", "MP4 rendering"],
  starterApp: {
    name: "Remotion",
    description:
      "Start with our official Remotion app to build and render videos using React components.",
    icon: "/apps/remotion-icon.png",
    image: "/apps/remotion.png",
    appId: "remotion",
  },
  steps: [
    {
      title: "Describe your video app",
      content: `Programmatic video allows you to automate video creation using just words. Describe how you want to manage your video projects and what kind of content you want to generate.`,
      prompts: [
        {
          content: `Build me a video editor app using Remotion that:
- Lets me create video projects with React components
- Has a live preview player to see changes in real-time
- Supports adding text overlays, images, animations, and audio
- Renders the final video to MP4 using Remotion's renderer`,
        },
      ],
    },
    {
      title: "Watch Moldable build the studio",
      content: `Moldable sets up a full Remotion environment, including the player for real-time preview and the rendering engine for exporting files.`,
      responseTitle: "From Moldable",
      response: `I'll create a programmatic video editor using Remotion and React.

**Setting up the app...**

✓ Initialized Remotion project structure
✓ Integrated @remotion/player for real-time preview
✓ Built project management system for multiple video compositions
✓ Added dynamic text and image property controls
✓ Connected @remotion/renderer for MP4 export

**Your video studio is ready!** Start by creating your first composition.`,
    },
    {
      title: "Customize and automate",
      content: `Since your videos are just React components, you can connect them to any data source or automate the entire production pipeline.`,
      prompts: [
        {
          label: "Add data-driven overlays",
          content:
            "Connect the video components to an external API to automatically generate personalized welcome videos for new users",
        },
        {
          label: "Add audio waveforms",
          content:
            "Integrate @remotion/media to show animated audio waveforms that sync with a background track",
        },
        {
          label: "Batch rendering",
          content:
            "Add a feature to queue and render multiple versions of a video with different localized text",
        },
      ],
    },
    {
      title: "Tips for best results",
      content: `**Leverage React's ecosystem**
Use any React library for animations (like Framer Motion) or data visualization within your video compositions.

**Optimize for rendering**
Keep your compositions efficient. Remotion renders frame-by-frame, so complex components will take longer to export.

**Use the Player for fast iteration**
The live preview player is much faster than rendering. Use it to perfect your animations before starting a full render.`,
    },
  ],
  relatedSlugs: ["build-a-git-client"],
};

const scriboUseCase: UseCase = {
  slug: "build-a-language-learning-journal",
  title: "Build a Language Learning Journal",
  description:
    "Create a journal app that translates your writing in real-time as you practice a new language.",
  author: "Moldable",
  category: "Productivity",
  features: ["Real-time translation", "Text-to-speech", "DeepL"],
  starterApp: {
    name: "Scribo Languages",
    description:
      "Start with our official Scribo app for real-time translations and customize it to your learning style.",
    icon: "/apps/scribo-icon.png",
    image: "/apps/scribo.png",
    appId: "scribo",
  },
  steps: [
    {
      title: "Describe what you need",
      content: `Language learning apps often feel rigid. With Moldable, you build a journal that fits your learning style — whether you're practicing writing, expanding vocabulary, or just exploring a new language.`,
      prompts: [
        {
          content: `Create a language learning journal app where I can:
- Write entries in my native language
- See real-time translations using DeepL as I type
- Support multiple language pairs (like English → French, Spanish, etc.)
- Listen to the translation with text-to-speech
- Keep a history of all my journal entries`,
        },
      ],
    },
    {
      title: "Watch Moldable build it",
      content: `Moldable creates a split-pane editor where you write on one side and see translations appear in real-time on the other.`,
      responseTitle: "From Moldable",
      response: `I'll create a language journal with real-time translation.

**Setting up the app...**

✓ Created split-pane editor with rich text support
✓ Connected to DeepL API for translation
✓ Added language picker for source and target languages
✓ Integrated text-to-speech for pronunciation
✓ Built journal entry sidebar with history

**Your app is ready!** Select your languages and start writing.`,
    },
    {
      title: "Customize and extend",
      content: `Make it your own with features that match how you learn.`,
      prompts: [
        {
          label: "Add vocabulary tracking",
          content:
            "Let me highlight words to save them to a vocabulary list for later review",
        },
        {
          label: "Add spaced repetition",
          content:
            "Show me flashcards of saved vocabulary using spaced repetition",
        },
        {
          label: "Grammar corrections",
          content:
            "In addition to translation, show grammar corrections and suggestions for my writing",
        },
      ],
    },
    {
      title: "Tips for best results",
      content: `**Choose your translation service**
DeepL offers high-quality translations for many language pairs. You'll need to add your own API key in the app settings.

**Use the text-to-speech**
Listening to the translation helps with pronunciation and listening comprehension.

**Write regularly**
Even short entries help. The journal keeps all your history so you can see your progress over time.`,
    },
  ],
  relatedSlugs: ["build-a-notes-app"],
};

const notesUseCase: UseCase = {
  slug: "build-a-notes-app",
  title: "Build a Notes App",
  description:
    "Create a Google Keep-style notes app with masonry layout, labels, pinning, and rich text editing.",
  author: "Moldable",
  category: "Productivity",
  features: ["Rich text", "Labels", "Search"],
  starterApp: {
    name: "Notes",
    description:
      "Start with our official Notes app and customize it to your workflow.",
    icon: "/apps/notes-icon.png",
    image: "/apps/notes.png",
    appId: "notes",
  },
  steps: [
    {
      title: "Describe what you need",
      content: `Note-taking apps come in many flavors. Describe exactly how you want yours to work — from simple sticky notes to a full organizational system.`,
      prompts: [
        {
          content: `Create a notes app like Google Keep where I can:
- Create notes with a title and rich text content using Moldable's editor
- Pin important notes to the top
- Add labels to organize notes
- Archive and delete notes
- Search through all my notes
- Show notes in a masonry grid layout`,
        },
      ],
    },
    {
      title: "Watch Moldable build it",
      content: `Moldable creates a complete notes app with a responsive masonry layout, label management, and full-text search.`,
      responseTitle: "From Moldable",
      response: `I'll create a Google Keep-style notes app.

**Setting up the app...**

✓ Created masonry grid layout for notes
✓ Added rich text editor with Markdown support
✓ Built pinning system for important notes
✓ Created label management in sidebar
✓ Added archive and trash functionality
✓ Implemented full-text search

**Your app is ready!** Click "New Note" to get started.`,
    },
    {
      title: "Customize and extend",
      content: `Add features that match your note-taking style.`,
      prompts: [
        {
          label: "Add color coding",
          content:
            "Let me assign colors to notes for visual organization",
        },
        {
          label: "Add reminders",
          content:
            "Let me set reminders on notes that notify me at a specific time",
        },
        {
          label: "Add collaboration",
          content:
            "Let me share notes and collaborate with others in real-time",
        },
      ],
    },
    {
      title: "Tips for best results",
      content: `**Use labels consistently**
Create a labeling system that works for you and stick to it. Labels make it easy to find related notes.

**Pin sparingly**
Only pin notes you need quick access to. Too many pinned notes defeats the purpose.

**Use the search**
Don't worry about perfect organization — the search finds notes by title, content, and labels.`,
    },
  ],
  relatedSlugs: ["build-a-meeting-notes-app", "build-a-todo-app"],
};

const todoUseCase: UseCase = {
  slug: "build-a-todo-app",
  title: "Build a Todo App",
  description:
    "Create a task manager with priorities, filters, and keyboard navigation for staying productive.",
  author: "Moldable",
  category: "Productivity",
  features: ["Priorities", "Filters", "Keyboard navigation"],
  starterApp: {
    name: "Todo",
    description:
      "Start with our official Todo app and customize for your workflow.",
    icon: "/apps/todo-icon.png",
    image: "/apps/todos.png",
    appId: "todo",
  },
  steps: [
    {
      title: "Describe what you need",
      content: `Todo apps range from simple checklists to full project management systems. Describe the features that actually help you get things done.`,
      prompts: [
        {
          content: `Build a todo app that:
- Lets me quickly add tasks
- Supports priority levels (high, medium, low)
- Filters between all, active, and completed tasks
- Sorts by priority and completion status
- Supports keyboard navigation (arrow keys, Enter to create new)
- Stores everything locally`,
        },
      ],
    },
    {
      title: "Watch Moldable build it",
      content: `Moldable creates a focused todo app with smart sorting and keyboard shortcuts for power users.`,
      responseTitle: "From Moldable",
      response: `I'll create a todo app with priorities and keyboard navigation.

**Setting up the app...**

✓ Created task list with quick-add input
✓ Added priority levels with visual indicators
✓ Built filter tabs (all, active, completed)
✓ Implemented smart sorting by priority and status
✓ Added keyboard navigation between tasks
✓ Local storage for persistence

**Your app is ready!** Start adding tasks.`,
    },
    {
      title: "Customize and extend",
      content: `Add features to match your productivity style.`,
      prompts: [
        {
          label: "Add due dates",
          content:
            "Let me set due dates on tasks and show overdue items in red",
        },
        {
          label: "Add projects",
          content:
            "Let me organize tasks into projects or lists",
        },
        {
          label: "Add recurring tasks",
          content:
            "Support recurring tasks that automatically reappear on a schedule",
        },
      ],
    },
    {
      title: "Tips for best results",
      content: `**Use priorities intentionally**
Not everything is high priority. Reserve high for tasks that truly need immediate attention.

**Review completed tasks**
The completed filter shows what you've accomplished. Review it when you need motivation.

**Learn the keyboard shortcuts**
Arrow keys navigate, Enter creates new tasks below the current one. Your hands never leave the keyboard.`,
    },
  ],
  relatedSlugs: ["build-a-notes-app", "build-a-time-tracker"],
};

const timeTrackerUseCase: UseCase = {
  slug: "build-a-time-tracker",
  title: "Build a Time Tracker",
  description:
    "Track time on projects with start/stop timers, weekly views, and exportable reports.",
  author: "Moldable",
  category: "Productivity",
  features: ["Timers", "Projects", "CSV export"],
  starterApp: {
    name: "Time Tracker",
    description:
      "Start with our official Time Tracker app for project-based time tracking.",
    icon: "/apps/time-tracker-icon.png",
    image: "/apps/time-tracker.png",
    appId: "time-tracker",
  },
  steps: [
    {
      title: "Describe what you need",
      content: `Time tracking helps you understand where your hours go. Build a tracker that fits how you actually work — whether that's by project, client, or task.`,
      prompts: [
        {
          content: `Create a time tracking app where I can:
- Start and stop timers for tasks
- Organize time entries by projects with colors
- See my time in a list or weekly calendar view
- Navigate between weeks
- Export my time entries to CSV`,
        },
      ],
    },
    {
      title: "Watch Moldable build it",
      content: `Moldable creates a time tracker with a running timer, project management, and flexible views for reviewing your time.`,
      responseTitle: "From Moldable",
      response: `I'll create a time tracker with projects and multiple views.

**Setting up the app...**

✓ Created timer with start/stop controls
✓ Built project manager with color coding
✓ Added list view for time entries
✓ Created weekly calendar view
✓ Implemented CSV export
✓ Week navigation with today button

**Your app is ready!** Create a project and start tracking.`,
    },
    {
      title: "Customize and extend",
      content: `Add features for your specific tracking needs.`,
      prompts: [
        {
          label: "Add invoicing",
          content:
            "Let me set hourly rates per project and generate invoices from time entries",
        },
        {
          label: "Add reports",
          content:
            "Show me charts and summaries of time spent by project, day, or week",
        },
        {
          label: "Add tags",
          content:
            "Let me add tags to time entries for more detailed categorization",
        },
      ],
    },
    {
      title: "Tips for best results",
      content: `**Create projects first**
Set up your projects before you start tracking. It makes it easier to categorize time as you go.

**Review weekly**
Use the week view to see patterns in how you spend your time. Adjust your schedule accordingly.

**Export regularly**
If you bill clients or need records, export your time entries regularly. The CSV format works with any spreadsheet app.`,
    },
  ],
  relatedSlugs: ["build-a-todo-app", "build-a-meeting-notes-app"],
};

const affirmationsUseCase: UseCase = {
  slug: "build-an-affirmations-app",
  title: "Build an Affirmations App",
  description:
    "Create a daily affirmations app with categories, favorites, and beautiful animations.",
  author: "Moldable",
  category: "Wellness",
  features: ["Categories", "Favorites", "Animations"],
  starterApp: {
    name: "Daily Affirmations",
    description:
      "Start with our official Affirmations app for a calming daily practice.",
    icon: "/apps/affirmations-icon.png",
    image: "/apps/affirmations.png",
    appId: "affirmations",
  },
  steps: [
    {
      title: "Describe what you need",
      content: `Affirmations work best when they resonate with you. Build an app that delivers the right messages at the right time.`,
      prompts: [
        {
          content: `Build me a daily affirmations app that:
- Has categories like Inner Peace, Self Love, Gratitude, Courage, etc.
- Shows random affirmations with smooth animations
- Lets me save favorites
- Has a beautiful, calming design`,
        },
      ],
    },
    {
      title: "Watch Moldable build it",
      content: `Moldable creates a visually calming app with categorized affirmations and smooth transitions.`,
      responseTitle: "From Moldable",
      response: `I'll create an affirmations app with categories and animations.

**Setting up the app...**

✓ Created category grid (Inner Peace, Self Love, Gratitude, etc.)
✓ Added affirmations database with 100+ per category
✓ Built full-screen viewer with animations
✓ Added favorites with heart toggle
✓ Smooth transitions between affirmations

**Your app is ready!** Choose a category to begin.`,
    },
    {
      title: "Customize and extend",
      content: `Make the experience more personal.`,
      prompts: [
        {
          label: "Add custom affirmations",
          content:
            "Let me add my own personal affirmations to any category",
        },
        {
          label: "Add daily reminders",
          content:
            "Send me a notification each morning with a random affirmation",
        },
        {
          label: "Add streak tracking",
          content:
            "Track how many consecutive days I've viewed affirmations",
        },
      ],
    },
    {
      title: "Tips for best results",
      content: `**Pick categories that matter**
Focus on areas where you want to grow. The categories are there to help you find relevant affirmations.

**Save your favorites**
Build a personal collection of affirmations that resonate with you.

**Make it a habit**
Morning is a great time for affirmations. Start your day with a positive mindset.`,
    },
  ],
  relatedSlugs: [],
};

const gitUseCase: UseCase = {
  slug: "build-a-git-client",
  title: "Build a Git Client",
  description:
    "Create a visual Git interface for staging, committing, and viewing diffs without the command line.",
  author: "Moldable",
  category: "Developer Tools",
  features: ["Diff viewer", "Staging", "Commit history"],
  starterApp: {
    name: "Git",
    description:
      "Start with our official Git app for visual repository management.",
    icon: "/apps/git-icon.png",
    image: "/apps/git.png",
    appId: "git-flow",
  },
  steps: [
    {
      title: "Describe what you need",
      content: `Git is powerful but the command line isn't for everyone. Build a visual interface that shows exactly what's happening in your repository.`,
      prompts: [
        {
          content: `Create a Git GUI app that:
- Shows changed files in the working directory
- Lets me stage/unstage files with checkboxes
- Shows diffs with syntax highlighting for additions and deletions
- Lets me write commit messages and commit selected files
- Shows commit history with the ability to undo the last commit
- Supports push to remote
- Lets me switch between repositories`,
        },
      ],
    },
    {
      title: "Watch Moldable build it",
      content: `Moldable creates a clean Git interface with a file list, diff viewer, and commit controls.`,
      responseTitle: "From Moldable",
      response: `I'll create a Git GUI with staging and diff viewing.

**Setting up the app...**

✓ Created file list with change indicators
✓ Built checkbox staging for selective commits
✓ Added unified diff viewer with syntax highlighting
✓ Created commit form with summary and description
✓ Built commit history view
✓ Added push and undo functionality
✓ Repository picker with recent repos

**Your app is ready!** Open a repository to start.`,
    },
    {
      title: "Customize and extend",
      content: `Add Git features you use most.`,
      prompts: [
        {
          label: "Add branch creation",
          content:
            "Let me create and switch branches from the UI",
        },
        {
          label: "Add pull/fetch",
          content:
            "Add buttons to pull changes from remote and fetch updates",
        },
        {
          label: "Add merge conflict resolution",
          content:
            "Show merge conflicts in a side-by-side view and let me resolve them",
        },
      ],
    },
    {
      title: "Tips for best results",
      content: `**Review diffs before committing**
Always check the diff to make sure you're committing what you intend to commit.

**Write meaningful commit messages**
The summary should describe what changed. Use the description for context about why.

**Commit often**
Small, focused commits are easier to understand and revert if needed.`,
    },
  ],
  relatedSlugs: [],
};

const calendarUseCase: UseCase = {
  slug: "build-a-calendar-app",
  title: "Build a Calendar App",
  description:
    "Create a calendar that syncs with Google Calendar and shows your events in a clean month view.",
  author: "Moldable",
  category: "Productivity",
  features: ["Google Calendar sync", "Month view", "Event details"],
  starterApp: {
    name: "Calendar",
    description:
      "Start with our official Calendar app for Google Calendar integration.",
    icon: "/apps/calendar-icon.png",
    image: "/apps/calendar.png",
    appId: "calendar",
  },
  steps: [
    {
      title: "Describe what you need",
      content: `Calendar apps should show you what matters without clutter. Build a view that helps you plan your day at a glance.`,
      prompts: [
        {
          content: `Build me a calendar app that:
- Connects to my Google Calendar with OAuth
- Shows a month view with events displayed on each day
- Has a sidebar showing the agenda for the selected day
- Shows event details like time, location, and meeting links
- Lets me navigate between months easily`,
        },
      ],
    },
    {
      title: "Watch Moldable build it",
      content: `Moldable creates a calendar with Google Calendar sync, a responsive month grid, and a daily agenda sidebar.`,
      responseTitle: "From Moldable",
      response: `I'll create a calendar app with Google Calendar sync.

**Setting up the app...**

✓ Set up Google OAuth authentication
✓ Created month view grid with navigation
✓ Built daily agenda sidebar
✓ Added event popovers with details
✓ Color-coded events from calendar
✓ Meeting link integration

**Your app is ready!** Connect your Google account to see your events.`,
    },
    {
      title: "Customize and extend",
      content: `Add features for how you use your calendar.`,
      prompts: [
        {
          label: "Add event creation",
          content:
            "Let me create new events directly from the calendar view",
        },
        {
          label: "Add week view",
          content:
            "Add a week view that shows hourly time slots",
        },
        {
          label: "Add multiple calendars",
          content:
            "Let me toggle different calendars on and off",
        },
      ],
    },
    {
      title: "Tips for best results",
      content: `**Set up Google Calendar API**
You'll need Google Cloud credentials for the OAuth flow. The app guides you through setup.

**Use the sidebar**
Click any day to see that day's agenda in detail. It's faster than opening each event.

**Your data stays local**
Events are fetched from Google but displayed locally. Nothing is stored on external servers.`,
    },
  ],
  relatedSlugs: ["build-a-meeting-notes-app", "build-a-time-tracker"],
};

// Use cases data
export const useCases: UseCase[] = [
  meetingNotesUseCase,
  remotionUseCase,
  scriboUseCase,
  calendarUseCase,
  notesUseCase,
  todoUseCase,
  timeTrackerUseCase,
  affirmationsUseCase,
  gitUseCase,
];

// Helper to get a use case by slug
export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((uc) => uc.slug === slug);
}

// Helper to get all slugs for static generation
export function getAllUseCaseSlugs(): string[] {
  return useCases.map((uc) => uc.slug);
}
