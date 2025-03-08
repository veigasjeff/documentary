// This is a mock implementation - in a real app, this would fetch from an API or database
import { cache } from "react"

export interface Documentary {
  id: string
  slug: string
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string
  duration: number // in seconds
  views: number
  category: string
  tags: string[]
  releaseDate: string
  director: string
  featured: boolean
}

const documentaries: Documentary[] = [
  {
    id: '1',
    slug: 'jesus-the-historical-facts-documentary',
    title: 'Jesus - The Historical Facts Documentary',
    description: 'The man known to history as Jesus Christ, or Yeshua in his native Aramaic tongue, was born in Judaea, a region in the southern Levant in the Middle East. The Christian calendar commonly used throughout the world designs the Year 1 AD as the year of Jesus birth, though most scholars believe, based on circumstantial evidence relating to wider events in the Roman world, that he was born between 7 BC and 4 BC. Likewise, while his birth is celebrated on the 25th of December, Christmas Day, there is no concrete evidence for this. Almost everything about Jesus life, from his birth to his death, as well as his resurrection, has been scrutinized by believers and non-believers alike. The tale of Jesus birth is one of the best-known stories in the world and is found in the gospels of Luke and Matthew. The fullest account is in Luke, who writes that his mother Mary, a young virgin from Nazareth in Galilee, was due to marry Joseph, a carpenter who was allegedly a descendant of the biblical King David. God sent the angel Gabriel to inform Mary of Gods plan, namely that she was to conceive a child from God in the form of the Holy Spirit. Matthews version is slightly different, stating that the angel had appeared before Joseph and reassured him that he should still go ahead and marry Mary despite finding her pregnant, since she was carrying the child of God.',
    thumbnailUrl: 'https://i.ytimg.com/vi/uXw2zYZ1wxk/maxresdefault.jpg',
    videoUrl: 'https://short.icu/FgsjEe_GG?thumbnail=https://i.ytimg.com/vi/uXw2zYZ1wxk/maxresdefault.jpg',
    duration: 4560,
    views: 1500000,
    category: 'History',
    tags: ['wildlife', 'environment', 'conservation'],
    releaseDate: '2020-01-15',
    director: 'David Attenborough',
    featured: true
  },
  {
    id: '2',
    slug: 'quantum-arms-race',
    title: 'Quantum Arms Race',
    description: 'Quantum computing, a field that once resided in the realm of theoretical physics, has made remarkable strides in recent years, emerging from the laboratory and into the spotlight of technological advancement. The convergence of cutting-edge research and innovative engineering has brought us to a point where the potential of quantum computers to revolutionize various industries is no longer a distant dream, but a tangible reality. One of the most significant developments in quantum computing has been the increasing number of qubits, the fundamental units of quantum information. Qubits, unlike classical bits, can exist in superposition, allowing them to represent multiple states simultaneously. This quantum property enables quantum computers to perform calculations exponentially faster than classical computers for certain types of problems. As the number of qubits in quantum processors continues to grow, so does the complexity of the problems they can tackle. Another key area of progress is quantum error correction. Quantum systems are inherently fragile, susceptible to noise and decoherence, which can lead to errors in computations. Quantum error correction codes are designed to mitigate these errors and ensure the reliability of quantum calculations. Researchers have made significant advancements in developing efficient and robust error correction techniques, paving the way for more reliable and scalable quantum computers. The integration of quantum computing with artificial intelligence is another exciting frontier. Quantum machine learning algorithms have the potential to accelerate the development of AI systems, enabling them to learn from vast amounts of data and make more accurate predictions. Quantum-enhanced AI could revolutionize fields such as drug discovery, materials science, and financial modeling. While quantum computers are still in their early stages of development, their potential impact on society is immense. From accelerating scientific research to revolutionizing cryptography and cybersecurity, quantum computing has the power to transform industries and shape the future. As researchers continue to push the boundaries of quantum technology, we can expect to witness even more groundbreaking developments in the years to come.',
    thumbnailUrl: 'https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741336756/quatam_zxt3c4.jpg',
    videoUrl: 'https://short.icu/7YRhrFIr_?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741336756/quatam_zxt3c4.jpg',
    duration: 5400,
    views: 2300000,
    category: 'Technology',
    tags: ['social media', 'technology', 'privacy'],
    releaseDate: '2020-09-09',
    director: 'Jeff Orlowski',
    featured: true
  },
  // {
  //   id: '3',
  //   slug: 'free-solo',
  //   title: 'Free Solo',
  //   description: 'Follow Alex Honnold as he becomes the first person to ever free solo climb Yosemite\'s El Capitan, a 3,000ft vertical rock face, without ropes or safety gear.',
  //   thumbnailUrl: 'https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741090348/doc13_spbldm.jpg',
  //   videoUrl: 'https://short.icu/48GuBDfa-?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741090348/doc13_spbldm.jpg',
  //   duration: 6000,
  //   views: 1800000,
  //   category: 'Adventure',
  //   tags: ['climbing', 'adventure', 'sports'],
  //   releaseDate: '2018-09-28',
  //   director: 'Elizabeth Chai Vasarhelyi',
  //   featured: true
  // },
  {
    id: '4',
    slug: 'super-man-the-christopher-reeve-story',
    title: 'Super Man The Christopher Reeve Story',
    description: 'Reeves rise to becoming a film star follows with a near-fatal horse-riding accident in 1995 that left him paralyzed from the neck down. After the accident, he became an activist for spinal cord injury treatments and disability rights. The story of Christopher Reeve is an astonishing rise from unknown actor to iconic movie star, and his definitive portrayal of Clark Kent/Superman set the benchmark for the superhero cinematic universes that dominate cinema today. Reeve portrayed the Man of Steel in four Superman films and played dozens of other roles that displayed his talent and range as an actor, before being injured in a near-fatal horse-riding accident in 1995 that left him paralyzed from the neck down. After becoming a quadriplegic, he became a charismatic leader and activist in the quest to find a cure for spinal cord injuries, as well as a passionate advocate for disability rights and care—all while continuing his career in cinema in front of and behind the camera and dedicating himself to his beloved family.',
    thumbnailUrl: 'https://resizing.flixster.com/FlsOE8jBOhOAbFkR-baMst_93XM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27640574_v_h8_ai.jpg',
    videoUrl: 'https://short.icu/qEVLIfaDi?thumbnail=https://resizing.flixster.com/FlsOE8jBOhOAbFkR-baMst_93XM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27640574_v_h8_ai.jpg',
    duration: 6240,
    views: 1200000,
    category: 'Movies',
    tags: ['cinema', 'film', 'cinematography' , 'film history'],
    releaseDate: '2023-06-30',
    director: 'Ian Bonhôte, Peter Ettedgui',
    featured: false
  },
  {
    id: '5',
    slug: 'american-sports-story-aaron-hernandez',
    title: 'Aaron Hernandez Part 1',
    description: '"American Sports Story" is a scripted anthological limited series that focuses on a prominent event involving a sports figure and re-examines it through the prism of todays world. Viewers have the opportunity to see that story unfold from multiple perspectives in various tellings.The first installment of the series charts the rise and fall of NFL superstar Aaron Hernandez and explores the disparate strands of his identity, his family, his career, his suicide and their legacy in sports and American culture.',
    thumbnailUrl: 'https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2024/09/american-sports-story-1024x575.webp',
    videoUrl: 'https://short.icu/IInIXvfe5?thumbnail=https://assets.fxnetworks.com/cms-next/production/98f9c312-55e3-4169-9243-84a5eb366a46.jpg',
    duration: 7200,
    views: 950000,
    category: 'Sports',
    tags: ['doping', 'olympics', 'investigation'],
    releaseDate: '2017-08-04',
    director: 'Bryan Fogel',
    featured: true
  },
  // {
  //   id: '6',
  //   slug: 'becoming-warren-buffett',
  //   title: 'Becoming Warren Buffett',
  //   description: 'The story of the billionaire investor, from his first investment at age 11 to his status as one of the world\'s richest men.',
  //   thumbnailUrl: 'https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741090348/doc13_spbldm.jpg',
  //   videoUrl: 'https://short.icu/48GuBDfa-?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741090348/doc13_spbldm.jpg',
  //   duration: 5400,
  //   views: 780000,
  //   category: 'Business',
  //   tags: ['finance', 'biography', 'success'],
  //   releaseDate: '2017-01-30',
  //   director: 'Peter Kunhardt',
  //   featured: false
  // },
  {
    id: '7',
    slug: 'instagrams-fake-guru',
    title: 'Instagrams Fake Guru',
    description: 'Kat Torres, a former Brazilian model turned wellness influencer and spiritual life coach, captivated millions on Instagram. Her journey from extreme poverty to luxury was an inspiring tale until uncovered allegations revealed the dark side of her empire. This documentary delves into Kats life story, exploring the exploitation that unfolded within her circle and its global repercussions. Born in Brazil, Kat emerged from a world of hardship to become an emblem of success. Her transformation resonated with millions as she transitioned seamlessly into the glossy realm of European modeling and subsequently built a lavish lifestyle in New York City. Through her Instagram presence, which boasted over one million followers, Kat projected images of opulence, wellness, and spiritual enlightenment - an ideal that countless women aspired to. Yet beneath the veneer of glamour lay a sinister underbelly intertwined with allegations of witchcraft, exploitation, and human trafficking. These dark practices formed part of an insidious network often unseen by society at large but devastating for those involved. As women vanished without a trace, their families were left desperate, while the FBI scoured Brazil in search of answers. The film casts light on this clandestine world where half-truths and deception reigned supreme, revealing how Kats followers became ensnared within her web, paying a hefty price for their devotion to her "spiritual voice." For the first time, those who perpetuated this cycle of exploitation confronted authorities behind prison walls, providing insight into the twisted mechanisms that sustained such atrocities.',
    thumbnailUrl: 'https://ichef.bbci.co.uk/images/ic/1200x675/p0jbfk51.jpg',
    videoUrl: 'https://short.icu/3lnmr7WJ7?thumbnail=https://ichef.bbci.co.uk/images/ic/1200x675/p0jbfk51.jpg',
    duration: 6600,
    views: 1100000,
    category: 'Crime',
    tags: ['data privacy', 'politics', 'social media'],
    releaseDate: '2019-07-24',
    director: 'Karim Amer',
    featured: false
  },
  {
    id: '8',
    slug: 'the-layers-of-reality',
    title: 'The Layers of Reality',
    description: 'The question of what constitutes reality has perplexed philosophers and scientists for millennia. As we delve deeper into the cosmos and the inner workings of matter, we uncover layers of existence that challenge our intuitive understanding of the world. From the tangible objects we interact with daily to the subatomic particles that make up everything, reality seems to be a complex tapestry woven from multiple threads. At the most fundamental level, we encounter the realm of quantum mechanics, where particles exist in a state of superposition, simultaneously occupying multiple states until observed. This suggests that the universe may not be deterministic, but rather probabilistic, with outcomes determined by chance. The implications of this are profound, as it challenges our notion of objective reality and raises questions about the nature of consciousness and its role in shaping the world.As we move up the scale of complexity, we encounter the classical world, governed by the laws of Newtonian physics. This is the world we experience directly, where objects have definite properties and behave in predictable ways. However, this classical world is merely an approximation of the underlying quantum reality, emerging from the collective behavior of countless particles.Beyond the physical realm, we encounter the realm of consciousness, which remains one of the greatest mysteries of science. While we can measure brain activity and correlate it with subjective experiences, we still dont fully understand how these physical processes give rise to consciousness. Some theories suggest that consciousness may be a fundamental property of the universe, while others propose that it is an emergent phenomenon arising from complex neural networks. The exploration of these layers of reality has led to profound insights into the nature of the universe and our place within it. As we continue to push the boundaries of scientific knowledge, we may uncover even more layers of existence, challenging our understanding of reality and forcing us to rethink our place in the cosmos.',
    thumbnailUrl: 'https://i.ytimg.com/vi/ji2KKU5NfoY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_LBxcs1wLqmYBKqe8j3cQdx_AMg',
    videoUrl: 'https://short.icu/I5WnBx_Zg?thumbnail=https://i.ytimg.com/vi/ji2KKU5NfoY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_LBxcs1wLqmYBKqe8j3cQdx_AMg',
    duration: 5700,
    views: 920000,
    category: 'Science',
    tags: ['space', 'history', 'NASA'],
    releaseDate: '2024-08-31',
    director: 'Geraint F. Lewis',
    featured: true
  },
  {
    id: '9',
    slug: 'uncovering-the-rise-of-extremism-in-australia',
    title: 'Uncovering the rise of extremism in Australia',
    description: 'Families call on governments to act as loved ones fall into extremism. When Emily’s teenage son became withdrawn, she never imagined he had secretly joined Australia’s most prominent Neo-Nazi group. Now, she and other families are speaking out for the first time, revealing to reporter Avani Dias the painful reality of radicalisation and the struggle to get help.Australian authorities are urging families to report extremist behaviour and engage in early intervention programs — but many say the system is failing them. A serving police officer has now broken ranks, backing these families and warning that current efforts aren’t working. This Four Corners investigation exposes the growing threat of homegrown extremism and the desperate calls for stronger action.',
    thumbnailUrl: 'https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741349002/extremism_in_Australia_enlzf7.jpg',
    videoUrl: 'https://short.icu/Jjs4w5jgQ?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741349002/extremism_in_Australia_enlzf7.jpg',
    duration: 4800,
    views: 1300000,
    category: 'Society',
    tags: ['animal rights', 'marine life', 'activism'],
    releaseDate: '2013-07-19',
    director: 'Gabriela Cowperthwaite',
    featured: false
  },
  {
    id: '10',
    slug: 'how-the-beatles-changed-the-world',
    title: 'How the Beatles Changed the World',
    description: 'The Beatles, a quartet of young men from Liverpool, England, irrevocably altered the course of popular music and culture in the 20th century. Their meteoric rise to fame and enduring legacy continue to captivate audiences worldwide. Emerging from the bustling port city of Liverpool, John Lennon, Paul McCartney, George Harrison, and Ringo Starr formed a band that would soon revolutionize popular music. With their infectious melodies, innovative songwriting, and charismatic stage presence, the Beatles captured the hearts of millions. Their music was a reflection of their times, often exploring themes of love, loss, social commentary, and personal growth. They pushed the boundaries of popular music, experimenting with different genres and incorporating elements of classical music, jazz, and Indian ragas. Their innovative approach to songwriting and recording techniques had a profound influence on subsequent generations of musicians. One of the most significant aspects of the Beatles legacy is their ability to connect with audiences on a deep emotional level. Their songs often resonated with the experiences and aspirations of young people, providing a sense of belonging and understanding. The Beatles music served as a soundtrack for a generation, capturing the spirit of the times and reflecting the hopes and fears of a changing society. Beyond their musical accomplishments, the Beatles also had a significant impact on fashion, social norms, and youth culture. Their hairstyles, clothing choices, and attitudes challenged traditional values and inspired a new generation of young people. The Beatles concerts were often characterized by mass hysteria and fan frenzy, demonstrating their immense popularity and cultural influence. The Beatles influence on popular culture is undeniable. Their music, style, and attitudes challenged traditional norms and inspired a new generation of young people. Their legacy continues to resonate with audiences worldwide, making them one of the most influential bands in history. The Beatles impact extends far beyond their music, as they have become cultural icons whose influence can still be felt today.',
    thumbnailUrl: 'https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741349861/How_the_Beatles_Changed_the_World_kxy30n.jpg',
    videoUrl: 'https://short.icu/hKx1_wZsm?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741349861/How_the_Beatles_Changed_the_World_kxy30n.jpg',
    duration: 4800,
    views: 850000,
    category: 'Movies',
    tags: ['culinary arts', 'beatles', 'worldwide'],
    releaseDate: '2023-01-17',
    director: 'Tom ODell',
    featured: false
  },
  {
    id: '11',
    slug: 'unfit-the-psychology-of-donald-trump',
    title: 'Unfit The Psychology Of Donald Trump',
    description: 'An eye-opening and shattering analysis of the behavior, psyche, condition, and stability of Donald Trump. For the first time, mental health professionals go on the record, in an eye–opening, science–based assessment of the behavior and stability of Donald J. Trump. Putting Donald Trump on the couch has become a national pastime, and this movie does it well. The issue of whether Donald Trump is mentally unfit to be president — or, to put it more bluntly, whether he suffers from a serious mental disorder — isn’t one to be taken lightly, yet it sometimes seems destined to be tinged with comedy. In 2017, when speculation about Trump’s mental state was first reaching full boil, Allen Frances, the psychiatrist who wrote the criteria that defines narcissistic personality disorder, published a righteous letter in The New York Times insisting that Trump was not an example of that syndrome. I looked up the criteria on several prominent medical websites, and guess what? Trump meets every one of the criteria. (Don’t take my word for it; look it up yourself. That letter to the editor read like Freud coming back from the dead to insist that the Woody Allen character from the ’70s was not, in fact, neurotic.',
    thumbnailUrl: 'https://m.media-amazon.com/images/S/pv-target-images/afcd67f25ed94fe5f322ab46423f2fbde998d02ee5f3711170a33a14df82235f.jpg',
    videoUrl: 'https://short.icu/oFviVJqiE?thumbnail=https://m.media-amazon.com/images/S/pv-target-images/afcd67f25ed94fe5f322ab46423f2fbde998d02ee5f3711170a33a14df82235f.jpg',
    duration: 5040,
    views: 850000,
    category: 'Biography',
    tags: ['biography', 'exploration', 'perfection' , 'lifestories'],
    releaseDate: '2020-08-28',
    director: 'Dan Partland',
    featured: false
  },
  {
    id: '12',
    slug: 'american-sports-story-aaron-hernandez',
    title: 'Aaron Hernandez Part 2',
    description: '"American Sports Story" is a scripted anthological limited series that focuses on a prominent event involving a sports figure and re-examines it through the prism of todays world. Viewers have the opportunity to see that story unfold from multiple perspectives in various tellings.The first installment of the series charts the rise and fall of NFL superstar Aaron Hernandez and explores the disparate strands of his identity, his family, his career, his suicide and their legacy in sports and American culture.',
    thumbnailUrl: 'https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2024/09/american-sports-story-1024x575.webp',
    videoUrl: 'https://short.icu/jN3Y5NW-y?thumbnail=https://assets.fxnetworks.com/cms-next/production/98f9c312-55e3-4169-9243-84a5eb366a46.jpg',
    duration: 7200,
    views: 950000,
    category: 'Sports',
    tags: ['doping', 'olympics', 'investigation'],
    releaseDate: '2017-08-04',
    director: 'Bryan Fogel',
    featured: false
  },
  {
    id: '13',
    slug: 'the-greatest-rivalry-india-vs-pakistan-english',
    title: 'The Greatest Rivalry: India vs Pakistan (English)',
    description: 'The Greatest Rivalry - India vs Pakistan review: Netflixs three-part documentary series is primarily presented through the perspective of Virender Sehwag and Shoaib Akhtar, but the omissions and lack of access are palpable. If Netflixs Indian films are noticeably worse than their American counterparts, what right do the documentaries have to be any better? The Greatest Rivalry: India vs Pakistan is unquestionably disappointing, both as a sports drama and as a piece of non-fiction storytelling. What couldve been a rich exploration of the two countries shared culture and geopolitical tensions is presented, instead, as a dry summary of events, peppered with cringe re-enactments and a jarring lack of access. Imagine telling the story of the 2002 FIFA World Cup without Ronaldos involvement; imagine reflecting on Wimbledon 2003 but with no participation from Roger Federer. Thats what The Greatest Rivalry feels like.',
    thumbnailUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/the-greatest-rivalry-india-vs-pakistan-07052935-16x9_0.jpg?VersionId=QaXIVJCNYpjbLhr0WAWuEQhIlAJkX7QI&size=690:388',
    videoUrl: 'https://short.icu/3I1R6ewDV?thumbnail=https://images.moneycontrol.com/static-mcnews/2025/01/20250113093754_grt.png?impolicy=website&width=1280&height=720',
    duration: 7200,
    views: 950000,
    category: 'Sports',
    tags: ['doping', 'olympics', 'investigation'],
    releaseDate: '2017-08-04',
    director: 'Bryan Fogel',
    featured: false
  },
  {
    id: '14',
    slug: 'the-greatest-rivalry-india-vs-pakistan-hindi',
    title: 'The Greatest Rivalry: India vs Pakistan (Hindi)',
    description: 'The Greatest Rivalry - India vs Pakistan review: Netflixs three-part documentary series is primarily presented through the perspective of Virender Sehwag and Shoaib Akhtar, but the omissions and lack of access are palpable. If Netflixs Indian films are noticeably worse than their American counterparts, what right do the documentaries have to be any better? The Greatest Rivalry: India vs Pakistan is unquestionably disappointing, both as a sports drama and as a piece of non-fiction storytelling. What couldve been a rich exploration of the two countries shared culture and geopolitical tensions is presented, instead, as a dry summary of events, peppered with cringe re-enactments and a jarring lack of access. Imagine telling the story of the 2002 FIFA World Cup without Ronaldos involvement; imagine reflecting on Wimbledon 2003 but with no participation from Roger Federer. Thats what The Greatest Rivalry feels like.',
    thumbnailUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/the-greatest-rivalry-india-vs-pakistan-07052935-16x9_0.jpg?VersionId=QaXIVJCNYpjbLhr0WAWuEQhIlAJkX7QI&size=690:388',
    videoUrl: 'https://short.icu/N0TrDWO2r?thumbnail=https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/the-greatest-rivalry-india-vs-pakistan-07052935-16x9_0.jpg?VersionId=QaXIVJCNYpjbLhr0WAWuEQhIlAJkX7QI&size=690:388',
    duration: 7200,
    views: 950000,
    category: 'Sports',
    tags: ['doping', 'olympics', 'investigation'],
    releaseDate: '2017-08-04',
    director: 'Bryan Fogel',
    featured: false
  },
  {
    id: '15',
    slug: 'putin-2025',
    title: 'Putin 2025',
    description: 'A portrait of a formidable political figure, unraveling the contrasting facets of an iron-fisted tyrant and a man haunted by fear. The film covers the life of Vladimir Putin and focuses on key milestones in Putins real life,including his childhood in Leningrad in the post-World War II Soviet Union, his recruitment into the KGB and subsequent Cold War-era career as an intelligence officer, and his tenure as the President of Russia. The film concludes with a fictionalized portrayal of Putin’s death.',
    thumbnailUrl: 'https://ntvb.tmsimg.com/assets/p27639050_v_h10_ab.jpg?w=1280&h=720',
    videoUrl: 'https://short.icu/6xbxB54fD?thumbnail=https://images.gem.cbc.ca/v1/synps-cbc/episode/perso/cbc_putinsjourneyt01_thumbnail_v01.jpg?impolicy=ott&im=Resize=730&quality=75',
    duration: 5040,
    views: 850000,
    category: 'Biography',
    tags: ['biography', 'exploration', 'perfection' , 'lifestories'],
    releaseDate: '2020-08-28',
    director: 'Dan Partland',
    featured: false
  },
  {
    id: '16',
    slug: 'go-back-to-where-you-came-from-s01',
    title: 'Go Back to Where You Came From S01',
    description: 'Six British citizens, each with strong views on immigration, are taken on a journey to war-torn countries to discover the realities of life as a refugee. Go Back to Where You Came From is a 2025 TV series that follows six British people on a journey to war-torn countries to experience life as a refugee. The series aims to challenge perspectives on immigration and spark conversation.',
    thumbnailUrl: 'https://m.media-amazon.com/images/M/MV5BYmE0Nzk5ZDItNTVkMi00Yjg0LTgzMGItZDRmN2IxMGUwZDU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    videoUrl: 'https://short.icu/1c2hsrDz5?thumbnail=https://m.media-amazon.com/images/M/MV5BYmE0Nzk5ZDItNTVkMi00Yjg0LTgzMGItZDRmN2IxMGUwZDU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    duration: 11460,
    views: 850000,
    category: 'Reality',
    tags: ['goback2025', 'refugeereality', 'humanstories' , 'lifestories'],
    releaseDate: '2020-08-28',
    director: 'Ivan OMahoney',
    featured: false
  },
  {
    id: '17',
    slug: 'virgin-girl-sold-to-a-aillionaire-husband',
    title: 'Virgin Girl Sold To a Billionaire Husband',
    description: 'In the peaceful town of Cedar Falls, eighteen-year-old Emily Carters dreams of college and becoming a journalist are shattered when her father, drowning in debt, makes an unthinkable decision. To save himself from financial ruin and threats from loan sharks, he agrees to marry his daughter to Daniel Reeves—a wealthy, powerful 68-year-old man with a dark history. Trapped in a nightmare of abuse and isolation, Emily desperately tries to escape her new reality as Daniels "wife." Cut off from her family and friends, her every move monitored, she becomes a prisoner in a mansion that serves as her gilded cage. When Emily discovers shes pregnant, she makes one final, desperate attempt for freedom. But men like Daniel Reeves dont let go of what they believe belongs to them. After Emilys mysterious disappearance, her 15-year-old brother Jake refuses to believe the story that she simply ran away. His relentless search for the truth uncovers the horrifying reality of what happened to his sister, exposing not only Daniels crimes but also the complicity of a town that looked the other way. This heart-wrenching story of sacrifice, survival, and justice exposes the devastating reality of forced marriage and domestic abuse hiding in plain sight, asking the haunting question: How many daughters will be sacrificed before society takes a stand?',
    thumbnailUrl: 'https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741342444/VIRGIN_GIRL_xtb3lw.jpg',
    videoUrl: 'https://short.icu/5NZ-FGxSb?thumbnail=https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741342444/VIRGIN_GIRL_xtb3lw.jpg',
    duration: 3120,
    views: 1100000,
    category: 'Crime',
    tags: ['data privacy', 'politics', 'social media'],
    releaseDate: '2025-03-04',
    director: 'True Crime Stories',
    featured: false
  },
  {
    id: '18',
    slug: 'cunk-on-earth-s01',
    title: 'Cunk On Earth S01',
    description: 'Cunk on Earth is a British mockumentary television series produced by Charlie Brooker for the BBC and Netflix. The series stars Diane Morgan as Philomena Cunk, an ill-informed investigative reporter, a character who previously starred on Charlie Brookers Weekly Wipe and Cunk on Britain. The series was acclaimed by critics, with many praising Morgans deadpan delivery. It premiered in the United Kingdom on BBC Two on 20 September 2022, and was released in the United States on Netflix on 31 January 2023. In this mockumentary, Philomena Cunk traces the history of civilization.',
    thumbnailUrl: 'https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTdNgAU2x7HEIY0xEUtAqMGnocBwjZCkRdz_Qb8J4UI91Mz4ViEFx1fDnF-TqF2ffSJY1xvz6oqj0AcosvNQWBIF45Q-o2VOn_biRGRWG_Id_45SeupZw8Y_LA93FdG8Ou1SqQ.webp?r=11b',
    videoUrl: 'https://short.icu/pt5J58qcS?thumbnail=https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTdNgAU2x7HEIY0xEUtAqMGnocBwjZCkRdz_Qb8J4UI91Mz4ViEFx1fDnF-TqF2ffSJY1xvz6oqj0AcosvNQWBIF45Q-o2VOn_biRGRWG_Id_45SeupZw8Y_LA93FdG8Ou1SqQ.webp?r=11b',
    duration: 8640,
    views: 950000,
    category: 'Environment',
    tags: ['climate change', 'environment', 'global warming', 'ecology'],
    releaseDate: '2023-01-31',
    director: 'Christian Watt',
    featured: false
  },
];


export const getAllDocumentaries = cache(async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return documentaries
})

export const getFeaturedDocumentaries = cache(async (limit?: number) => {
  const featured = documentaries.filter((doc) => doc.featured)
  return limit ? featured.slice(0, limit) : featured
})

export const getRecentDocumentaries = cache(async (limit?: number) => {
  // Sort by release date (newest first)
  const sorted = [...documentaries].sort(
    (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
  )
  return limit ? sorted.slice(0, limit) : sorted
})

export const getDocumentaryBySlug = cache(async (slug: string) => {
  return documentaries.find((doc) => doc.slug === slug) || null
})

export const getRelatedDocumentaries = cache(async (id: string, category: string, limit = 4) => {
  // Get documentaries in the same category, excluding the current one
  const related = documentaries.filter((doc) => doc.id !== id && doc.category === category).slice(0, limit)

  // If we don't have enough related docs by category, add some featured ones
  if (related.length < limit) {
    const featured = documentaries
      .filter((doc) => doc.id !== id && doc.featured && !related.some((r) => r.id === doc.id))
      .slice(0, limit - related.length)

    return [...related, ...featured]
  }

  return related
})

export const getDocumentariesByCategory = cache(async (category: string) => {
  return documentaries.filter((doc) => doc.category === category)
})

export const searchDocumentaries = cache(async (query: string) => {
  const searchTerm = query.toLowerCase()
  return documentaries.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchTerm) ||
      doc.description.toLowerCase().includes(searchTerm) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
  )
})

