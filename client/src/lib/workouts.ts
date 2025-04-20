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
      title: "MY PROGRESS",
      description: "Consistent upper body training has transformed my physique. Here's a glimpse of my journey following this program.",
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
      title: "LOWER BODY TRANSFORMATION",
      description: "Building a strong lower body foundation doesn't happen overnight. Here's my journey to stronger legs and improved performance.",
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
    src: "/attached_assets/WhatsApp Image 2025-04-20 at 15.39.04_68c34f60.jpg",
    alt: "Personal Gym Progress",
    title: "STRENGTH TRAINING",
    description: "Building core strength with compound movements",
  },
  {
    src: "/attached_assets/WhatsApp Image 2025-04-20 at 15.39.03_35f6efcd.jpg",
    alt: "Personal Gym Progress",
    title: "CARDIO INTEGRATION",
    description: "Balancing strength with cardiovascular health",
  },
  {
    src: "/attached_assets/WhatsApp Image 2025-04-20 at 15.39.04_c876daf0.jpg",
    alt: "Personal Gym Progress",
    title: "FORM FOCUS",
    description: "Mastering technique for efficient muscle development",
  },
  {
    src: "/attached_assets/WhatsApp Image 2025-04-20 at 15.39.04_353bf4bf.jpg",
    alt: "Personal Gym Progress",
    title: "EQUIPMENT VARIETY",
    description: "Incorporating diverse tools for complete fitness",
  },
  {
    src: "/attached_assets/WhatsApp Image 2025-04-20 at 15.39.04_3aba8d2e.jpg",
    alt: "Personal Gym Progress",
    title: "TRAINING ENVIRONMENT",
    description: "Creating the optimal space for progress",
  },
  {
    src: "/attached_assets/WhatsApp Image 2025-04-20 at 15.39.04_b4a4f8f4.jpg",
    alt: "Personal Gym Progress",
    title: "CONSISTENT ROUTINE",
    description: "Day by day, building a stronger version of myself",
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
    name: "BASIC PLAN",
    price: 12,
    features: {
      included: [
        "Access to all workouts",
        "Training schedule",
        "Exercise tutorials",
      ],
      excluded: [
        "Personalized feedback",
        "Nutrition guidance",
      ],
    },
  },
  {
    name: "PREMIUM PLAN",
    price: 29,
    isPopular: true,
    features: {
      included: [
        "Access to all workouts",
        "Training schedule",
        "Exercise tutorials",
        "Monthly feedback sessions",
        "Basic nutrition plan",
      ],
      excluded: [],
    },
  },
  {
    name: "ELITE PLAN",
    price: 79,
    features: {
      included: [
        "All Premium features",
        "Weekly check-ins",
        "Custom training program",
        "Detailed nutrition coaching",
        "1-on-1 video consultations",
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
