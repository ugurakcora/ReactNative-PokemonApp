import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/navigation/routes";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ backgroundColor: "#fff" }}>
        <Routes />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
