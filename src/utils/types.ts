export interface IMailbox {
  name: string;
  path: string;
}

export interface IMessage {
  id: string;
  date: string;
  from: string;
  subject: string;
  body?: string;
}

export interface ISentMessage {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export interface IContact {
  _id: string;
  name: string;
  email: string;
}
