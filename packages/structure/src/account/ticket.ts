export default class Ticket {
  #id: number;
  #issue: string;
  #status: string;
  #priority: string;
  #createdAt: Date;
  #updatedAt?: Date;
  #resolvedAt?: Date;

  constructor({
    id,
    issue,
    status = 'open',
    priority = 'normal',
    createdAt = new Date(),
    updatedAt,
    resolvedAt,
  }: {
    id: number;
    issue: string;
    status: string;
    priority: string;
    createdAt: Date;
    updatedAt: Date;
    resolvedAt: Date;
  }) {
    this.#id = id;
    this.#issue = issue;
    this.#status = status;
    this.#priority = priority;
    this.#createdAt = createdAt;
    this.#updatedAt = updatedAt;
    this.#resolvedAt = resolvedAt;
  }

  get id(): number {
    return this.#id;
  }

  get issue(): string {
    return this.#issue;
  }

  get status(): string {
    return this.#status;
  }

  get priority(): string {
    return this.#priority;
  }

  get createdAt(): Date {
    return this.#createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.#updatedAt;
  }

  get resolvedAt(): Date | undefined {
    return this.#resolvedAt;
  }

  /*
  ! throw error göndermiyoruz. ChatGPT saçmalıkları temizlenecek. 
  */
  updateStatus(status: string): void {
    const validStatuses = ['open', 'in-progress', 'resolved', 'closed'];
    if (!validStatuses.includes(status)) {
      throw new Error(`Geçersiz durum: ${status}`);
    }
    this.#status = status;
    this.#updatedAt = new Date();
  }

  updatePriority(priority: string): void {
    const validPriorities = ['low', 'normal', 'high'];
    if (!validPriorities.includes(priority)) {
      throw new Error(`Invalid priority: ${priority}`);
    }
    this.#priority = priority;
    this.#updatedAt = new Date();
  }

  resolve(): void {
    if (this.#status === 'resolved') {
      throw new Error('Ticket is already resolved');
    }
    this.#status = 'resolved';
    this.#resolvedAt = new Date();
    this.#updatedAt = new Date();
  }
}
