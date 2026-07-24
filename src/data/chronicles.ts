export interface ChronicleEvent {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: string;
  content: string;
  image: string | null;
}

import chroniclesData from "./chronicles.json";

export const chronicles: ChronicleEvent[] = chroniclesData.data;
