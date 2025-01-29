// import { createContext, ReactNode, useContext, useEffect, useState } from "react";
// import { AuthUser } from "../types/auth";
// import { Actor, HttpAgent } from "@dfinity/agent";
// import { canisterId, createActor } from "../../../declarations/server";

// interface authType {
//     user: AuthUser | null;
//     isLoading: boolean;
//     login: (email: string, password: string) => Promise<void>;
//     register: (email: string, username: string, password: string) => Promise<void>;
//     logout: () => Promise<void>;
// }

// const auth = createContext<authType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//     const [user, setUser] = useState<AuthUser | null>(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         checkAuthStatus();
//     }, []);

//     const checkAuthStatus = async () => {
//         try {
//             const session = localStorage.getItem('auth_session');
//             if (session) {
//                 const sessionData = JSON.parse(session);
//                 setUser(sessionData.user);
//             }
//         } catch (error) {
//             console.error('Gagal memeriksa status autentikasi:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     const login = async (email: string, password: string) => {
//         try {
//             const agent = new HttpAgent({
//                 host: import.meta.env.VITE_DFX_NETWORK === "ic" 
//                     ? "https://ic0.app" 
//                     : "http://localhost:4943",
//             });

//             if (import.meta.env.VITE_DFX_NETWORK !== "ic") {
//                 await agent.fetchRootKey();
//             }

//             const authActor = createActor(canisterId, {
//                 agent,
//             });

//             const result = await authActor.login(email, password);

//             if ('ok' in result) {
//                 const userData: AuthUser = {
//                     id: '1',
//                     email: result.ok.email,
//                     username: result.ok.username,
//                 };
//                 setUser(userData);
//                 localStorage.setItem('auth_session', JSON.stringify({
//                     user: userData,
//                 }));
//             } else {
//                 throw new Error(result.err);
//             }
//         } catch (error) {
//             console.error('Gagal login:', error);
//             throw error;
//         }
//     }

//     const register = async (email: string, username: string, password: string) => {
//         try {
//             const agent = new HttpAgent({
//                 host: import.meta.env.VITE_DFX_NETWORK === "ic" 
//                     ? "https://ic0.app" 
//                     : "http://localhost:4943",
//             });

//             if (import.meta.env.VITE_DFX_NETWORK !== "ic") {
//                 await agent.fetchRootKey();
//             }

//             const authActor = createActor(canisterId, {
//                 agent,
//             });

//             const result = await authActor.register(email, username, password);

//             if ('ok' in result) {
//                 const userData: AuthUser = {
//                     id: '1',
//                     email: result.ok.email,
//                     username: result.ok.username,
//                 };
//                 setUser(userData);
//                 localStorage.setItem('auth_session', JSON.stringify({
//                     user: userData,
//                 }));
//             } else {
//                 throw new Error(result.err);
//             }
//         } catch (error) {
//             console.error('Gagal register:', error);
//             throw error;
//         }
//     }

//     const logout = async () => {
//         try {
//             setUser(null);
//             localStorage.removeItem('auth_session');
//         } catch (error) {
//             console.error('Gagal logout:', error);
//             throw error;
//         }
//     }

//     return (
//         <auth.Provider value={{ user, isLoading, login, register, logout }}>
//             {children}
//         </auth.Provider>
//     )
// }

// export function useAuth() {
//     const context = useContext(auth);
//     if (!context) {
//         throw new Error('useAuth harus digunakan dalam AuthProvider');
//     }
//     return context;
// }