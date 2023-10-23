import { useState, createContext } from "react";

export const Store = createContext();

function Storedata(props) {
  const [data, setData] = useState([
        // Bollywood data 
    {      id: 1,
    category: "Bollywood",
    name: "Kashmir Files",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202207/44-45_1-sixteen_nine.jpg?size=948:533",
    text: "The Kashmir Files is a 2022 Indian Hindi-language drama film written and directed by Vivek Agnihotri. The film presents a fictional storyline centred around the 1990 exodus of Kashmiri Hindus from Indian-administered Kashmir.",
  },
  {
    id: 2,
    category: "Bollywood",
    name: "Bhaag Milkha Bhaag",
    image:
      "https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/pfnqbuzkpijl8nk60eif",
    text: "Bhaag Milkha Bhaag[4] (transl.Run, Milkha, run) is a 2013 Hindi-language biographical sports drama film directed by Rakeysh Omprakash Mehra, written by lyricist Prasoon Joshi and produced by Viacom 18 Motion Pictures in association with Rajiv Tandon and editor P.S. Bharathi under the ROMP Pictures banner. Based on the life of Milkha Singh, an Indian athlete and Olympian who was a champion of the Commonwealth Games and two-time 400m champion of the Asian Games, it stars Farhan Akhtar in the titular role alongside Divya Dutta, Meesha Shafi, Pavan Malhotra, Yograj Singh, Art Malik, and Prakash Raj in supporting roles with Sonam Kapoor in an extended cameo appearance. Sports was coordinated by the American action director Rob Miller of ReelSports.[5]Co-cinematography by Narendra Kumar Singh..",
  },
  {
    id: 3,
    category: "Bollywood",
    name: "Jawan",
    image:
      "https://pbs.twimg.com/media/FUahkDIaUAAPW63.jpg:large",
    text: "Jawan (transl.Soldier) is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee as his first Hindi film.[4] It is produced by Gauri Khan and Gaurav Verma under Red Chillies Entertainment. The film stars Shah Rukh Khan in a dual role as father and son doppelgängers who team up to rectify corruption in society. Nayanthara, Vijay Sethupathi, Deepika Padukone (billed as a special appearance), Priyamani and Sanya Malhotra appear in supporting roles.",
  },
  {
    id: 4,
    category: "Bollywood",
    name: "Ms-Dhoni The Untold story",
    image:
      "https://images.jdmagicbox.com/comp/jd_social/news/2018aug09/image-244619-zf9smuveq9.jpg",
    text: "M.S. Dhoni: The Untold Story is a 2016 Indian Hindi-language biographical sports drama film written and directed by Neeraj Pandey. It is based on the life of former Test, ODI and T20I captain of the Indian national cricket team, Mahendra Singh Dhoni. The film stars the late Sushant Singh Rajput as MS Dhoni, along with Disha Patani, Kiara Advani, and Anupam Kher. The film chronicles the life of Dhoni from a young age through a series of life events.",
  },
  {
    id: 5,
    category: "Bollywood",
    name: "RAM LEELA ",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/av-media/movies/n/n/q/goliyon-ki-raasleela-ram-leela-original-imadsmetyzfpug2c.jpeg?q=20",
    text: "Goliyon Ki Raasleela Ram-Leela (transl. A Dance of Bullets: Ram-Leela), also simply known as Ram-Leela, is a 2013 Indian Hindi-language romantic action - drama film[3] written and directed by Sanjay Leela Bhansali, who also composed its original soundtrack. The film was jointly produced by Bhansali and Eros International's Kishore Lulla and stars Deepika Padukone and Ranveer Singh in lead roles with Priyanka Chopra making a special appearance in the song. The supporting cast includes Supriya Pathak, Richa Chadda, Sharad Kelkar, Gulshan Devaiah, Barkha Bisht Sengupta, and Abhimanyu Singh. Based on the tragedy Romeo and Juliet by William Shakespeare, Ram-Leela narrates the star-crossed romance between the two eponymous lovers from two gangster families, who fall in love with each other, but gets separations due to their families' rivalry for centuries.",
  },
  {
    id: 6,
    category: "Bollywood",
    name: "RAEES",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LNYSz1xwidBgrDE-YzAPTOShlG3_VIpbOw&usqp=CAU",
    text: "Raees (transl. Rich) is a 2017 Indian Hindi-language action film[6] directed by Rahul Dholakia and produced by Red Chillies Entertainment and Excel Entertainment.[7] It stars Shah Rukh Khan, Nawazuddin Siddiqui and Mahira Khan.[8][9][10] Raees is said to be based on the criminal Abdul Latif's life,[11] however, the filmmakers have denied this.[12][13].The film was released on 25 January 2017 during India's Republic Day weekend.[1] It received overall positive reviews from the critics, who appreciated the performances of Khan and Siddiqui, production design, cinematography and visual effects, and was a huge success at the box office,[14] becoming the 6th highest-grossing Hindi film of 2017. Raees was also the most pirated Hindi film of 2017 but it started trending in 2023 in Netflix after 6 years of release.[15] The film's soundtrack has also received over 160 crore (1.6 billion) streams on YouTube.[16] The film received five nominations at the 63rd Filmfare Awards, including Best Actor for Khan. It became the 47th highest-grossing Indian film of all time.",
  },
  {
    id: 7,
    category: "Bollywood",
    name: "OMG-2",
    image:
      "https://organiser.org/wp-content/uploads/2023/07/whatsapp-image-2023-07-13-at-2.49.30-pm.jpeg",
    text: "OMG 2 is a 2023 Indian Hindi-language comedy-drama film about sex education in India, written and directed by Amit Rai.[5][6][7][8][9] It is a spiritual sequel to OMG – Oh My God! (2012), and stars Akshay Kumar, Pankaj Tripathi and Yami Gautam Dhar.The film was theatrically released on 11 August 2023 to positive reviews from critics.[11] It has grossed over ₹220.49 crore (US$28 million) worldwide, emerging as the seventh highest-grossing Hindi film of 2023.[12]",
  },
  {
    id: 8,
    category: "Bollywood",
    name: "ROCKY Aur Rani Ki Prem Kahani",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00312549-zmajejrcee-landscape.jpg",
    text: "Rocky Aur Rani Kii Prem Kahaani (transl.Rocky and Rani's Love Story), is a 2023 Indian Hindi-language romantic comedy family drama film directed by Karan Johar and written by Ishita Moitra, Shashank Khaitan and Sumit Roy. The film stars Ranveer Singh and Alia Bhatt as a couple with contrasting personalities who decide to live with each other's families for three months before getting married. Dharmendra, Jaya Bachchan, Shabana Azmi, Tota Roy Chowdhury, Churni Ganguly, Aamir Bashir, and Kshitee Jog play their family members.",
  },
  {
    id: 9,
    category: "Bollywood",
    name: "Baji Rao Mastani ",
    image:
      "https://webneel.com/daily/sites/default/files/images/daily/08-2018/2-india-movie-poster-design-hindi-bjirao-mastani.jpg",
    text: "Bajirao Mastani is a 2015 Indian Hindi-language epic historical romance film directed by Sanjay Leela Bhansali, who co-produced it with Eros International and composed its soundtrack. The film stars Ranveer Singh, Deepika Padukone and Priyanka Chopra with Tanvi Azmi, Vaibhav Tatwawaadi, Milind Soman, Mahesh Manjrekar and Aditya Pancholi in supporting roles. Based on Nagnath S. Inamdar's Marathi novel Rau, Bajirao Mastani narrates the story of the Maratha Peshwa Bajirao I (1700-1740) and his second wife, Mastani.",
  },
  {
    id: 10,
    category: "Bollywood",
    name: "Gadar -2",
    image:
      "https://www.hindustantimes.com/ht-img/img/2023/07/26/900x1600/gadar_2_upcoming_1690363465208_1690363472660.jpg",
    text: "Gadar 2 (transl.Rebellion 2; subtitled onscreen with The Katha Continues) is a 2023 Indian Hindi-language period action drama film directed and produced by Anil Sharma and written by Shaktimaan Talwar. A sequel to Gadar: Ek Prem Katha (2001), it stars Sunny Deol, Ameesha Patel and Utkarsh Sharma, who reprise their roles from the previous film.[5] During the Indo-Pakistani War of 1971, Tara Singh returns to Pakistan in order to rescue his imprisoned son Charanjeet jeete Singh.Gadar 2 was theatrically released on 11 August 2023 and became a commercial success, grossing over ₹691.08 crore (US$87 million) worldwide against a production budget of ₹60 crore (US$7.5 million). It is the third highest-grossing Indian film of 2023 and seventh highest-grossing Hindi film of all-time.[6][7]",
  },

  // Hollywood section 
  {
    id: 11,
    category: "Hollywood",
    name: "Avengers",
    image:
      "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/original/products/58082/58811/91PT9YqnRrL._SL1500___19789.1602906710.jpg",
    text: "Marvel's The Avengers[5] (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland),[1][6] or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,[a] it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
  },
  {
    id: 12,
    category: "Hollywood",
    name: "Wanda  Vision",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81X5Tt-TVCNg4Hcv1KpsVPrHoCPL7BQXXwA&usqp=CAU",
    text: "WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on Marvel Comics featuring the characters Wanda Maximoff / Scarlet Witch and Vision. It is the first television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise, and is set after the events of the film Avengers: Endgame (2019). It follows Wanda Maximoff and Vision as they live an idyllic suburban life in the town of Westview, New Jersey, until their reality starts moving through different decades of sitcom homages and television tropes. Schaeffer served as head writer for the series, which was directed by Matt Shakman.",
  },
  {
    id: 13,
    category: "Hollywood",
    name: "Parasite",
    image:
      "https://parade.com/.image/t_share/MTkwNTgxMjk2NzkxODg5MDIx/parasite2.jpg",
    text: "Parasite (Korean: 기생충; Hanja: 寄生蟲; RR: Gisaengchung) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who co-wrote the screenplay with Han Jin-won and co-produced. The film, starring Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, Jang Hye-jin, Park Myung-hoon and Lee Jung-eun, follows a poor family who scheme to become employed by a wealthy family, infiltrating their household by posing as unrelated, highly qualified individuals.The script is based on Bong's source material from a play written in 2013. He later adapted it into a 15-page film draft, and it was split into three different drafts by Han. Bong stated that he was inspired by the 1960 Korean film The Housemaid, and by the Christine and Léa Papin incident in the 1930s. Filming began in May 2018 and finished that September. The project included cinematographer Hong Kyung-pyo, film editor Yang Jin-mo, and composer Jung Jae-il. Darcy Paquet, an American film critic and author, provided English translations for the film's international release.",
  },
  {
    id: 14,
    category: "Hollywood",
    name: "Interstellar",
    image:
      "https://m.media-amazon.com/images/I/91mrsggCtmL.jpg",
    text: "Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.",
  },
  {
    id: 15,
    category: "Hollywood",
    name: "The Zero Theorem",
    image:
      "https://www.indiewire.com/wp-content/uploads/2017/09/the-zero-theorem-2013.jpg?w=673",
    text: "The Zero Theorem is a 2013 science fiction film directed by Terry Gilliam, starring Christoph Waltz, David Thewlis, Mélanie Thierry and Lucas Hedges. Written by Pat Rushin, the story is about Qohen Leth (Waltz), a reclusive computer genius tasked with solving a formula that will determine whether life holds meaning. The film began production in October 2012.[5]Gilliam has given conflicting statements about whether The Zero Theorem is meant as the third part of a satirical dystopian trilogy  that began with 1985's Brazil and continued with 1995's 12 Monkeys.[6][7][8]",
  },
  {
    id: 16,
    category: "Hollywood",
    name: "Iron Man 3",
    image:
      "https://m.media-amazon.com/images/I/8159UW0-AEL._AC_UF894,1000_QL80_.jpg",
    text: "Iron Man 3 (titled onscreen as Iron Man Three)[4][5] is a 2013 American superhero film based on the Marvel Comics character Iron Man, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.[a] It is the sequel to Iron Man (2008) and Iron Man 2 (2010), and the seventh film in the Marvel Cinematic Universe (MCU). The film was directed by Shane Black from a screenplay he co-wrote with Drew Pearce, and stars Robert Downey Jr. as Tony Stark / Iron Man alongside Gwyneth Paltrow, Don Cheadle, Guy Pearce, Rebecca Hall, Stéphanie Szostak, James Badge Dale, William Sadler, Miguel Ferrer, Jon Favreau, and Ben Kingsley. In the film, Tony Stark grapples with the consequences of the events of The Avengers (2012) during a national terrorism campaign on the United States led by the mysterious Mandarin.",
  },
  {
    id: 17,
    category: "Hollywood",
    name: "Spider man Far From Home",
    image:
      "https://images.thedirect.com/media/photos/Untitled-1_0016_marvel-cinematic-universe-spiderman-far-from-home-movie-poster.jpg",
    text: "Spider-Man: Far From Home is a 2019 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and the 23rd film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts, written by Chris McKenna and Erik Sommers, and stars Tom Holland as Peter Parker / Spider-Man, alongside Samuel L. Jackson, Zendaya, Cobie Smulders, Jon Favreau, J. B. Smoove, Jacob Batalon, Martin Starr, Tony Revolori, Marisa Tomei, and Jake Gyllenhaal. In the film, Parker is recruited by Nick Fury (Jackson) and Mysterio (Gyllenhaal) to face the Elementals while he is on a school trip to Europe.",
  },
  {
    id: 18,
    category: "Hollywood",
    name: "Dr Strange in Mutiverse of Madness",
    image:
      "https://static.wixstatic.com/media/c0ca52_861cbfbd84344362a233f609406354cd~mv2.jpg/v1/fit/w_540%2Ch_675%2Cal_c%2Cq_80,enc_auto/file.jpg",
    text: "Doctor Strange in the Multiverse of Madness is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Doctor Strange (2016) and the 28th film in the Marvel Cinematic Universe (MCU). The film was directed by Sam Raimi, written by Michael Waldron, and stars Benedict Cumberbatch as Stephen Strange, alongside Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Michael Stuhlbarg, and Rachel McAdams. In the film, Strange protects America Chavez (Gomez), a teenager capable of traveling the multiverse, from Wanda Maximoff (Olsen).",
  },
  {
    id: 19,
    category: "Hollywood",
    name: "Captain Marvel",
    image:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2019016/rs_634x939-190116090754-634.captain-marvel-poster-2.11619.jpg?fit=around%7C634:939&output-quality=90&crop=634:939;center,top",
    text: "Captain Marvel is a 2019 American superhero film based on Marvel Comics featuring the character Carol Danvers / Captain Marvel. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 21st film in the Marvel Cinematic Universe (MCU). The film was directed by Anna Boden and Ryan Fleck from a screenplay they co-wrote with Geneva Robertson-Dworet. It stars Brie Larson as Carol Danvers, alongside Samuel L. Jackson, Ben Mendelsohn, Djimon Hounsou, Lee Pace, Lashana Lynch, Gemma Chan, Annette Bening, Clark Gregg, and Jude Law. Set in 1995, the story follows Danvers as she becomes Captain Marvel after Earth is caught in the center of a galactic conflict between two alien civilizations.",
  },
  {
    id: 20,
    category: "Hollywood",
    name: "Captain America- Civil War",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg",
    text: "Captain America: Civil War is a 2016 American superhero film based on the Marvel Comics character Captain America, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Captain America: The First Avenger (2011) and Captain America: The Winter Soldier (2014), and the 13th film in the Marvel Cinematic Universe (MCU). The film was directed by Anthony and Joe Russo from a screenplay by the writing team of Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside an ensemble cast including Robert Downey Jr., Scarlett Johansson, Sebastian Stan, Anthony Mackie, Don Cheadle, Jeremy Renner, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Paul Rudd, Emily VanCamp, Marisa Tomei, Tom Holland, Frank Grillo, Martin Freeman, William Hurt, and Daniel Brühl. In Captain America: Civil War, disagreement over international oversight of the Avengers fractures the team into two opposing factions—one led by Steve Rogers and the other by Tony Stark (Downey).",
  },
  // Technology section
  {
    id: 21,
    category: "Technology",
    name: "Startup from Thiruvananthapuram set to revolutionise filmmaking through AI technology",
    image:
      "https://images.newindianexpress.com/uploads/user/imagelibrary/2023/10/13/w900X450/TPuram_startups1.jpg?w=640&dpr=1.0",
    text: "At a time when artificial intelligence (AI) is making its presence felt in most sectors, can the movie industry be spared? Developed by Accubits Technologies, a startup based in Technopark, Dcult Studio promises to revolutionise filmmaking. It transforms written narratives into cinematic-quality storyboards, providing filmmakers with a visual guide that is not only accurate but emotionally resonant with the script’s essence through the use of AI technology.",
  },
  {
    id: 22,
    category: "Technology",
    name: "India eyes Brazil's ethanol technology to lower crude oil imports, says commerce secy",
    image:
      "https://images.moneycontrol.com/static-mcnews/2023/09/Modi-Lula-653x435.jpeg?impolicy=website&width=770&height=431",
    text: "India has been accelerating efforts to achieve 20 percent ethanol blending with petrol by 2025 in a bid to reduce reliance on crude oil imports. India is looking to benefit by taking a leaf out of the techniques used by the Latin American nation for ethanol blending",
  },
  {
    id: 23,
    category: "Technology",
    name: "TCS bribe-for-jobs probe outcome: 16 employees fired, 6 vendor entities debarred",
    image:
      "https://images.moneycontrol.com/static-mcnews/2018/01/Tata_Consultancy_Services_TCS-668x435.jpg?impolicy=website&width=770&height=431",
    text: "Sixteen employees were sacked and six firms were disbarred by Tata Consultancy Services after the IT major's investigation into the bribes-for-jobs scandal, the company said in an exchange filing on October 15.The investigation closure report comes months after the company looked into practices where staffing firms were allegedly involved in bribing senior executives overseeing recruitment processes in the company to get busines It took action against 19 employees in total -- 16 of whom were sacked and three removed from the function.",
  },
  {
    id: 24,
    category: "Technology",
    name: "Uttarakhand: CM Dhami launches Hexaware Technology office in Dehradun",
    image:
      "https://etimg.etb2bimg.com/photo/104436484.cms",
    text: "Uttarakhand: CM Dhami launches Hexaware Technology office in Dehradun. Dehradun: Uttarakhand CM Pushkar Singh Dhami on Saturday launched local office of Hexaware Technology at Doon Business Park, Transport Nagar in Dehradun.",
  },
  {
    id: 25,
    category: "Technology",
    name: "IIT-M patents technology that can generate power from tidal, wind sources",
    image:
      "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2022%2F06%2F27%2Fiit-m-pti-1121900-1656339970.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1",
    text: "Known as the Combined Power Generation Technology, the new innovation is an energy converter system that generates electricity in coastal areas to reduce electricity demand and be deployed based on the power requirements in the coastal area.",
  },
  {
    id: 26,
    category: "Technology",
    name: "How Blockchain Technology Works and Why It Matters",
    image:
      "https://www.analyticsinsight.net/wp-content/uploads/2023/10/How-Blockchain-Technology-Works-and-Why-It-Matters.jpg",
    text: "Blockchain technology is a ledger or an accounting tool that is accessible to anyone who participates in the network. The primary purpose of Blockchain is to record transactions. Unlike traditional ledger, it is decentralized where the access of the record is distributed and not governed by a single entity. It operates on a network of computers or nodes, and the nodes collectively participate in maintaining the ledger. The modus operandi of blockchain technology fosters transparency and security.",
  },
  {
    id: 27,
    category: "Technology",
    name: "Almost 100 crore people in South Asia not using internet despite mobile data coverage: Report",
    image:
      "https://images.indianexpress.com/2023/10/solen-feyissa-UWVJaDvXW_c-unsplash.jpg?w=640",
    text: "Mobile internet is becoming more accessible every year, with the number of people using mobile broadband increasing to 460 crores by the end of 2022.According to “The State of Mobile Internet Connectivity Report 2023” by GSMA, the non-profit organisation that represents mobile network operators worldwide, 57 per cent (around 460 crores) of the worlds population are now using mobile internet. Still, the adoption rate has slowed down compared to 2021.The report also states that despite having connectivity, 38 per cent of the total population is living in areas where mobile internet is available but are not using the service.",
  },
  {
    id: 28,
    category: "Technology",
    name: "JioBharat B1 4G phone with UPI payments support launched for Rs 1,299",
    image:
      "https://images.indianexpress.com/2023/10/JioBharat-B1.jpg?w=640",
    text: "Reliance Jio has launched its latest budget 4G feature phone called ‘JioBharat B1’. The new internet-enabled phone is the latest addition to the company’s existing portfolio of budget phones like the Jio V2 series and K1 Karbonn.Similar to other phones in the price bracket, the feature phone sports a 2.4-inch screen and also supports UPI payments using the pre-installed JioPay app. On the back, you get a Google Pixel 8-like camera island with an unspecified digital camera and an LED torch. Jio says the 2,000mAh battery can last up to 343 hours on standby mode.",
  },
  {
    id: 29,
    category: "Technology",
    name: "ISRO to hold more test under Gaganyaan vehicle missions after maiden test flight on",
    image:
      "https://images.indianexpress.com/2023/09/aditya-l1-6.jpg?w=640",
    text: "ISRO will conduct three more test vehicle missions under the ambitious Gaganyaan programme after the maiden TV-D1 test flight, which is scheduled on October 21, the space agency’s chairman S Somanath has said. The Gaganyaan project envisages a demonstration of the human spaceflight capability by launching a human crew to an orbit of 400 km The test vehicle development flight (TV-D1) will be conducted at the Satish Dhawan Space Centre in Sriharikota in Andhra Pradesh to test the crew module that is scheduled to house Indian astronauts during the human spaceflight late next year.",
  },
  {
    id: 30,
    category: "Technology",
    name: "Payment gateway fraud case of Rs 16,180 crore; Thane police makes fourth arrest",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202310/abrdvq2hifojlfzqjiusiqnd2e-sixteen_nine.jpg?size=948:533",
    text: "In connection with a substantial financial crime involving a breach of a payment gateway service provider's system and the misappropriation of over Rs 16,180 crore, the police in Thane, Maharashtra, have apprehended an additional individual, as confirmed by an official to PTI.With this most recent arrest, the police have now detained a total of four individuals in connection with the case registered at Naupada police station. The latest arrest pertains to Dinesh Dhondu Shirke (49), a partner in a business enterprise, who was apprehended in the western suburb of Andheri in neighbouring Mumbai. The official stated that Shirke's involvement in the crime was evident during the initial investigation conducted by the cyber cell.",
  },
  // fitness section
  {
    id: 31,
    category: "Fitness",
    name: "Bhagyashree shares the importance of exercise for elders",
    image:
      "https://images.indianexpress.com/2023/05/bhagyashree-1.jpg?w=640",
    text: "So many physical abilities deteriorate with normal ageing, including strength, swiftness and stamina. In addition to these muscular declines, there are also changes in coordinating the movements of the body. Together, this means that as you age, you may not be able to perform normal activities such as running, jogging, carrying heavy things and keeping your balance.",
  },
  
  {
    id: 32,
    category: "Fitness",
    name: "Shilpa Shetty Kundra challenges you to do biceps and wrists mobility stretch; should you?",
    image:
      "https://images.indianexpress.com/2023/10/shilpa-shetty-kundra_200_insta.jpg?w=640",
    text: "Our hands and arms are involved in various tasks these days from gripping a steering wheel to typing on a keyboard. These repetitive motions can create weakness and stiffness in your wrists, arms, and fingers.",
  },
  {
    id: 33,
    category: "Fitness",
    name: "Pre-workout snacks are important. These are some healthy ones you should try",
    image:
      "https://images.indianexpress.com/2023/09/fitness-man_1200_freepik.jpg?w=640",
    text: "You know that wild hunger that threatens to have you falling flat on your face while you're working out? That is precisely the reason why pre-workout snacks are important.enhancing performance and promoting overall well-being while you're exercising.Your body needs a readily available source of energy when you work out and healthy snacking provides this energy in the form of carbohydrates. For those who don't know, carbohydrates are the body's preferred fuel source during moderate to high-intensity activities, like a workout.",
  },
  {
    id: 34,
    category: "Fitness",
    name: "Watch: Chhavi Mittal gives a peek inside her gym bag",
    image:
      "https://images.indianexpress.com/2023/10/chhavi-mittal-1200.jpg?w=640",
    text: "Chhavi Mittal is, admittedly, a fitness freak who can't do without her regular sessions in the gym. Time and again, she has given fans a glimpse of her workouts. This time, however, Chhavi took everyone through her gym bag essentials.",
  },
  {
    id: 35,
    category: "Fitness",
    name: "Malaika Arora swears by this stress-relieving asana",
    image:
      "https://images.indianexpress.com/2023/06/malaika-arora.jpg?w=640",
    text: "Malaika Arora never fails to impress us with her fitness game. Her relentless dedication towards fitness is truly inspiring. She can often be spotted outside her gym and fitness studio. And the best part is that she shares small clips of her workout regimen to motivate all her fans and followers to value working out.",
  },
  {
    id: 36,
    category: "Fitness",
    name: "Jennifer Aniston reveals her 4-rule mantra to stay fit in her 50s",
    image:
      "https://images.indianexpress.com/2023/10/jennifer-aniston.jpg?w=640",
    text: "Jennifer Aniston, a Hollywood icon celebrated from her Friends era to her current role in the Morning Show, continues to captivate with her timeless beauty and enviable physique. Recently, she unveiled the four simple principles that underpin her fitness regimen in her 50s, offering insights that anyone can easily adopt.",
  },
  {
    id: 37,
    category: "Fitness",
    name: "Overcome overthinking with this easy yoga mudra",
    image:
      "https://images.indianexpress.com/2023/10/yoga-mudra.jpg?w=640",
    text: "Overthinking is a common struggle that many people face, and breaking free from this habit can be a daunting challenge. The constant rumination about past decisions, imagining worst-case scenarios, and second-guessing every choice can leave you mentally drained. Research has even shown that overthinking is closely associated with feelings of depression, anxiety, and post-traumatic stress disorder (PTSD).",
  },
  {
    id: 38,
    category: "Fitness",
    name: "Here's why you should eat in the Sukhasana pose",
    image:
      "https://images.indianexpress.com/2023/10/sukhasana.jpg?w=640",
    text: "Sitting on the floor and using your hands to enjoy a meal is a time-honored tradition in India, but have you ever wondered about the reasons behind it? Is there any wisdom in this practice?Recently, celebrity nutritionist Rujuta Diwekar shed light on a yoga posture that can enhance your eating experience. She recommends enjoying at least one meal while seated on the floor in Sukhasana, the cross-legged position.According to Diwekar, adopting the Sukhasana pose during meals can yield several benefits, including improved posture, enhanced focus on eating, and prevention of overeating.",
  },
  {
    id: 39,
    category: "Fitness",
    name: "Debina Bonnerjee struggles with building core strength; heres what can help",
    image:
      "https://images.indianexpress.com/2023/10/debina-bonnerjee_1200_insta.jpg?w=640",
    text: "Debina Bonnerjee has been taking small steps towards her fitness journey after her pregnancy. While she has been trying to stay consistent, as a mother, she feels it is “toughest” to get back core strength postpartum.Taking to her Instagram Stories, the actor and influencer expressed, “It is the toughest to get back core strength post pregnancy but you got to do it, Mama! This is showing love to yourself.”According to Dr Sushruta Mokadam, consultant obstetrician, Motherhood Hospital, Kharadi, Pune, rebuilding core strength after childbirth varies from person to person, depending on factors like the type of delivery and individual fitness levels. It typically takes several weeks to several months.Previously too, the mother of two spoke about how it takes a lot more than willingness to restart ones fitness journey after motherhood.",
  },
  {
    id: 40,
    category: "Fitness",
    name: "When Zerodhas CEO Nithin Kamath shared the importance of strength training: Integral to increasing health span",
    image:
      "https://images.indianexpress.com/2023/05/nithin-kamath.jpg?w=640",
    text: "Some time ago, Zerodhs co-founder Nithin Kamath had shared data on the gym membership adoption rateclaiming that only 0.2 per cent of Indias population (50 lakh people) were engaged in gym activities. Sharing the data from the World of Statistics on the percentage of the population of different countries that go to the gym, Kamath had written, “Most Indians think that you dont need strength training as you age. The truth is strength training becomes even more critical as we get older, especially after our 40s. The stronger we are, the more active we can be when we are older.”The data had revealed that Norway and Sweden led the list, with 22 per cent of their population going to the gym. India, on the other hand, was at the bottom of the list in terms of gym-goers.“Strength training is integral to increasing health span and we need more to focus on this,” he had said, adding that research consistently demonstrates how exercise surpasses any other interventions in terms of delaying death and preventing cognitive and physical decline.",
  },
  
  {
    id: 41,
    category: "Food",
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENob2NvbGF0ZSUyMENha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    text: "Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas was added to traditional cake recipes.[2] In 1828, Coenraad van Houten of the Netherlands developed a mechanical extraction method for extracting the fat from cacao liquor resulting in cacao butter and the partly defatted cacao, a compacted mass of solids that could be sold as it was rock cacao or ground into powder",
},
{
    id: 42,
    category: "Food",
    name: "Spices",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENoaWNrZW4lMjBDdXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    text: "Indian cuisine has a large amount of regional variation, with many variations on the basic chicken curry recipe. Indian chicken curry typically starts with whole spices, heated in oil. A sauce is then made with onions, ginger, garlic, and tomatoes, and powdered spices. Bone-in pieces of chicken are then added to the sauce, and simmered until cooked through.[1] In south India, coconut and curry leaves are also common ingredients.[2] Chicken curry is usually garnished with coriander leaves, and served with rice or roti",
},
{
    id: 43,
    category: "Food",
    name: "Fruit Salad",
    image: "https://images.unsplash.com/photo-1590590470233-195e7fec2965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZydWl0JTIwU2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    text: "Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their juices or a syrup. In different forms, fruit salad can be served as an appetizer or a side as a salad. When served as an appetizer, a fruit salad is sometimes known as a fruit cocktail (often connoting a canned product), or fruit cup (when served in a small container).",
},
{
    id: 44,
    category: "Food",
    name: "Chowmin",
    image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2023/Archanas_Kitchen_Millet_Hakka_Noodles_Chowmein_Recipe-16.jpg",
    text: "the term chow mein refers to fried noodles. More specifically, there are two main types of chow mein dishes: Steamed chow mein: In steamed chow mein, the noodles are initially flash-fried, then stir-fried while being tossed with additional ingredients like meat or vegetables and coated in a light sauce.",
},
{
    id: 45,
    category: "Food",
    name: "Cake",
    image: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/234187ae/strawberry-cake.jpg",
    text: "  It is a derivation of 'kaka', an Old Norse word. Medieval European bakers often made fruitcakes and gingerbread.",
},
{
    id: 46,
    category: "Food",
    name: "Biryani",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg",
    text: "Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat In some .",
},
{
    id: 47,
    category: "Food",
    name: "rasgulla",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/rasgulla-recipe-1-500x500.jpg",
    text: "Rasgulla is a syrupy dessert popular in the eastern part of South Asia. It is made from ball-shaped dumplings of chhena dough, cooked in light sugar syrup made of sugar. This is done until the syrup permeates the dumplings.",
},
{
    id: 48,
    category: "Food",
    name: "Jalebi",
    image: "https://www.boldsky.com/img/2021/01/jalebi-recipe-1610019725.jpg",
    text: "Jalebi is a popular sweet snack in South Asia, Middle East, Africa, and Mauritius. It goes by many names, including jilapi, zelepi, jilebi, jilipi, zulbia, jerry, mushabak, z’labia, zengoula or zalabia",
},
{
    id: 49,
    category: "Food",
    name: "Samosa",
    image: "https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg",
    text: "Samosas are a popular Indian snack, filled with spiced potatoes, peas, and sometimes meat. They are deep-fried to perfection."
},
{
    id: 50,
    category: "Food",
    name: "Sushi",
    image: "https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg",
    text: "Sushi is a Japanese dish consisting of vinegared rice, raw fish, and various ingredients. It is a delicacy enjoyed worldwide."
},
]);

  return(
    <>
     <Store.Provider value={[data, setData]}>
        {props.children}
     </Store.Provider>
    </>
  )
}

export default Storedata;
