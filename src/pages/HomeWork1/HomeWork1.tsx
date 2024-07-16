import style from "./hw.module.css";
import { useState } from "react";

export const HomeWork1 = () => {
  const [dicesSide, setDicesSide] = useState<number>(1);
  const [onAnimation, setOnAnimation] = useState<boolean>(false);
  const sides = [1, 2, 3, 4, 5, 6];
  const handleRollDice = () => {
    const rollDice = () => Math.floor(Math.random() * sides.length) + 1;
    setOnAnimation(true);
    setDicesSide(rollDice);
  };
  return (
    <div className={style.diceContainer}>
      <h1 className={style.title}>Игральный кубик</h1>
      <div className={onAnimation ? style.diceAnimated : style.dice}>
        {dicesSide}
      </div>
      <button
        className={style.button}
        onMouseDown={handleRollDice}
        onClick={() => setOnAnimation(false)}
      >
        Бросить кубик
      </button>
    </div>
  );
};
