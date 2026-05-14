import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonButton, IonIcon} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { logoGoogle, options } from "ionicons/icons";
import { supabase } from "../lib/supabaseClient";


const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
    navigation.push('/app', 'forward', 'replace');
  }
    
  };
  const signInWithGoogle = async () => {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo:'${window.location.origin}/app'
        }
      });
    

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonButton expand="full" onClick={signInWithGoogle} fill="outline" shape="round">
          <IonIcon icon = {logoGoogle} slot="start" />
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;