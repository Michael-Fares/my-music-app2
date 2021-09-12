  
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { TextField } from '@material-ui/core';

import AppBar from "./components/AppBar"


import "./App.css";

import Dashboard from "./components/Dashboard";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  

  return loggedIn ? (
        <div>
          
          <AppBar />
          <Dashboard />
        </div>
      ) : (
        <div>
          <AppBar />
          <div className="flex-column">
            <TextField />
            <TextField type="password"/>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setLoggedIn(true)}
            >
              Login
            </Button>
          </div>
        </div>
      );
    }
