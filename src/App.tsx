import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { useAtom } from "jotai";
import userAtom from "./store/userStore";

import SignIn from './pages/SignIn';
import Tabs from './components/Tabs';
import Register from './pages/Register';
import { CheckSession } from './services/Auth';
import { useEffect } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [user, setUser] = useAtom(userAtom)

  const checkToken = async () => {
    const userFromSession = await CheckSession()
    setUser(userFromSession)
    console.log("user from session: ", userFromSession)
  }
  
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     console.log('checking token')
  //     checkToken()
  //   }
  // }, [])

  return (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/my" component={Tabs} />
        <Route>
          <Redirect to="/my/club" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  )
  };

export default App;
