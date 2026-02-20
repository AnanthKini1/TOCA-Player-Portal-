import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Player, TrainingSession, Appointment } from '../types';

function Home() {
  const getPlayerFromStorage = (): Player | null => {
    const playerString = sessionStorage.getItem('player');
    if (!playerString) return null;
    return JSON.parse(playerString);
  };

  const [player] = useState<Player | null>(() => getPlayerFromStorage());
  const [sessions, setSessions] = useState<TrainingSession[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (playerId: string) => {
    try {
      // Fetch training sessions
      const sessionsResponse = await fetch(
        `http://localhost:3000/api/players/${playerId}/sessions`
      );
      const sessionsData = await sessionsResponse.json();
      setSessions(sessionsData);

      // Fetch appointments
      const appointmentsResponse = await fetch(
        `http://localhost:3000/api/players/${playerId}/appointments`
      );
      const appointmentsData = await appointmentsResponse.json();
      setAppointments(appointmentsData);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!player) {
      // No player found - shouldn't happen, but redirect to sign in
      window.location.href = '/';
      return;
    }

    // Fetch sessions and appointments
    fetchData(player.id);
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Welcome back, {player?.firstName}!
      </h1>

      {/* Past Training Sessions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Past Training Sessions</h2>
        <div className="grid gap-4">
          {sessions.length === 0 ? (
            <p className="text-gray-500">No past sessions found.</p>
          ) : (
            sessions.map((session) => (
              <Link
                key={session.id}
                to={`/sessions/${session.id}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {session.trainerName}
                    </h3>
                    <p className="text-gray-600">
                      {new Date(session.startTime).toLocaleDateString()} at{' '}
                      {new Date(session.startTime).toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">
                      {session.score}
                    </p>
                    <p className="text-sm text-gray-500">Score</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Upcoming Appointments */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
        <div className="grid gap-4">
          {appointments.length === 0 ? (
            <p className="text-gray-500">No upcoming appointments.</p>
          ) : (
            appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h3 className="font-semibold text-lg">
                  {appointment.trainerName}
                </h3>
                <p className="text-gray-600">
                  {new Date(appointment.startTime).toLocaleDateString()} at{' '}
                  {new Date(appointment.startTime).toLocaleTimeString()}
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;