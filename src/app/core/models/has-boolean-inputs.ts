export class HasBooleanInputs {

  protected booleanInputs(keys: string[]): void {
    for (const key of keys) {

      // All missing keys are false
      if (!this.hasOwnProperty(key)) {
        this[key] = false;
      }

      // All strings, including '', are true. Boolean already work on their own
      if (typeof this[key] === 'string') {
        this[key] = this[key] || this[key] === '';
      }
    }
  }
}
