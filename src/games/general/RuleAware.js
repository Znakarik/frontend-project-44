export class RuleAware {
  constructor(rules) {
    this._rules = rules;
  }

  getRules = () => this._rules;
}
