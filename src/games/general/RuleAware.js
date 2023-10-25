export default class RuleAware {
  constructor(rules) {
    this.rules = rules;
  }

  getRules = () => this.rules;
}
