const getTodayDate = () => {
  const today = new Date();
  const brazilTime = new Date(today.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
  return brazilTime.toISOString().split('T')[0];
};

export const storyConfig = {
  startDate: '2024-01-01',
  get endDate() {
    return getTodayDate();
  },

  slides: [
    {
      id: 1,
      title: "Basic Text Card",
      type: "text",
      content: "This is a simple text card with title and content"
    },
    {
      id: 2,
      title: "Days Counter Card",
      type: "stat",
      showDaysCount: true,
      showStartDate: true
    },
    {
      id: 3,
      title: "Stat Card",
      type: "stat",
      content: "1,234",
      subtext: "This is a stat card with a number ✨"
    },
    {
      id: 4,
      title: "List Card",
      type: "list",
      items: [
        { name: "Item 1", count: "Detail 1" },
        { name: "Item 2", count: "Detail 2" },
        { name: "Item 3", count: "Detail 3" }
      ],
      subtext: "This is a list card"
    },
    {
      id: 5,
      title: "Pie Chart Card",
      type: "pie",
      subtext: "Distribution Example 📊",
      items: [
        { name: 'Category A', value: 400 },
        { name: 'Category B', value: 300 },
        { name: 'Category C', value: 200 }
      ]
    },
    {
      id: 6,
      title: "Full Cover Card",
      type: "full-cover",
      image: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
      content: "This is a full cover card with background image"
    },
    {
      id: 7,
      title: "Photo Card",
      type: "photo",
      image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
      content: "This is a photo card with an image"
    },
    {
      id: 8,
      title: "Video Card",
      type: "video",
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
      content: "This is a video card"
    }
  ],

  theme: {
    colors: {
      primary: '#d44f8c',
      secondary: '#ff8fb2',
      tertiary: '#ffb3c6',
      quaternary: '#ffd7e0',
      background: '#FFF0F3',
      text: '#333333'
    },
    timing: {
      slideDuration: 5000
    }
  }
};

export const calculateDaysBetween = (startDate, endDate) => {
  const start = new Date(startDate + 'T00:00:00-03:00');
  const end = new Date(endDate + 'T00:00:00-03:00');
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString + 'T00:00:00-03:00');

  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo'
  });
};