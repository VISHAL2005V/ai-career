// services/careerService.js

// Mock career dataset
const allCareers = [
  { title: "AI Engineer", keywords: ["AI", "ML", "Python", "Deep Learning", "TensorFlow"] },
  { title: "Web Developer", keywords: ["JavaScript", "React", "Node.js", "HTML", "CSS"] },
  { title: "Data Scientist", keywords: ["Data", "Python", "ML", "Statistics", "Pandas","excel"] },
  { title: "Cybersecurity Analyst", keywords: ["Security", "Network", "Python", "Ethical Hacking", "Firewalls"] },
  { title: "Mobile App Developer", keywords: ["Android", "iOS", "Flutter", "React Native", "Java"] },
  { title: "Cloud Engineer", keywords: ["AWS", "Azure", "Docker", "Kubernetes", "DevOps"] },
  { title: "Blockchain Developer", keywords: ["Blockchain", "Ethereum", "Solidity", "Smart Contracts", "Web3"] },
  { title: "Game Developer", keywords: ["Unity", "C#", "Unreal Engine", "Game Design", "Graphics"] },
  { title: "UI/UX Designer", keywords: ["Figma", "Sketch", "Photoshop", "Wireframing", "Prototyping"] },
  { title: "DevOps Engineer", keywords: ["CI/CD", "Docker", "Kubernetes", "Linux", "Automation"] }
];
// Named export
export const getCareerSuggestions = (skills) => {
  if (!Array.isArray(skills) || skills.length === 0) return [];

  const lowerSkills = skills.map(s => s.toLowerCase());

  return allCareers
    .map(career => {
      const score = career.keywords.filter(k => lowerSkills.includes(k.toLowerCase())).length / career.keywords.length;
      return { ...career, score };
    })
    .sort((a, b) => b.score - a.score)
    .filter(c => c.score > 0);
};
