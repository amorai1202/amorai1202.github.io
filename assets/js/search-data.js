// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-i-class-fas-fa-home-i",
    title: "<i class='fas fa-home'></i>",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "a little bit about me",
          section: "Navigation",
          handler: () => {
            window.location.href = "/profiles/";
          },
        },{id: "nav-research",
          title: "research",
          description: "academic work",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "sports data playground",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "useful links &amp; notes",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "dropdown-photography",
              title: "photography",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/photography/";
              },
            },{id: "dropdown-writing",
              title: "writing",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://substack.com/@amorai/notes";
              },
            },{id: "dropdown-type-2-fun",
              title: "type 2 fun",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://strava.app.link/Y2FltUz2Y3b";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-nba-late-game-strategies-to-foul-or-not-to-foul",
          title: 'NBA Late-Game Strategies: To Foul Or Not To Foul',
          description: "with Minnie Ren &amp; Yifan Sun",
          section: "Projects",handler: () => {
              window.location.href = "/projects/late_game_foul/";
            },},{id: "projects-analyzing-mlb-2-pitch-sequences",
          title: 'Analyzing MLB 2-Pitch Sequences',
          description: "Does Swinging on the First Pitch Lead to Better Decisions?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/swing_first/";
            },},{id: "projects-developing-wnba-and-nba-archetypes-and-playstyle-comparisons",
          title: 'Developing WNBA and NBA Archetypes and Playstyle Comparisons',
          description: "with Mykalyster Homberg &amp; Andrew Noecker",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wnba_archetypes/";
            },},{id: "projects-wnba-snowflake-shot-charts",
          title: 'WNBA Snowflake Shot Charts',
          description: "coming soon!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wnba_snowflake/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
