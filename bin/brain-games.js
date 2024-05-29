#!/usr/bin/env node

import {
  askName,
  showBaseGameStart,
  showGreetings,
  showRules,
} from "../src/functional/general/io.js";

showBaseGameStart();
const name = askName();
showGreetings(name);
showRules('Answer "yes" if the number is even, otherwise answer "no".');
