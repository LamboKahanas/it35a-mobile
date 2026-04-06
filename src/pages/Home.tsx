import {IonContent,IonHeader,IonPage,IonTitle,IonToolbar,IonButtons,IonMenuButton} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import FabComponent from '../components/FabComponent';
import ModalComponent from '../components/ModalComponent';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer />
        <ModalComponent />
        <FabComponent />
      </IonContent>
    </IonPage>
  );
};

export default Home;