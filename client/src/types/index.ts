// Player profile from API
export interface Player {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
  dob: string;
  centerName: string;
  createdAt: string;
}

// Training session from API
export interface TrainingSession {
  id: string;
  playerId: string;
  trainerName: string;
  startTime: string;
  endTime: string;
  numberOfBalls: number;
  bestStreak: number;
  numberOfGoals: number;
  score: number;
  avgSpeedOfPlay: number;
  numberOfExercises: number;
}

// Appointment from API
export interface Appointment {
  id: string;
  playerId: string;
  trainerName: string;
  startTime: string;
  endTime: string;
}