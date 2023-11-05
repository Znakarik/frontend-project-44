#!/usr/bin/env node

import {askName, showBaseGameStart, showGreetings} from '../src/functional/general/io.js'

showBaseGameStart();
const name = askName();
showGreetings(name);
