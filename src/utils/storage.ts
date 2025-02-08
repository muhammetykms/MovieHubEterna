// src/utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MovieDTO} from '../data/MoviesDTO';

const FAVORITE_MOVIES_KEY = 'favoriteMovies';
const USER_PROFILE_KEY = 'userProfile';

// Verileri AsyncStorage'a kaydeder
export const saveData = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving data to ${key}:`, error);
  }
};
// Verileri AsyncStorage'tan okur
export const loadData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error loading data from ${key}:`, error);
    return null;
  }
};

export const saveFavoriteMovies = async (movies: MovieDTO[]) =>
  saveData(FAVORITE_MOVIES_KEY, movies);

export const loadFavoriteMovies = async () => loadData(FAVORITE_MOVIES_KEY);

export const saveUserProfile = async (profile: any) =>
  saveData(USER_PROFILE_KEY, profile);

export const loadUserProfile = async () => loadData(USER_PROFILE_KEY);
