import { Route } from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { calendar, person, book } from 'ionicons/icons';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';

import ClubDetails from '../pages/ClubDetails';
import NewClub from '../pages/NewClub';

const Tabs: React.FC = () => (
<IonTabs>
    <IonRouterOutlet>
        <Route exact path="/my/:tab(club)">
            <Tab1 />
        </Route>
        <Route exact path="/my/:tab(calendar)">
            <Tab2 />
        </Route>
        <Route exact path="/my/:tab(profile)">
            <Tab3 />
        </Route>
        <Route path="/my/:tab(club)/new">
            <NewClub />
        </Route>
        <Route path="/my/:tab(club)/id/:id">
            <ClubDetails />
        </Route>
    </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="club" href="/my/club">
            <IonIcon aria-hidden="true" icon={book} />
            <IonLabel>Clubs</IonLabel>
        </IonTabButton>
        <IonTabButton tab="calendar" href="/my/calendar">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>Calendar</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/my/profile">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Profile</IonLabel>
        </IonTabButton>
        </IonTabBar>
    </IonTabs>
)

export default Tabs