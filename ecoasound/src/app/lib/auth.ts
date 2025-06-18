"use client";
import { auth } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return unsubscribe;
  }, []);

  const logout = () => auth.signOut();

  return { user, logout };
};