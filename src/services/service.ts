import * as crypto from 'crypto';

interface INextPageTokenOptions {
  channelId: number;
  lastId: string;
  params: object;
}

export default class Service {
  // nextPageToken key -> `channelId:lastId:requestDate`
  nextPageTokenKeyArray = ['requestDate'];
  password = 'ospiotport';
  algorithm = 'aes-192-cbc';
  key = crypto.scryptSync(this.password, 'salt', 24);
  iv = Buffer.alloc(16, 0);

  encryptNextPageToken(options: INextPageTokenOptions) {
    const str = `${options.channelId}:${options.lastId}:${this.nextPageTokenKeyArray.map(key => options.params[key]).join(':')}`;
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encrypted = cipher.update(str, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  decryptNextPageToken(str: string): INextPageTokenOptions {
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
    let decrypted = decipher.update(str, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    const decryptedSplit = decrypted.split(':');
    return {
      channelId: +decryptedSplit[0],
      lastId: decryptedSplit[1],
      params: this.nextPageTokenKeyArray.reduce((acc, key, index) => {
        return { ...acc, [key]: decryptedSplit[index + 2] };
      }, {}),
    };
  }
}
