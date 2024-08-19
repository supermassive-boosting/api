export default class Trust {
  #point: number;

  constructor(point: number = 50) {
    this.#point = point;
  }

  get point(): number {
    return this.#point;
  }

  increase(): void {
    this.#point += 1;
  }

  decrease(): void {
    this.#point -= 1;
  }

  punishment(): void {
    this.#point -= 5;
  }
}
