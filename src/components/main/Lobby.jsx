"use client"
import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function Lobby() {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleJoinRoom = useCallback(() => {
    if (value.trim()) {
      router.push(`/videocall/${value}`);
    }
  }, [router, value]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter room code"
        className="input-field"
      />
      <button onClick={handleJoinRoom} className="join-button">
        Join
      </button>
    </>
  );
}
