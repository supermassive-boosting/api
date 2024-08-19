export default class Transaction {
  #id: string;
  #sender: string;
  #receiver: string;
  #amount: number;

  constructor({ id, sender, receiver, amount }: { id: string; sender: string; receiver: string; amount: number }) {
    this.#id = id;
    this.#sender = sender;
    this.#receiver = receiver;
    this.#amount = amount;
  }

  get id(): string {
    return this.#id;
  }

  get sender(): string {
    return this.#sender;
  }

  get receiver(): string {
    return this.#receiver;
  }

  get amount(): number {
    return this.#amount;
  }

  toJSON(): { id: string; sender: string; receiver: string; amount: number } {
    return {
      id: this.#id,
      sender: this.#sender,
      receiver: this.#receiver,
      amount: this.#amount,
    };
  }
}
