import { Timestamp } from "firebase/firestore";

export enum MessageType {
    RECIEVED = 'RECEIVED', SENT = 'SENT'
}

export interface Message {
    message: string,
    type: MessageType,
    time: Timestamp
}