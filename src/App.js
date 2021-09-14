  
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
          <div className="flex-column textfield-margin">
            <TextField required="true" placeholder="Username" label="Username"/>
            <TextField required="true" placeholder="Password" type="password" label="Password"/ >
              <div className="margin-top-sm button-wide">
            <Button fullWidth = {true}
              color="primary"
              variant="contained"
              onClick={() => setLoggedIn(true)}
               >
              Login
            </Button>
            </div>
          </div>
        </div>
      );
    }
