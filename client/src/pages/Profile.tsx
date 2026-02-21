import { useState } from 'react';
import type { Player } from '../types';

function Profile() {
  const getPlayerFromStorage = (): Player | null => {
    const playerString = sessionStorage.getItem('player');
    if (!playerString) return null;
    return JSON.parse(playerString);
  };

  const [player] = useState<Player | null>(() => getPlayerFromStorage());

  if (!player) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">No player data found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Player Profile</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Profile Header */}
        <div className="bg-blue-500 text-white p-6">
          <h2 className="text-2xl font-bold">
            {player.firstName} {player.lastName}
          </h2>
          <p className="text-blue-100 mt-1">{player.email}</p>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <p className="text-sm text-gray-500 mb-1">First Name</p>
              <p className="text-lg font-semibold">{player.firstName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Last Name</p>
              <p className="text-lg font-semibold">{player.lastName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="text-lg font-semibold">{player.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Phone</p>
              <p className="text-lg font-semibold">{player.phone}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Gender</p>
              <p className="text-lg font-semibold">{player.gender}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
              <p className="text-lg font-semibold">
                {new Date(player.dob).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Training Center</p>
              <p className="text-lg font-semibold">{player.centerName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Member Since</p>
              <p className="text-lg font-semibold">
                {new Date(player.createdAt).toLocaleDateString()}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;