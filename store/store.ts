import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface UserStoreInterface {
  likedUsers: string[];
  likeUser: (username: string) => void;
  dislikeUser: (username: string) => void;
}

export const useUserStore = create<UserStoreInterface>()(
  devtools(
    persist(
      (set) => ({
        likedUsers: [],
        likeUser: (username: string) => {
          return set((state) => ({
            likedUsers: [...state.likedUsers, username],
          }));
        },
        dislikeUser: (username: string) => {
          return set((state) => ({
            likedUsers: [
              ...state.likedUsers.filter((user) => user !== username),
            ],
          }));
        },
      }),
      { name: 'liked-users' }
    )
  )
);
