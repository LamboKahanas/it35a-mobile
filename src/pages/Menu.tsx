import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonSplitPane, IonMenu, IonRouterOutlet, IonMenuToggle, IonIcon, IonItem, IonLabel, IonButton } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Home from "./Home";
import { homeOutline, logOutOutline } from "ionicons/icons";

const Menu: React.FC = () => {

    const path = [
        {name: 'Home', url: '/app/home', icon:homeOutline}
    ]
    return (
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                Menu
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {path.map((item, index) => (
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection="forward">
                                    <IonIcon icon={item.icon} slot="start" />
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}
                        <IonButton routerLink="/" routerDirection="back" expand="full">
                        <IonIcon icon={logOutOutline} slot="start" />
                        </IonButton>
                    </IonContent>
                </IonMenu>

                <IonRouterOutlet id="main">
                    <Route exact path="app/home" component={Home}/>
                    <Route exact path="app/">
                    <Redirect to="app/home"/>
                    </Route>


                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    );
}
export default Menu;