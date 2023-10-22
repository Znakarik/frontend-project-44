export class RuleAware {
  constructor(rules) {
    this._rules = rules;
  }

  getRules = () => {
    return this._rules;
  };
}
