import { useEffect } from "react";
import useOnlineStatus from "./data/hooks/useOlineStatus";

function App() {
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (!isOnline) {
      alert("Sua conexao caiu!");
    }
  }, [isOnline]);

  return <div>{isOnline ? "Voce esta online" : "Voce nao esta online"}</div>;
}

export default App;
