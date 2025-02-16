// import { useState } from "react";
interface ReadMoreLessProps {
    text: string;
    maxLength: number;
    onToggle: (id: number) => void;
    expandedStates: Record<number, boolean>;
    id: number ;
  }
 export  const ReadMoreLess: React.FC<ReadMoreLessProps> = ({
    text,
    maxLength,
    onToggle,
    expandedStates,
    id,
  }) => {
  return (
    <div>
      <p className="mb-0">
        <small>{expandedStates[id] ? text : `${text.substring(0, maxLength)}...`}</small>
        {text.length > maxLength && (
          <span
            onClick={() => onToggle(id)}
            className="text-decoration-underline"
          >
            {expandedStates[id] ? "   Less" : "More"}
          </span>
        )}
      </p>
    </div>
  );
};