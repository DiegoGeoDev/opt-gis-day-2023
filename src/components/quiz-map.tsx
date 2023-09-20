import { Map } from "./ol/map";
import { TileLayer } from "./ol/tile-layer";
import { Points } from "./ol/points";
import { OpenStreetMap } from "./ol/sources";

import { useQuizStore } from "@/stores/quizStore";

export function QuizMap() {
  const [quizzes] = useQuizStore((state) => [state.quizzes]);

  const points = quizzes
    .filter((quiz) => quiz.isQuestionComplete)
    .map((quiz) => ({ id: quiz.id, poi: quiz.poi }));

  return (
    <div className="flex-1">
      <Map zoom={0} center={[0, 0]} />
      <TileLayer source={OpenStreetMap} zIndex={0} />
      <Points points={points} epsg={"EPSG:4326"} zIndex={1} minZoom={8} />
    </div>
  );
}
