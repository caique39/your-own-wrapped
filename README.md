# Wrapped Creator

A React-based web application that allows you to create your own "Wrapped" experience, similar to Spotify's year-end review. Create engaging, interactive slideshows with various types of content displays including statistics, charts, lists, and media.

## 🚀 Live Demo

Check out the live demo at: [Wrapped Demo](https://your-own-wrapped.netlify.app/)

## 🎯 Features

- Interactive story-like interface with smooth transitions
- Progress bar for each slide with auto-advance
- Touch and swipe gesture support
- Keyboard navigation (arrow keys)
- Pause on interaction (hover/touch)
- Responsive design
- Customizable theme and timing
- Multiple slide types for diverse content presentation

## 🎨 Available Slide Types

1. **Text (`type: "text"`)**
   - Basic text slide with title and content
   - Properties:
     - `title`: Slide heading
     - `content`: Main text content

2. **Stat (`type: "stat"`)**
   - Displays large numbers/statistics
   - Properties:
     - `title`: Slide heading
     - `content`: The statistic/number to display
     - `subtext`: Additional context text
     - `showDaysCount`: Boolean to show days elapsed
     - `showStartDate`: Boolean to show start date

3. **List (`type: "list"`)**
   - Scrollable list of items
   - Properties:
     - `title`: Slide heading
     - `items`: Array of objects with `name` and `count` properties
     - `subtext`: Optional footer text

4. **Pie Chart (`type: "pie"`)**
   - Animated pie chart visualization
   - Properties:
     - `title`: Slide heading
     - `subtext`: Chart description
     - `items`: Array of objects with `name` and `value` properties

5. **Full Cover (`type: "full-cover"`)**
   - Full-screen background image with overlay text
   - Properties:
     - `title`: Slide heading
     - `content`: Main text content
     - `image`: URL of background image

6. **Photo (`type: "photo"`)**
   - Image-focused slide with text
   - Properties:
     - `title`: Slide heading
     - `image`: URL of the image
     - `content`: Caption or description

7. **Video (`type: "video"`)**
   - Video player with controls
   - Properties:
     - `title`: Slide heading
     - `videoUrl`: URL of the video file
     - `content`: Video description

Each slide type automatically inherits the theme settings and transitions defined in your story configuration.

## 🎨 Customization
- Modify theme colors in `storyConfig.js`
- Adjust slide duration
- Customize slide transitions using Framer Motion
- Add new slide types by extending the components

## 📦 Dependencies
- React 18.3+
- Emotion (styled components)
- Framer Motion (animations)
- Recharts (data visualization)

## 🤝 Contributing
Feel free to contribute by:
- Creating new slide types
- Improving animations
- Adding new features
- Fixing bugs

## 📄 License
MIT License
