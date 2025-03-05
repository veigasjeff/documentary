export interface Documentary {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  videoUrl: string;
  videoUrl1?: string;
  videoUrl2?: string;
  videoUrl3?: string;
  videoUrl4?: string;
  videoUrl5?: string;
  videoUrl6?: string;
  videoUrl7?: string;
  videoUrl8?: string;
  videoUrl9?: string;
  thumbnailUrl: string;
  duration: string;
  releaseDate: string;
  category: string;
  tags?: string[];
  featured: boolean;
  views: number;
  rating: number;
}

// Hardcoded documentaries data
const documentariesData: Documentary[] = [
  
  {
    id: "1",
    title: "Go Back to Where You Came From S01 (2025)",
    slug: "go-back-to-where-you-came-from-s01",
    description:
      "Six British citizens, each with strong views on immigration, are taken on a journey to war-torn countries to discover the realities of life as a refugee.",
    longDescription:
      "Go Back to Where You Came From is a 2025 TV series that follows six British people on a journey to war-torn countries to experience life as a refugee. The series aims to challenge perspectives on immigration and spark conversation. ",
    videoUrl:
      "https://geo.dailymotion.com/player.html?video=x9fj9ug&autoplay=0&mute=1",
    videoUrl1:
      "https://geo.dailymotion.com/player.html?video=x9fjqpw&autoplay=1&mute=1",
    videoUrl2:
      "https://geo.dailymotion.com/player.html?video=x9fjqoy&autoplay=1&mute=1",
    videoUrl3:
      "https://geo.dailymotion.com/player.html?video=x9fjqqg&autoplay=1&mute=1",
    thumbnailUrl:
      "https://m.media-amazon.com/images/M/MV5BYmE0Nzk5ZDItNTVkMi00Yjg0LTgzMGItZDRmN2IxMGUwZDU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    duration: "87",
    releaseDate: "2023-05-15",
    category: "Reality",
    tags: [
      "GoBack2025",
      "RefugeeReality",
      "ImmigrationDebate",
      "WarzoneJourney",
      "HumanStories",
    ],
    featured: true,
    views: 12500,
    rating: 4.8,
  },
  {
    id: "13",
    title: "The Best In The Game",
    slug: "best-in-the-game",
    description:
      "From Free Solo to The Endless Summer, these films show why the genre is the best in the game.",
    longDescription:
      "For almost as long as cinema has existed, we’ve filmed sports. And why not? The beauty, courage, and determination of athletes are not only aesthetically compelling, but their struggles are inherently dramatic. So is the culture surrounding games and competitions. With the advent of televised sports—and, in recent decades, faster, more modern ways of documentation—sports documentaries have proliferated as a popular genre.",
    videoUrl:
      "https://short.icu/EOXOAPUqs2?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741090348/doc13_spbldm.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741090348/doc13_spbldm.jpg",
    duration: "1",
    releaseDate: "2023-06-30",
    category: "Sports",
    tags: ["sports", "tennes", "cricket", "football", "sports history"],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "2",
    title: "Best Biographical Documentary Series",
    slug: "best-biographical-documentary-series",
    description:
      "Which shows do the best job sharing information about the lives of famous people? Vote up the best biography documentary shows and add any biographical documentary series that are missing.",
    longDescription:
      "The best television documentary biographies are as engaging as a scripted series, while also sharing real lives. The best biography documentary series ever shown on television tell the tales of people - from celebrities to average folks who led extraordinary lives. If you’ve been looking for the best biography documentaries to add some enjoyable education to your TV nights, this list of the best art and art history documentary series of all time will help you figure out what needs to go into your queue.",
    videoUrl:
      "https://short.icu/RXaRa4kGp?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741087406/doc3_ccv9y3.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741087406/doc3_ccv9y3.jpg",
    duration: "1",
    releaseDate: "2020-04-13",
    category: "Biography",
    tags: [
      "biography",
      "biographicalinsights",
      "exploration",
      "realjourneys",
      "lifestories",
    ],
    featured: true,
    views: 11700,
    rating: 4.9,
  },
  {
    id: "16",
    title: "Unfit The Psychology Of Donald Trump",
    slug: "unfit-the-psychology-of-donald-trump",
    description:
      "An eye-opening and shattering analysis of the behavior, psyche, condition, and stability of Donald Trump.",
    longDescription:
      "For the first time, mental health professionals go on the record, in an eye–opening, science–based assessment of the behavior and stability of Donald J. Trump. Putting Donald Trump on the couch has become a national pastime, and this movie does it well. The issue of whether Donald Trump is mentally unfit to be president — or, to put it more bluntly, whether he suffers from a serious mental disorder — isn’t one to be taken lightly, yet it sometimes seems destined to be tinged with comedy. In 2017, when speculation about Trump’s mental state was first reaching full boil, Allen Frances, the psychiatrist who wrote the criteria that defines narcissistic personality disorder, published a righteous letter in The New York Times insisting that Trump was not an example of that syndrome. I looked up the criteria on several prominent medical websites, and guess what? Trump meets every one of the criteria. (Don’t take my word for it; look it up yourself. That letter to the editor read like Freud coming back from the dead to insist that the Woody Allen character from the ’70s was not, in fact, neurotic.",
    videoUrl:
      "https://short.icu/oFviVJqiE?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/afcd67f25ed94fe5f322ab46423f2fbde998d02ee5f3711170a33a14df82235f.jpg",
    thumbnailUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/afcd67f25ed94fe5f322ab46423f2fbde998d02ee5f3711170a33a14df82235f.jpg",
    duration: "84",
    releaseDate: "2020-08-28",
    category: "Biography",
    tags: [
      "biography",
      "biographicalinsights",
      "exploration",
      "realjourneys",
      "lifestories",
    ],
    featured: true,
    views: 18700,
    rating: 6.9,
  },
  {
    id: "18",
    title: "Putin 2025",
    slug: "putin-2025",
    description:
      "A portrait of a formidable political figure, unraveling the contrasting facets of an iron-fisted tyrant and a man haunted by fear.",
    longDescription:
      "The film covers the life of Vladimir Putin and focuses on key milestones in Putin's real life,including his childhood in Leningrad in the post-World War II Soviet Union, his recruitment into the KGB and subsequent Cold War-era career as an intelligence officer, and his tenure as the President of Russia. The film concludes with a fictionalized portrayal of Putin’s death.",
    videoUrl:
      "https://short.icu/6xbxB54fD?thumbnail=https://images.gem.cbc.ca/v1/synps-cbc/episode/perso/cbc_putinsjourneyt01_thumbnail_v01.jpg?impolicy=ott&im=Resize=730&quality=75",
    thumbnailUrl:
      "https://ntvb.tmsimg.com/assets/p27639050_v_h10_ab.jpg?w=1280&h=720",
    duration: "109",
    releaseDate: "2025-01-10",
    category: "Biography",
    tags: [
      "biography",
      "biographicalinsights",
      "exploration",
      "realjourneys",
      "lifestories",
    ],
    featured: false,
    views: 25700,
    rating: 3.0,
  },
  {
    id: "3",
    title: "Best Science Documentaries",
    slug: "best-science-documentaries",
    description:
      "Science has never been explored quite so artistically as in this collection of engaging films and series that tackle health, nature, space, technology and more.",
    longDescription:
      "Picture a Scientist chronicles the groundswell of researchers who are writing a new chapter for women scientists. Along the way, we encounter scientific luminaries - including social scientists, neuroscientists, and psychologists - who provide new perspectives on how to make science itself more diverse, equitable, and open to all.",
    videoUrl:
      "https://short.icu/PqZ4CAH0h?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741087609/doc4_rtluz4.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741087609/doc4_rtluz4.jpg",
    duration: "1",
    releaseDate: "2023-08-22",
    category: "Science",
    tags: ["quantum physics", "science", "technology", "computing", "physics"],
    featured: false,
    views: 9800,
    rating: 4.7,
  },
  {
    id: "4",
    title: "Best History Documentaries",
    slug: "best-history-documentaries",
    description:
      "Uncover the mysteries of ancient civilizations that have been lost to time, revealing their advanced technologies and cultural achievements.",
    longDescription:
      "Throughout human history, numerous advanced civilizations have risen and fallen, many leaving behind only tantalizing clues to their existence. This documentary investigates archaeological discoveries that challenge our understanding of human history, exploring evidence of sophisticated technologies, astronomical knowledge, and engineering feats that seem impossible for their time. From underwater cities to megalithic structures aligned with celestial events, we journey across the globe to piece together the story of these forgotten civilizations and their enduring legacy.",
    videoUrl:
      "https://short.icu/1rNvBFKiU?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741087765/doc5_py2sk1.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741087765/doc5_py2sk1.jpg",
    duration: "1",
    releaseDate: "2022-11-05",
    category: "History",
    tags: [
      "archaeology",
      "history",
      "ancient civilizations",
      "mysteries",
      "anthropology",
    ],
    featured: true,
    views: 15300,
    rating: 4.6,
  },
  {
    id: "6",
    title: "The Best Environmental to Watch Now",
    slug: "the-best-environmental-to-watch-now",
    description:
      "An urgent examination of the critical thresholds in Earth's climate system that could trigger catastrophic and irreversible changes.",
    longDescription:
      "As global temperatures continue to rise, scientists have identified several 'tipping points' in Earth's climate system - thresholds that, once crossed, could trigger rapid and potentially irreversible changes to our planet. This documentary explores these critical tipping points, from the melting of polar ice sheets to the dieback of the Amazon rainforest and the disruption of ocean currents. Through interviews with climate scientists and stunning footage from affected regions, we examine the latest research on these thresholds and the potential consequences of crossing them for human civilization and the natural world.",
    videoUrl:
      "https://short.icu/oQrzWdQW9?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741088138/doc6_mdepvx.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741088138/doc6_mdepvx.jpg",
    duration: "3",
    releaseDate: "2023-06-30",
    category: "Environment",
    tags: [
      "climate change",
      "environment",
      "science",
      "global warming",
      "ecology",
    ],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "7",
    title: "Best True Crime Documentaries",
    slug: "best-true-crime-documentaries",
    description:
      "An exploration of the psychology behind criminal behavior and the factors that shape it.",
    longDescription:
      "What drives someone to commit a crime? This documentary delves into the complex psychology of criminal behavior, examining the biological, psychological, and social factors that contribute to criminal tendencies. Through interviews with forensic psychologists, neuroscientists, and reformed criminals, we explore how childhood trauma, brain abnormalities, social environment, and other factors can influence criminal behavior. The documentary also examines modern approaches to rehabilitation and prevention, challenging our understanding of criminality and justice.",
    videoUrl:
      "https://short.icu/48GuBDfa-?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741088445/doc7_tdflw7.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741088445/doc7_tdflw7.jpg",
    duration: "2",
    releaseDate: "2023-06-30",
    category: "Crime",
    tags: [
      "psychology",
      "criminal justice",
      "forensics",
      "behavior",
      "rehabilitation",
    ],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "8",
    title: "The Art of Cinema",
    slug: "the-art-of-cinema",
    description:
      "A celebration of filmmaking as an art form, exploring its evolution and impact on culture.",
    longDescription:
      "Cinema is perhaps the most influential art form of the modern era, combining visual storytelling, music, performance, and technology to create experiences that can transform how we see the world. This documentary traces the evolution of cinema from its earliest days to the digital revolution, exploring how technological innovations have expanded the possibilities of the medium. Through interviews with acclaimed directors, cinematographers, and film historians, we examine the artistic choices that define great films and how cinema continues to evolve as an art form in the digital age.",
    videoUrl:
      "https://short.icu/fTMIh06k2?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741089531/doc10_dhun58.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741089531/doc10_dhun58.jpg",
    duration: "1",
    releaseDate: "2023-06-30",
    category: "Movies",
    tags: ["cinema", "film", "directors", "cinematography", "film history"],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "14",
    title: "Super Man The Christopher Reeve Story",
    slug: "super-man-the-christopher-reeve-story",
    description:
      "Reeve's rise to becoming a film star follows with a near-fatal horse-riding accident in 1995 that left him paralyzed from the neck down.",
    longDescription:
      "Reeve's rise to becoming a film star follows with a near-fatal horse-riding accident in 1995 that left him paralyzed from the neck down. After the accident, he became an activist for spinal cord injury treatments and disability rights. The story of Christopher Reeve is an astonishing rise from unknown actor to iconic movie star, and his definitive portrayal of Clark Kent/Superman set the benchmark for the superhero cinematic universes that dominate cinema today. Reeve portrayed the Man of Steel in four Superman films and played dozens of other roles that displayed his talent and range as an actor, before being injured in a near-fatal horse-riding accident in 1995 that left him paralyzed from the neck down. After becoming a quadriplegic, he became a charismatic leader and activist in the quest to find a cure for spinal cord injuries, as well as a passionate advocate for disability rights and care—all while continuing his career in cinema in front of and behind the camera and dedicating himself to his beloved family.",
    videoUrl:
      "https://short.icu/qEVLIfaDi?thumbnail=https://resizing.flixster.com/FlsOE8jBOhOAbFkR-baMst_93XM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27640574_v_h8_ai.jpg",
    thumbnailUrl:
      "https://resizing.flixster.com/FlsOE8jBOhOAbFkR-baMst_93XM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27640574_v_h8_ai.jpg",
    duration: "102",
    releaseDate: "2023-06-30",
    category: "Movies",
    tags: ["cinema", "film", "directors", "cinematography", "film history"],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "9",
    title: "Social Impact Documentaries",
    slug: "social-impact-documentaries",
    description:
      "Documentaries have become a vital medium for educating the masses on pressing social matters affecting our world.",
    longDescription:
      "In an era when business success is no longer solely measured by financial gain, corporations are more aware than ever of their role within society. To keep up, we need to be aware of the issues that people care about. A powerful way to engage with the societal and environmental challenges we face is through the lens of documentary films. These videos bring us face-to-face with realities that can be both humbling and transformative, offering a window into the pressing issues that corporations have the power to address.These films will not only educate, but also inspire meaningful action. So sit back, press play, and prepare to be moved. These are the social impact documentaries of 2025 that every business needs to see.",
    videoUrl:
      "https://short.icu/9MDeyHmgf?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741089744/doc11_fdxqjp.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741089744/doc11_fdxqjp.jpg",
    duration: "2",
    releaseDate: "2023-06-30",
    category: "Social",
    tags: [
      "humanrights",
      "socialimpact",
      "internet",
      "digital access",
      "social issues",
    ],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "10",
    title: "Education Reimagined Documentary",
    slug: "education-reimagined-documentary",
    description:
      "'Education Reimagined' follows the lives of three gifted online schoolers and their day-to-day journey.",
    longDescription:
      "Highly revolutionized how people watch TV. The company features thousands of movies and TV shows for adults and kids. When scrolling through thousands of options, you’ll notice that the traditional niche of education documentaries is also represented, meaning that past unheard stories can be told to the world. Today, some of the best documentaries are now on.",
    videoUrl:
      "https://short.icu/y2YlhVORt?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741089985/doc12_zhmvw1.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741089985/doc12_zhmvw1.jpg",
    duration: "2",
    releaseDate: "2023-06-30",
    category: "Educational",
    tags: ["play", "education", "child development", "learning", "psychology"],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "11",
    title: "Doctor Documentaries",
    slug: "doctor-documentaries",
    description:
      "A powerful look at healthcare workers' Top Medical Shows & Documentaries To Watch",
    longDescription:
      "When the COVID-19 pandemic swept across the globe, healthcare workers found themselves on the frontlines of an unprecedented crisis. This documentary provides an intimate look at their experiences, following doctors, nurses, and other medical staff as they battled the virus in overwhelmed hospitals, faced shortages of protective equipment, made difficult triage decisions, and coped with the emotional toll of losing patients and colleagues. Through their stories, we gain a deeper understanding of the challenges faced by healthcare systems worldwide and the extraordinary courage and resilience of those who risked their lives to save others.",
    videoUrl:
      "https://short.icu/s7l8aiCl1?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741088928/doc9_zyk122.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741088928/doc9_zyk122.jpg",
    duration: "1",
    releaseDate: "2023-06-30",
    category: "Medical",
    tags: [
      "pandemic",
      "healthcare",
      "COVID-19",
      "medical workers",
      "public health",
    ],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "12",
    title: "Best Animal Documentaries",
    slug: "best-animal-documentaries",
    description:
      "A fascinating exploration of animal cognition and the surprising intelligence of non-human species.",
    longDescription:
      "For centuries, humans have underestimated the cognitive abilities of other species. This documentary challenges our assumptions about animal intelligence, exploring groundbreaking research that reveals the remarkable cognitive abilities of a wide range of species. From tool-using crows and problem-solving octopuses to elephants that recognize themselves in mirrors and great apes that use sophisticated communication systems, we discover that intelligence takes many forms in the animal kingdom. Through interviews with leading animal cognition researchers and stunning wildlife footage, we gain a new appreciation for the complex minds of our fellow creatures and the evolutionary roots of our own intelligence.",
    videoUrl:
      "https://short.icu/Mh41H-N_2?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741088678/doc8_zym38n.jpg",
    thumbnailUrl:
      "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741088678/doc8_zym38n.jpg",
    duration: "1",
    releaseDate: "2023-06-30",
    category: "Animals",
    tags: [
      "animal intelligence",
      "cognition",
      "wildlife",
      "evolution",
      "behavior",
    ],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "17",
    title: "American Sports Story Aaron Hernandez",
    slug: "american-sports-story-aaron-hernandez",
    description:
      "American Story. The first season, titled American Sports Story: Aaron Hernandez, is focused on the rise and fall of former NFL player",
    longDescription:
      "'American Sports Story' is a scripted anthological limited series that focuses on a prominent event involving a sports figure and re-examines it through the prism of today's world. Viewers have the opportunity to see that story unfold from multiple perspectives in various tellings.The first installment of the series charts the rise and fall of NFL superstar Aaron Hernandez and explores the disparate strands of his identity, his family, his career, his suicide and their legacy in sports and American culture.",
    videoUrl:
      "https://short.icu/IInIXvfe5?thumbnail=https://assets.fxnetworks.com/cms-next/production/98f9c312-55e3-4169-9243-84a5eb366a46.jpg",
    videoUrl1:
      "https://short.icu/jN3Y5NW-y?thumbnail=https://assets.fxnetworks.com/cms-next/production/98f9c312-55e3-4169-9243-84a5eb366a46.jpg",
    thumbnailUrl:
      "https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2024/09/american-sports-story-1024x575.webp",
    duration: "94",
    releaseDate: "2023-06-30",
    category: "Sports",
    tags: ["cricket", "sports rivalry", "India", "Pakistan", "sports history"],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "15",
    title: "The Greatest Rivalry: India vs Pakistan",
    slug: "the-greatest-rivalry-india-vs-pakistan",
    description:
      "Tracing the cricketing rivalry between India and Pakistan, this documentary series explores their intricate past and uncertain present on the pitch.",
    longDescription:
      "The Greatest Rivalry - India vs Pakistan review: Netflix's three-part documentary series is primarily presented through the perspective of Virender Sehwag and Shoaib Akhtar, but the omissions and lack of access are palpable. If Netflix's Indian films are noticeably worse than their American counterparts, what right do the documentaries have to be any better? The Greatest Rivalry: India vs Pakistan is unquestionably disappointing, both as a sports drama and as a piece of non-fiction storytelling. What could've been a rich exploration of the two countries' shared culture and geopolitical tensions is presented, instead, as a dry summary of events, peppered with cringe re-enactments and a jarring lack of access. Imagine telling the story of the 2002 FIFA World Cup without Ronaldo's involvement; imagine reflecting on Wimbledon 2003 but with no participation from Roger Federer. That's what The Greatest Rivalry feels like.",
    videoUrl:
      "https://short.icu/3I1R6ewDV?thumbnail=https://images.moneycontrol.com/static-mcnews/2025/01/20250113093754_grt.png?impolicy=website&width=1280&height=720",
    videoUrl1:
      "https://short.icu/N0TrDWO2r?thumbnail=https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/the-greatest-rivalry-india-vs-pakistan-07052935-16x9_0.jpg?VersionId=QaXIVJCNYpjbLhr0WAWuEQhIlAJkX7QI&size=690:388",
    thumbnailUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/the-greatest-rivalry-india-vs-pakistan-07052935-16x9_0.jpg?VersionId=QaXIVJCNYpjbLhr0WAWuEQhIlAJkX7QI&size=690:388",
    duration: "95",
    releaseDate: "2023-06-30",
    category: "Sports",
    tags: ["cricket", "sports rivalry", "India", "Pakistan", "sports history"],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
  {
    id: "19",
    title: "Jesus - The Historical Facts Documentary",
    slug: "jesus-the-historical-facts-documentary",
    description:
      "The man known to history as Jesus Christ, or Yeshua in his native Aramaic tongue, was born in Judaea, a region in the southern Levant in the Middle East.",
    longDescription:
      "The man known to history as Jesus Christ, or Yeshua in his native Aramaic tongue, was born in Judaea, a region in the southern Levant in the Middle East. The Christian calendar commonly used throughout the world designs the Year 1 AD as the year of Jesus' birth, though most scholars believe, based on circumstantial evidence relating to wider events in the Roman world, that he was born between 7 BC and 4 BC. Likewise, while his birth is celebrated on the 25th of December, Christmas Day, there is no concrete evidence for this. Almost everything about Jesus' life, from his birth to his death, as well as his resurrection, has been scrutinized by believers and non-believers alike. The tale of Jesus' birth is one of the best-known stories in the world and is found in the gospels of Luke and Matthew. The fullest account is in Luke, who writes that his mother Mary, a young virgin from Nazareth in Galilee, was due to marry Joseph, a carpenter who was allegedly a descendant of the biblical King David. God sent the angel Gabriel to inform Mary of God's plan, namely that she was to conceive a child from God in the form of the Holy Spirit. Matthew's version is slightly different, stating that the angel had appeared before Joseph and reassured him that he should still go ahead and marry Mary despite finding her pregnant, since she was carrying the child of God.",
    videoUrl:
      "https://short.icu/FgsjEe_GG?thumbnail=https://i.ytimg.com/vi/uXw2zYZ1wxk/maxresdefault.jpg",
    thumbnailUrl: "https://i.ytimg.com/vi/uXw2zYZ1wxk/maxresdefault.jpg",
    duration: "76",
    releaseDate: "2022-11-05",
    category: "History",
    tags: [
      "archaeology",
      "history",
      "ancient civilizations",
      "mysteries",
      "anthropology",
    ],
    featured: false,
    views: 15300,
    rating: 4.6,
  },
  {
    id: "20",
    title: "Biography WWE Legends S03",
    slug: "biography-wwe-legends-s03",
    description:
      "American Story. The first season, titled American Sports Story: Aaron Hernandez, is focused on the rise and fall of former NFL player",
    longDescription:
      "'American Sports Story' is a scripted anthological limited series that focuses on a prominent event involving a sports figure and re-examines it through the prism of today's world. Viewers have the opportunity to see that story unfold from multiple perspectives in various tellings.The first installment of the series charts the rise and fall of NFL superstar Aaron Hernandez and explores the disparate strands of his identity, his family, his career, his suicide and their legacy in sports and American culture.",
    videoUrl:
      "https://short.icu/cSvYxbMMK?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/7e236f37bbb963ced4713b51d4b5aeedbc3db3d1713f1c2e78600e77d6250317.jpg",
    videoUrl2:
      "https://short.icu/ls19vpRCa?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/7e236f37bbb963ced4713b51d4b5aeedbc3db3d1713f1c2e78600e77d6250317.jpg",
    videoUrl3:
      "https://short.icu/7cDzQOo6m?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/7e236f37bbb963ced4713b51d4b5aeedbc3db3d1713f1c2e78600e77d6250317.jpg",
    videoUrl4:
      "https://short.icu/Y9jMNnJ5f?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/7e236f37bbb963ced4713b51d4b5aeedbc3db3d1713f1c2e78600e77d6250317.jpg",
    videoUrl5:
      "https://short.icu/nBc8vnthv?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/7e236f37bbb963ced4713b51d4b5aeedbc3db3d1713f1c2e78600e77d6250317.jpg",
    videoUrl6:
      "https://short.icu/c0VFcAKCQ?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/7e236f37bbb963ced4713b51d4b5aeedbc3db3d1713f1c2e78600e77d6250317.jpg",
    videoUrl7:
      "https://short.icu/u5IasGAe6?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/7e236f37bbb963ced4713b51d4b5aeedbc3db3d1713f1c2e78600e77d6250317.jpg",
      videoUrl8:
      "https://short.icu/KiQnEjAsw?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/7e236f37bbb963ced4713b51d4b5aeedbc3db3d1713f1c2e78600e77d6250317.jpg",
    thumbnailUrl:
      "https://www.pennlive.com/resizer/v2/GKPPCAGYGFHPBFP7JLOEAHGLQY.webp?auth=f8fe9755ed5aa0008e2e544279bf9770708b51ee573f45df2e12d8ec10a8094f&width=500&quality=90",
    duration: "94",
    releaseDate: "2023-06-30",
    category: "Sports",
    tags: ["cricket", "sports rivalry", "India", "Pakistan", "sports history"],
    featured: true,
    views: 14200,
    rating: 4.7,
  },
];

export const getDocumentaries = (): Documentary[] => {
  return documentariesData;
};

export const getDocumentaryBySlug = (slug: string): Documentary | undefined => {
  return getDocumentaries().find((doc) => doc.slug === slug);
};

export const getFeaturedDocumentaries = (): Documentary[] => {
  return getDocumentaries().filter((doc) => doc.featured);
};

export const getPopularDocumentaries = (): Documentary[] => {
  return [...getDocumentaries()].sort((a, b) => b.views - a.views).slice(0, 6);
};

export const getRecentDocumentaries = (): Documentary[] => {
  return [...getDocumentaries()]
    .sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    )
    .slice(0, 6);
};

export const getDocumentariesByCategory = (category: string): Documentary[] => {
  return getDocumentaries().filter((doc) => doc.category === category);
};

export const getDocumentariesByTag = (tag: string): Documentary[] => {
  return getDocumentaries().filter((doc) => doc.tags?.includes(tag));
};

export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  getDocumentaries().forEach((doc) => categories.add(doc.category));
  return Array.from(categories);
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  getDocumentaries().forEach((doc) => {
    doc.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
};
