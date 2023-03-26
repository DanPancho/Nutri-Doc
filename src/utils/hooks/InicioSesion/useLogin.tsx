import ModalSweet from "@/components/modals";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../../firebase";

interface IValueLogin  {
  email: string,
  password: string
}
export const useInicioSesion = () => {
  const useGoogle = async () => {
    try { 
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      await ModalSweet('!Bienvenido!', 'success');
    }
    catch(error) {
      await ModalSweet('!Error al iniciar sesión!', 'error');
    } 
  }
  const LoginEmail =  (values: IValueLogin) => {
    try { 
      signInWithEmailAndPassword(auth, values.email, values.password).then(async ({user}) => {
        if(user?.emailVerified) {
         await ModalSweet('!Bienvenido!', 'success');
        }else { 
          ModalSweet('Verifica tu correo electrónico', 'error');
        }
      }).catch(() => {
        ModalSweet('Usuario no encontrado', 'error');
      });
    }
    catch(error) {
      ModalSweet('!Error al iniciar sesión!', 'error');
    }
  }
  const Register = async (values: IValueLogin) => {
    try { 
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = auth.currentUser;
      if (user) {
        sendEmailVerification(user)
          .then(async () => {
            await ModalSweet('Por favor revisa tu correo', 'success');
          })
          .catch(async() => {
            await ModalSweet('Error al enviar mensaje de verificación', 'error');
          });
      }else {
        await ModalSweet('Error al iniciar sesión', 'error');
      }
    }
    catch(error) {
      await ModalSweet('Error al iniciar sesión', 'error');
    } 
  }
  return {
    useGoogle,
    LoginEmail,
    Register
  }
}

