import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Plan } from '../types';
import './PlanCard.css';

interface PlanCardProps {
  plan: Plan;
  index: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, index }) => {
  return (
    <motion.div
      className={`plan-card ${plan.isPopular ? 'popular' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {plan.isPopular && <div className="popular-badge">Most Popular</div>}
      <h3>{plan.name}</h3>
      <div className="price">
        {plan.price}
        {plan.period && <span>/{plan.period}</span>}
      </div>
      <ul className="plan-features">
        {plan.features.map((feature, i) => (
          <li key={i}>
            {feature.startsWith('✓') ? (
              <Check size={18} color="#0066b3" />
            ) : feature.startsWith('✗') ? (
              <X size={18} color="#999" />
            ) : null}
            <span>{feature.replace('✓ ', '').replace('✗ ', '')}</span>
          </li>
        ))}
      </ul>
      <button className={`plan-btn ${plan.isPopular ? 'popular-btn' : ''}`}>
        {plan.buttonText}
      </button>
    </motion.div>
  );
};

export default PlanCard;