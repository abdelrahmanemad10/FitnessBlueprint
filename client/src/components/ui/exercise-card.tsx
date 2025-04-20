import { YouTubeEmbed } from "./youtube-embed";
import { Button } from "./button";
import { DumbbellIcon, ZapIcon } from "lucide-react";
import { Separator } from "./separator";

export interface ExerciseCardProps {
  name: string;
  youtubeId: string;
  muscleGroup: string;
  type: string;
  warmupSets: number;
  warmupReps: number;
  workingSets: number;
  workingReps: string;
  rest: string;
}

export function ExerciseCard({
  name,
  youtubeId,
  muscleGroup,
  type,
  warmupSets,
  warmupReps,
  workingSets,
  workingReps,
  rest,
}: ExerciseCardProps) {
  return (
    <div className="exercise-card bg-card rounded-lg overflow-hidden shadow-lg border border-border">
      <YouTubeEmbed videoId={youtubeId} title={`${name} Tutorial`} />
      <div className="p-6">
        <h3 className="font-display text-2xl mb-2 text-primary">{name}</h3>
        <div className="flex justify-between mb-4">
          <div className="text-sm text-muted-foreground flex items-center">
            <DumbbellIcon className="w-4 h-4 mr-1" /> {muscleGroup}
          </div>
          <div className="text-sm text-muted-foreground flex items-center">
            <ZapIcon className="w-4 h-4 mr-1" /> {type}
          </div>
        </div>
        <Separator className="my-4" />
        <div className="pt-2">
          <div className="flex justify-between mb-2">
            <span>Warm-up:</span>
            <span>
              {warmupSets} sets x {warmupReps} reps
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Working:</span>
            <span>
              {workingSets} sets x {workingReps} reps
            </span>
          </div>
          <div className="flex justify-between">
            <span>Rest:</span>
            <span>{rest}</span>
          </div>
        </div>
        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/10"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
