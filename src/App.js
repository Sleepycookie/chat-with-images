import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {

  return (
    <ChatEngine
      height="100vh"
      projectID='ac0c8977-677c-4305-abdf-e043cf696ffa'
      userName='d.sharchekev'
      userSecret='Aminadastan2013'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      
    />
  );
};



export default App;