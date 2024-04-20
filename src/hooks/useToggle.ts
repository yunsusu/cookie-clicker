import { useState } from "react";

export default function useToggle(initialState = false): [boolean, () => void] {
  const [isToggle, setIsToggle] = useState(initialState);

  const handleToggle = () => {
    setIsToggle(prev => !prev);
  };

  return [isToggle, handleToggle];
}
