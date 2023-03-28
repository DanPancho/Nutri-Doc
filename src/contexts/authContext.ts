import { createContext } from "react";

type AuthContextType = {
    email: string;
    setEmail: (email: string) => void
}

const AuthContext = createContext<AuthContextType>({
    email: '',
    setEmail: () => {}
})

export default AuthContext;