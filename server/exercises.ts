interface Exercise {
  id: number;
  name: string;
  type: string; 
  muscleGroup: string;
  description: string;
  youtubeId: string;
  warmupSets: number;
  warmupReps: number;
  workingSets: number;
  workingReps: string;
  rest: string;
}

export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Bench Press",
    type: "upper",
    muscleGroup: "Chest",
    description: "A compound exercise that works the chest, shoulders, and triceps.",
    youtubeId: "IODxDxX7oi4",
    warmupSets: 2,
    warmupReps: 15,
    workingSets: 4,
    workingReps: "8-10",
    rest: "90 seconds"
  },
  {
    id: 2,
    name: "Lat Pulldown",
    type: "upper",
    muscleGroup: "Back",
    description: "An isolation exercise that targets the latissimus dorsi muscles.",
    youtubeId: "QZEqB6wUPxQ",
    warmupSets: 2,
    warmupReps: 15,
    workingSets: 4,
    workingReps: "10-12",
    rest: "60 seconds"
  },
  {
    id: 3,
    name: "Shoulder Press",
    type: "upper",
    muscleGroup: "Shoulders",
    description: "A compound exercise that works the deltoids and triceps.",
    youtubeId: "0AUGkch3tzc",
    warmupSets: 2,
    warmupReps: 15,
    workingSets: 3,
    workingReps: "10",
    rest: "90 seconds"
  },
  {
    id: 4,
    name: "Squats",
    type: "lower",
    muscleGroup: "Quadriceps",
    description: "A compound exercise that works the quadriceps, hamstrings, and glutes.",
    youtubeId: "YaXPRqUwItQ",
    warmupSets: 2,
    warmupReps: 15,
    workingSets: 4,
    workingReps: "8-10",
    rest: "120 seconds"
  },
  {
    id: 5,
    name: "Romanian Deadlift",
    type: "lower",
    muscleGroup: "Hamstrings",
    description: "A compound exercise that works the hamstrings, glutes, and lower back.",
    youtubeId: "GvRgijoJ2xY",
    warmupSets: 2,
    warmupReps: 12,
    workingSets: 3,
    workingReps: "10-12",
    rest: "90 seconds"
  },
  {
    id: 6,
    name: "Calf Raises",
    type: "lower",
    muscleGroup: "Calves",
    description: "An isolation exercise that targets the calf muscles.",
    youtubeId: "Dp4g-XNDFKI",
    warmupSets: 1,
    warmupReps: 20,
    workingSets: 4,
    workingReps: "15-20",
    rest: "60 seconds"
  }
];
