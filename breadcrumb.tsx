import { useState } from "react";
import { Router, Switch, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Toaster } from "@/components/ui/toaster";
import Checker from "./pages/Checker";

function App() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Checker} />
        <Route component={Checker} />
      </Switch>
      <Toaster />
    </Router>
  );
}

export default App;
