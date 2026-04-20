import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { heart, thumbsUpOutline, chatbubbleOutline, share } from "ionicons/icons";

const Feed: React.FC = () => {
    
    const FanArt = [
        {name: 'Itto'},
        {name: 'Ice King'},
        {name: 'Parjanya'},
        {name: 'Monstie'},
        {name: 'Kuzco'},
    ]
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Feed</IonTitle>
                </IonToolbar>
            </IonHeader>
             <IonContent className = "ion-padding">
            <IonList inset = {true}>

            {FanArt.map((item, index) => (

                 <IonItem>
                    <IonCard>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <img style={{ width: "200px", height: "200px" }} alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                                </IonCol>

                                <IonCol>
                                <IonCardHeader>
                                    <IonCardTitle>{item.name}</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                                 </IonCol>
                            <IonCol>
                                <IonButton shape="round">
                                    <IonIcon slot="icon-only" icon={thumbsUpOutline}></IonIcon>
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton shape="round">
                                    <IonIcon slot="icon-only" icon={chatbubbleOutline}></IonIcon>
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton shape="round">
                                    <IonIcon slot="icon-only" icon={share}></IonIcon>
                                </IonButton>
                            </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                </IonItem>
    ))}
    </IonList></IonContent>
        </IonPage>
    );
}
export default Feed;