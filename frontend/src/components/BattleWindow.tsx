import React from 'react';
import './BattleWindow.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

interface State {
    username: string;
}

export default class BattleWindow extends React.Component<State> {
    state: State = {
        username: '',
    }

  render() {
      return (
          <Stack
              id="game-window-container">
              <Paper id="conditions-container">
                  <h1>conditions container</h1>
              </Paper>
              <Paper id="battle-map-container">
                  <h1>Battle map container</h1>
              </Paper>
              <Paper id="actions-container">
                  <h1>Actions container</h1>
              </Paper>
          </Stack>
      );
  }
}