import React from 'react';
import { motion } from 'framer-motion';
import { Stat } from '../types';
import './Stats.css';

interface StatsProps {
  stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="stat-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <span className="stat-number">{stat.number}</span>
          <span className="stat-label">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;