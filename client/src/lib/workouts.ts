import { ExerciseCardProps } from "@/components/ui/exercise-card";

export interface ProgressPhoto {
  image: string;
  title: string;
  description: string;
}

export interface WorkoutTab {
  id: string;
  name: string;
  exercises: ExerciseCardProps[];
  progressPhoto: ProgressPhoto;
}

export const workoutTabs: WorkoutTab[] = [
  {
    id: "upper",
    name: "UPPER BODY",
    exercises: [
      {
        name: "Bench Press",
        youtubeId: "IODxDxX7oi4",
        muscleGroup: "Chest",
        type: "Compound",
        warmupSets: 2,
        warmupReps: 15,
        workingSets: 4,
        workingReps: "8-10",
        rest: "90 seconds",
      },
      {
        name: "Lat Pulldown",
        youtubeId: "QZEqB6wUPxQ",
        muscleGroup: "Back",
        type: "Compound",
        warmupSets: 2,
        warmupReps: 15,
        workingSets: 4,
        workingReps: "10-12",
        rest: "60 seconds",
      },
      {
        name: "Shoulder Press",
        youtubeId: "0AUGkch3tzc",
        muscleGroup: "Shoulders",
        type: "Compound",
        warmupSets: 2,
        warmupReps: 15,
        workingSets: 3,
        workingReps: "10",
        rest: "90 seconds",
      },
    ],
    progressPhoto: {
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      title: "AI TRAINER UPPER BODY",
      description: "Our AI Trainer has designed this optimal upper body program based on the latest exercise science and proven techniques.",
    },
  },
  {
    id: "lower",
    name: "LOWER BODY",
    exercises: [
      {
        name: "Squats",
        youtubeId: "YaXPRqUwItQ",
        muscleGroup: "Quadriceps",
        type: "Compound",
        warmupSets: 2,
        warmupReps: 15,
        workingSets: 4,
        workingReps: "8-10",
        rest: "120 seconds",
      },
      {
        name: "Romanian Deadlift",
        youtubeId: "GvRgijoJ2xY",
        muscleGroup: "Hamstrings",
        type: "Compound",
        warmupSets: 2,
        warmupReps: 12,
        workingSets: 3,
        workingReps: "10-12",
        rest: "90 seconds",
      },
      {
        name: "Calf Raises",
        youtubeId: "Dp4g-XNDFKI",
        muscleGroup: "Calves",
        type: "Isolation",
        warmupSets: 1,
        warmupReps: 20,
        workingSets: 4,
        workingReps: "15-20",
        rest: "60 seconds",
      },
    ],
    progressPhoto: {
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      title: "AI TRAINER LOWER BODY",
      description: "Our AI Trainer has crafted this optimal lower body routine to build strength, power, and endurance in your legs and core.",
    },
  },
];

export interface ScheduleDay {
  day: string;
  workout: string;
  focus: string;
  duration: string;
  isRest: boolean;
  isActive?: boolean;
}

export const weeklySchedule: ScheduleDay[] = [
  {
    day: "MON",
    workout: "Upper Body",
    focus: "Strength Focus",
    duration: "60 min",
    isRest: false,
    isActive: true,
  },
  {
    day: "TUE",
    workout: "Lower Body",
    focus: "Power Focus",
    duration: "45 min",
    isRest: false,
  },
  {
    day: "WED",
    workout: "Rest Day",
    focus: "Recovery",
    duration: "Stretching",
    isRest: true,
  },
  {
    day: "THU",
    workout: "Upper Body",
    focus: "Hypertrophy",
    duration: "50 min",
    isRest: false,
  },
  {
    day: "FRI",
    workout: "Lower Body",
    focus: "Volume Focus",
    duration: "60 min",
    isRest: false,
  },
  {
    day: "SAT",
    workout: "Full Body",
    focus: "Light Intensity",
    duration: "40 min",
    isRest: false,
  },
  {
    day: "SUN",
    workout: "Rest Day",
    focus: "Complete Rest",
    duration: "Recovery",
    isRest: true,
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Fitness Training",
    title: "STRENGTH TRAINING",
    description: "Building core strength with compound movements",
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Cardio Training",
    title: "CARDIO INTEGRATION",
    description: "Balancing strength with cardiovascular health",
  },
  {
    src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Form Focus",
    title: "FORM FOCUS",
    description: "Mastering technique for efficient muscle development",
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Equipment Variety",
    title: "EQUIPMENT VARIETY",
    description: "Incorporating diverse tools for complete fitness",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Training Environment",
    title: "TRAINING ENVIRONMENT",
    description: "Creating the optimal space for progress",
  },
  {
    src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    alt: "Consistent Routine",
    title: "CONSISTENT ROUTINE",
    description: "Day by day, building a stronger fitness routine",
  },
];

export interface SubscriptionPlan {
  name: string;
  price: number;
  isPopular?: boolean;
  features: {
    included: string[];
    excluded: string[];
  };
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: "FREE PLAN",
    price: 0,
    isPopular: true,
    features: {
      included: [
        "Access to all workouts",
        "Training schedule",
        "Exercise tutorials",
        "Weekly fitness tips",
        "Community support",
      ],
      excluded: [],
    },
  },
  {
    name: "AI PLAN",
    price: 0,
    features: {
      included: [
        "Everything in Free Plan",
        "AI-generated workout variations",
        "Personalized training tips",
        "Progress tracking tools",
        "Fitness goal recommendations",
      ],
      excluded: [],
    },
  },
  {
    name: "ADVANCED AI",
    price: 0,
    features: {
      included: [
        "Everything in AI Plan",
        "Advanced AI coaching",
        "Custom program generation",
        "Detailed progress analysis",
        "Recovery optimization",
      ],
      excluded: [],
    },
  },
];

export interface Article {
  image: string;
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: number;
}

export const articles: Article[] = [
  {
    image: "https://images.unsplash.com/photo-1616279969763-926394669080?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "RECOVERY STRATEGIES FOR MAXIMUM GAINS",
    description: "Learn how proper recovery techniques can significantly improve your muscle growth and overall performance in the gym.",
    author: {
      name: "Carlos Mendez",
      role: "Fitness Coach",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "NUTRITION FUNDAMENTALS FOR MUSCLE BUILDING",
    description: "Discover the essential nutritional principles that will support your muscle growth and help you achieve your fitness goals faster.",
    author: {
      name: "Laura Peterson",
      role: "Nutrition Specialist",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    rating: 4.5,
  },
];
