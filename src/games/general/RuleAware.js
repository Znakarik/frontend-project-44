export default class RuleAware {
  constructor(rules) {
    this.rules = rules;
  }

  getRules() {
    return this.rules;
  }
}
