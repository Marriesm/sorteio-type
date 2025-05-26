import type { ReactNode } from "react";
import './estilos.css';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;