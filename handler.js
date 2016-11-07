import { writeEventToDb, collectionCount, trimCollection } from './services/db';

export const scheduledEvent = async (event, context, callback) => {
  let response = {};
  try {
    const result = await writeEventToDb('events', {
      source: 'Scheduled Event',
      timestamp: Date.now(),
      meta: 'Triggered via AWS schedule every minute',
      event,
    });
  } catch (e) {
    response = { statusCode: 500 };
  }
  response = { statusCode: 200 };
  callback(null, response);
};

export const trimEventsCollection = async (event, context, callback) => {
  const count = await collectionCount('events');
  if (count >= 50) {
    await trimCollection('events');
  }
  callback(null, {});
};

export const s3Event = async (event, context, callback) => {
  let response = {};
  try {
    const result = await writeEventToDb('events', {
      source: 'S3 Bucket Event',
      timestamp: Date.now(),
      meta: `Filename: '${event.Records[0].s3.object.key}'`,
      event,
    });
  } catch (e) {
    response = { statusCode: 500 };
  }
  response = { statusCode: 200 };
  callback(null, response);
};

export const apiGatewayEvent = async (event, context, callback) => {
  let response = {};
  const regex = /Body=(.+?)&/i;
  const sms = event.body.match(regex);
  try {
    const result = await writeEventToDb('events', {
      source: 'API Gateway Event',
      timestamp: Date.now(),
      meta: `Body contents: '${sms}'`,
      event,
    });
  } catch (e) {
    response = { statusCode: 500 };
  }
  response = { statusCode: 200 };
  callback(null, response);
};

export default {
  scheduledEvent,
  s3Event,
  apiGatewayEvent,
  trimEventsCollection,
}
