import { MessagesRepository } from "./messages.repository";

export class MessagesService {

  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating it's own Dependencies ( Very Bad Practice)
    // We relies on Dependency injection concept :-
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
