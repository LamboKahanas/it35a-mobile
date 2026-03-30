import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import FabComponent from '../components/FabComponent';
import { M } from 'vite/dist/node/types.d-aGj9QkWt';
import ModalComponent from '../components/ModalComponent';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
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
