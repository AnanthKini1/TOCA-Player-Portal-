import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read JSON files
const readJSONFile = (filename: string) => {
  const filePath = path.join(__dirname, '../../data', filename);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

// Load data
const profiles = readJSONFile('profiles.json');
const trainingSessions = readJSONFile('trainingSessions.json');
const appointments = readJSONFile('appointments.json');

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ message: 'Server is running!' });
});

// Get player profile by email
app.get('/api/players/email/:email', (req: Request, res: Response) => {
  const { email } = req.params;
  const player = profiles.find((p: any) => p.email === email);
  
  if (!player) {
    return res.status(404).json({ error: 'Player not found' });
  }
  
  res.json(player);
});

// Get training sessions for a player
app.get('/api/players/:playerId/sessions', (req: Request, res: Response) => {
  const { playerId } = req.params;
  const sessions = trainingSessions.filter((s: any) => s.playerId === playerId);
  
  // Sort by date (most recent first)
  sessions.sort((a: any, b: any) => 
    new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
  );
  
  res.json(sessions);
});

// Get appointments for a player
app.get('/api/players/:playerId/appointments', (req: Request, res: Response) => {
  const { playerId } = req.params;
  const playerAppointments = appointments.filter((a: any) => a.playerId === playerId);
  
  // Sort by date (soonest first)
  playerAppointments.sort((a: any, b: any) => 
    new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
  );
  
  res.json(playerAppointments);
});

// Get specific training session details
app.get('/api/sessions/:sessionId', (req: Request, res: Response) => {
  const { sessionId } = req.params;
  const session = trainingSessions.find((s: any) => s.id === sessionId);
  
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  
  res.json(session);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});