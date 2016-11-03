import { MongoClient } from 'mongodb';
import config from '../config.js';

export const writeEventToDb = (collection, data) => {
  const { MONGO_URL } = config;
  return new Promise(function(resolve, reject) {
    MongoClient.connect(MONGO_URL, (err, db) => {
      if (err) { reject(err); }
      const result = db.collection(collection).insert(data);
      db.close();
      resolve(result)
    });
  });
};
