import ModalSweet from "@/components/modals";
import AuthContext from "@/contexts/authContext";
import { CrudService } from "@/services/crud";
import { encryptUID } from "@/utils/encryption/encryptions";
import { async } from "@firebase/util";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useContext } from "react";
import { auth } from "../../../../firebase";

interface IValueLogin {
  email: string;
  password: string;
}
export const useInicioSesion = () => {
  const { setEmail } = useContext(AuthContext);
  const { create, getByIdNoHook } = CrudService();
  const rouer = useRouter();
  const useGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      await LoginHook(user);
    } catch (error) {
      await ModalSweet("!Error al iniciar sesión!", "error");
    }
  };
  const useFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      await LoginHook(user);
    } catch (error) {
      await ModalSweet("!Error al iniciar sesión!", "error");
    }
  };
  const useFacebookRegister = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      await registerHook(user);
    } catch (error) {
      await ModalSweet("!Error al iniciar sesión!", "error");
    }
  };
  const LoginHook = async (user: User) => {
    await getByIdNoHook("users", "userID", "==", user.uid).then(
      async (data) => {
        if (data === undefined) {
          await ModalSweet("Usuario no registrado", "error");
        } else {
          if (data.config) {
            rouer.push("/preferencias-alimenticias");
          } else {
            rouer.push("/home");
          }
          const encryptedUID = encryptUID(user.uid);
          localStorage.setItem("UDEN", encryptedUID);
          await ModalSweet("!Bienvenido!", "success");
        }
      }
    );
  };

  const registerHook = async (user: User) => {
    await getByIdNoHook("users", "userID", "==", user.uid).then(
      async (data) => {
        if (data === undefined) {
          if (user) {
            await create(
              {
                userID: user.uid,
                userName: user.displayName,
                userImg: user?.photoURL
                  ? user.photoURL
                  : "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                userMail: user.email,
                preferencia_alimentos: [],
                retoId: "",
                retos: [],
                config: true,
              },
              "users"
            );
            await ModalSweet("Usuario Registrado", "success");
          }
        } else {
          await ModalSweet("Usuario ya registrado", "error");
        }
      }
    );
  };
  const useGoogleRegister = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      await registerHook(user);
    } catch (error) {
      await ModalSweet("!Error al iniciar sesión!", "error");
    }
  };
  const LoginEmail = (values: IValueLogin) => {
    const { getByIdNoHook } = CrudService();
    try {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async ({ user }) => {
          if (user?.emailVerified) {
            setEmail(values.email);
            const encryptedUID = encryptUID(user.uid);
            localStorage.setItem("UDEN", encryptedUID);
            await getByIdNoHook("users", "userID", "==", user.uid).then(
              (data) => {
                if (data.config) {
                  rouer.push("/preferencias-alimenticias");
                } else {
                  rouer.push("/home");
                }
              }
            );
            await ModalSweet("!Bienvenido!", "success");
          } else {
            await ModalSweet("Verifica tu correo electrónico", "error");
          }
        })
        .catch(async () => {
          await ModalSweet("Usuario no encontrado", "error");
        });
    } catch (error) {
      const modalAsync = async () => {
        await ModalSweet("!Error al iniciar sesión!", "error");
      };
      modalAsync();
    }
  };
  const Register = async (values: IValueLogin) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = auth.currentUser;
      if (user) {
        sendEmailVerification(user)
          .then(async () => {
            await ModalSweet("Por favor revisa tu correo", "success");
            await create(
              {
                userID: auth.currentUser?.uid,
                userName: auth.currentUser?.displayName,
                userImg: auth.currentUser?.photoURL
                  ? auth.currentUser?.photoURL
                  : "https://media.istockphoto.com/id/529664572/es/foto/fondo-de-frutas.jpg?s=612x612&w=0&k=20&c=ZD4dqnpnwQDcCNtR1uPbYqnkaYND192I7H_4lKqEn5I=",
                userMail: auth.currentUser?.email,
                preferencia_alimentos: [],
                retoId: "",
                retos: [],
                config: true,
              },
              "users"
            );
          })
          .catch(async () => {
            await ModalSweet(
              "Error al enviar mensaje de verificación",
              "error"
            );
          });
      } else {
        await ModalSweet("Error al iniciar sesión", "error");
      }
    } catch (error) {
      await ModalSweet("Usuario ya registrado", "error");
    }
  };
  return {
    useGoogle,
    LoginEmail,
    Register,
    useGoogleRegister,
    useFacebook,
    useFacebookRegister
  };
};
