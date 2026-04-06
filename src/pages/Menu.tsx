import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonSplitPane, IonMenu, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Home from "./Home";

const Menu: React.FC = () => {
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