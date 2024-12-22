#!/usr/bin/env node

import mainIterforAllGames from '../src/index.js';
import { description, getGameInfo } from '../src/games/calculateGame.js';

mainIterforAllGames(getGameInfo, description);
