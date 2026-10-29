import { Flower2, Layers, Leaf, Scissors, Trees, Wind } from "lucide-react";
import type { Service } from "@/config/site";

export const serviceIcons: Record<Service["icon"], typeof Leaf> = {
  Scissors,
  Trees,
  Layers,
  Wind,
  Leaf,
  Flower2,
};
