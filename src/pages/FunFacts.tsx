import React, { useEffect, useState } from 'react';
import './FunFacts.css';
import { FunFact } from '../types';
import { getFunFacts } from '../queries/getFunFacts';

const defaultFacts: FunFact[] = [
  {
    fact: "Terminal Over GUI Always",
    description: "I'd rather spend 30 minutes configuring a bash script or vim macro than 3 minutes clicking buttons in an interface.",
    category: "Coding Habit",
    icon: "💻"
  },
  {
    fact: "Taught 200+ Engineers & Learners",
    description: "Before deep-diving into doctoral research, I spent 6+ years teaching programming, machine learning, and data structures to engineering cohorts.",
    category: "Mentorship",
    icon: "🎓"
  },
  {
    fact: "Medical Jargon Enthusiast",
    description: "Working on oral oncology means my search history now includes more dental pathology terms and histopathology staining protocols than computer science theory.",
    category: "Research Life",
    icon: "🔬"
  },
  {
    fact: "Fuel of Choice: Black Coffee ☕",
    description: "Doctoral papers and debugging GPU CUDA out-of-memory errors are 90% driven by dark roast caffeine.",
    category: "Fuel",
    icon: "☕"
  },
  {
    fact: "Always Curious, Always Building",
    description: "Believer in continuous learning — building prototypes, exploring new ML architectures, and simplifying complex systems.",
    category: "Philosophy",
    icon: "🚀"
  }
];

const FunFacts: React.FC = () => {
  const [facts, setFacts] = useState<FunFact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFunFacts();
        if (data && data.length > 0) {
          setFacts(data);
        } else {
          setFacts(defaultFacts);
        }
      } catch (err) {
        console.error('Error fetching fun facts:', err);
        setFacts(defaultFacts);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="facts-container">
        <div className="facts-header">
          <h2 className="facts-title">⚡ Fun Facts</h2>
          <p className="facts-subtitle">Loading fun facts & trivia...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="facts-container">
      <div className="facts-header">
        <h2 className="facts-title">⚡ Fun Facts & Trivia</h2>
        <p className="facts-subtitle">
          A little peek into life beyond papers, epochs, loss functions, and terminal sessions.
        </p>
      </div>

      <div className="facts-grid">
        {facts.map((item, idx) => (
          <div key={idx} className="fact-card">
            <div className="fact-icon">{item.icon || "💡"}</div>
            {item.category && <span className="fact-category">{item.category}</span>}
            <h3 className="fact-title">{item.fact}</h3>
            {item.description && <p className="fact-description">{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFacts;
