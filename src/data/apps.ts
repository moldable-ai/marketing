// Shared app data used across the marketing site

export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  category: "productivity" | "developer";
  samplePrompt: string;
}

const meetingsApp: App = {
  id: "meetings",
  name: "Meetings",
  description:
    "Record and transcribe meetings in real-time with speaker detection and a rich text notes editor",
  icon: "/apps/meetings-icon.png",
  image: "/apps/meetings.png",
  category: "productivity",
  samplePrompt: `Build me a meeting recorder app that:
- Records audio from my microphone
- Transcribes in real-time using Deepgram
- Detects different speakers automatically
- Has a rich text notes pane using Moldable's editor where I can write alongside the transcript
- Exports to Markdown`,
};

const remotionApp: App = {
  id: "remotion",
  name: "Remotion",
  description:
    "Create and render programmatic videos using React and Remotion with a live preview player",
  icon: "/apps/remotion-icon.png",
  image: "/apps/remotion.png",
  category: "developer",
  samplePrompt: `Build me a video editor app using Remotion that:
- Lets me create video projects with React components
- Has a live preview player to see changes in real-time
- Supports adding text overlays, images, and animations
- Includes a timeline to adjust timing and duration
- Renders the final video to MP4 using Remotion's renderer`,
};

const scriboApp: App = {
  id: "scribo",
  name: "Scribo Languages",
  description:
    "Language learning journal with real-time AI translations and text-to-speech",
  icon: "/apps/scribo-icon.png",
  image: "/apps/scribo.png",
  category: "productivity",
  samplePrompt: `Create a language learning journal app where I can:
- Write entries in my native language
- See real-time translations using DeepL as I type
- Support multiple language pairs (like English → French, Spanish, etc.)
- Listen to the translation with text-to-speech
- Keep a history of all my journal entries`,
};

const calendarApp: App = {
  id: "calendar",
  name: "Calendar",
  description:
    "View your Google Calendar events with a clean month view and daily agenda",
  icon: "/apps/calendar-icon.png",
  image: "/apps/calendar.png",
  category: "productivity",
  samplePrompt: `Build me a calendar app that:
- Connects to my Google Calendar with OAuth
- Shows a month view with events displayed on each day
- Has a sidebar showing the agenda for the selected day
- Shows event details like time, location, and meeting links
- Lets me navigate between months easily`,
};

const notesApp: App = {
  id: "notes",
  name: "Notes",
  description:
    "A Google Keep-style notes app with masonry layout, pinning, labels, and rich text editing",
  icon: "/apps/notes-icon.png",
  image: "/apps/notes.png",
  category: "productivity",
  samplePrompt: `Create a notes app like Google Keep where I can:
- Create notes with a title and rich text content using Moldable's editor
- Pin important notes to the top
- Add labels to organize notes
- Archive and delete notes
- Search through all my notes
- Show notes in a masonry grid layout`,
};

const todoApp: App = {
  id: "todo",
  name: "Todo",
  description:
    "Simple task management with priorities, filters, and keyboard navigation",
  icon: "/apps/todo-icon.png",
  image: "/apps/todos.png",
  category: "productivity",
  samplePrompt: `Build a todo app that:
- Lets me quickly add tasks
- Supports priority levels (high, medium, low)
- Filters between all, active, and completed tasks
- Sorts by priority and completion status
- Supports keyboard navigation (arrow keys, Enter to create new)
- Stores everything locally`,
};

const timeTrackerApp: App = {
  id: "time-tracker",
  name: "Time Tracker",
  description:
    "Track time on projects with start/stop timers, weekly views, and CSV export",
  icon: "/apps/time-tracker-icon.png",
  image: "/apps/time-tracker.png",
  category: "productivity",
  samplePrompt: `Create a time tracking app where I can:
- Start and stop timers for tasks
- Organize time entries by projects with colors
- See my time in a list or weekly calendar view
- Navigate between weeks
- Export my time entries to CSV`,
};

const affirmationsApp: App = {
  id: "affirmations",
  name: "Daily Affirmations",
  description:
    "Browse affirmations by category with beautiful animations and save your favorites",
  icon: "/apps/affirmations-icon.png",
  image: "/apps/affirmations.png",
  category: "productivity",
  samplePrompt: `Build me a daily affirmations app that:
- Has categories like Inner Peace, Self Love, Gratitude, Courage, etc.
- Shows random affirmations with smooth animations
- Lets me save favorites
- Has a beautiful, calming design`,
};

const gitApp: App = {
  id: "git-flow",
  name: "Git",
  description:
    "A visual Git client for viewing changes, staging files, committing, and pushing",
  icon: "/apps/git-icon.png",
  image: "/apps/git.png",
  category: "developer",
  samplePrompt: `Create a Git GUI app that:
- Shows changed files in the working directory
- Lets me stage/unstage files with checkboxes
- Shows diffs with syntax highlighting for additions and deletions
- Lets me write commit messages and commit selected files
- Shows commit history with the ability to undo the last commit
- Supports push to remote
- Lets me switch between repositories`,
};

const codeApp: App = {
  id: "code",
  name: "Code Editor",
  description:
    "A full-featured IDE with a file tree, multi-tab editor, terminal, and live browser preview",
  icon: "/apps/code-icon.png",
  image: "/apps/code.png",
  category: "developer",
  samplePrompt: `Build me a code editor app that:
- Has a file tree to navigate projects
- Supports multiple tabs with syntax highlighting using Monaco
- Includes a command palette for quick actions
- Has an integrated browser preview for web projects
- Supports file operations like create, rename, and delete
- Persists open tabs and project state`,
};

export const apps: App[] = [
  meetingsApp,
  remotionApp,
  scriboApp,
  calendarApp,
  notesApp,
  todoApp,
  timeTrackerApp,
  affirmationsApp,
  gitApp,
  codeApp,
];

// Helper to get an app by id/slug
export function getAppById(id: string): App | undefined {
  return apps.find((app) => app.id === id);
}

// Helper to get all app ids for static generation
export function getAllAppIds(): string[] {
  return apps.map((app) => app.id);
}

// Helper to convert an App to a StarterApp format for use-cases
export function toStarterApp(
  app: App
): { name: string; description: string; icon: string } {
  return {
    name: app.name,
    description: `Already have something similar in mind? Start with our official ${app.name} app and customize it to your needs.`,
    icon: app.icon,
  };
}
