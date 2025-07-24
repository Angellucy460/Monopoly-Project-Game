import { useContext } from "react";
import { GameContext } from "./GameContext";

export default function useGame() {
  return useContext(GameContext);
}