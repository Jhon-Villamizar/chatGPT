import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import Chat from "./components/Chat";
import { Configuration, OpenAIApi } from 'openai';

const configuracion = new Configuration({
  apiKey: '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'
})

const openai = new OpenAIApi(configuracion)

function App() {
  const [message, setMessage] = useState<string[]>([]);
  const handlerMessage = (text: string) => {
    setMessage([...message, text]);
  };

  useEffect(() => {
    peticion();
  });

  ("You didn't provide an API key. You need to provide your API key in an Authorization header using Bearer auth (i.e. Authorization: Bearer YOUR_KEY), or as the password field (with blank username) if you're accessing the API from your browser and are prompted for a username and password. You can obtain an API key from https://platform.openai.com/account/api-keys.");

  const peticion = async () => {
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: 'user', content: message[message.length-1].toString()}]
    })
    console.log('RESULTADO CHATGPT => ', result);
    handlerMessage(result?.data?.choices[0]?.message?.content as string)
    
  };

  console.log(message);

  return (
    <div className="App">
      <Chat message={message} />
      <Input setMessage={handlerMessage} />
    </div>
  );
}

export default App;
