export interface Review {
  id: string;
  name: string;
  country: string;
  flag: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

const names = [
  "Liam", "Noah", "Oliver", "Elijah", "James", "William", "Benjamin", "Lucas", "Henry", "Theodore",
  "Emma", "Olivia", "Ava", "Charlotte", "Sophia", "Amelia", "Isabella", "Mia", "Evelyn", "Harper",
  "Mateo", "Daniel", "Michael", "Mason", "Sebastian", "Ethan", "Logan", "Owen", "Samuel", "Jacob",
  "Gianna", "Abigail", "Luna", "Ella", "Elizabeth", "Sofia", "Avery", "Scarlett", "Grace", "Chloe",
  "Jackson", "Levi", "Jack", "Alexander", "Julian", "Aiden", "Luca", "Wyatt", "David", "Carter",
  "Penelope", "Riley", "Layla", "Lillian", "Nora", "Zoey", "Mila", "Aubrey", "Hannah", "Lily",
  "Gabriel", "Anthony", "Dylan", "Leo", "Lincoln", "Jaxon", "Asher", "Christopher", "Josiah", "Andrew",
  "Addison", "Eleanor", "Natalie", "Luna", "Savannah", "Brooklyn", "Leah", "Zoe", "Stella", "Hazel",
  "Thomas", "Charles", "Caleb", "Isaiah", "Ryan", "Nathan", "Adrian", "Christian", "Maverick", "Colton"
];

const countries = [
  { code: "US", flag: "🇺🇸", name: "USA" },
  { code: "GB", flag: "🇬🇧", name: "UK" },
  { code: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "FR", flag: "🇫🇷", name: "France" },
  { code: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "IN", flag: "🇮🇳", name: "India" },
  { code: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "KR", flag: "🇰🇷", name: "South Korea" }
];

const comments = [
  "Unbelievable deal! I was skeptical but it works perfectly.",
  "Got my code instantly. Photoshop works great.",
  "Best Black Friday purchase I've ever made. Saved me hundreds.",
  "Firefly AI is a game changer. Love it!",
  "Activation was smooth. Highly recommend.",
  "Finally I can afford the full suite. Thank you!",
  "Works on my Mac and iPad without issues.",
  "Legit offer. I'm using Premiere Pro right now.",
  "Excellent customer support. They helped me activate in minutes.",
  "I'm a student and this is a lifesaver.",
  "Can't believe it's only $0.50. Insane value.",
  "All apps are included as promised. Very happy.",
  "Cloud storage works perfectly. Syncing is fast.",
  "Just upgraded my design workflow. Thanks todayfilmmakers!",
  "I told all my friends about this. Don't miss out.",
  "10/10 would buy again. Seamless experience.",
  "The real deal. Adobe account shows full access.",
  "Super easy setup. Received email immediately.",
  "Why pay full price? This is amazing.",
  "Love the Firefly integration in Photoshop.",
  "Was worried it might be a scam, but it's 100% real.",
  "Perfect for my freelance work.",
  "Adobe XD and Illustrator run smoothly.",
  "Great for video editing. After Effects is included!",
  "My creative cloud desktop app updated instantly.",
  "No hidden fees. Just $0.50.",
  "Fantastic service. Five stars!",
  "I've been using it for a week now. No problems.",
  "Saved so much money. This is the best deal of the year.",
  "Professional tools for pennies. Incredible."
];

const avatars = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/7.jpg",
  "https://randomuser.me/api/portraits/men/8.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg"
];

export const reviews: Review[] = Array.from({ length: 90 }, (_, i) => {
  const name = names[i % names.length];
  const country = countries[i % countries.length];
  const comment = comments[i % comments.length];
  const rating = i % 10 === 0 ? 4 : 5; // Mostly 5 stars
  const avatar = avatars[i % avatars.length];
  
  return {
    id: `review-${i}`,
    name: name,
    country: country.name,
    flag: country.flag,
    rating: rating,
    text: comment,
    date: "2 days ago",
    avatar: avatar
  };
});
