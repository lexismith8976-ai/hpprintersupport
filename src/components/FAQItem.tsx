import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../types';

interface FAQItemProps {
  faq: FAQ;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h3>{faq.question}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;  // ✅ Ye IMPORTANT hai!