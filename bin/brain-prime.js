#!/usr/bin/env node

import mainIterforAllGames from '../src/index.js';
import { description, getGameInfo } from '../src/games/primeGame.js';

mainIterforAllGames(getGameInfo, description);