import { writeEventToDb } from './services/db';

export const scheduledEvent = async (event, context, callback) => {
  let response = {};
  try {
    const result = await writeEventToDb('events', {
      source: 'Scheduled Event',
      timestamp: new Date(),
      meta: 'Triggered via AWS schedule every minute',
      event,
    });
  } catch (e) {
    response = { statusCode: 500 };
  }
  response = { statusCode: 200 };
  callback(null, response);
};

export const s3Event = async (event, context, callback) => {
  let response = {};
  try {
    const result = await writeEventToDb('events', {
      source: 'S3 Bucket Event',
      timestamp: new Date(),
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
  try {
    const result = await writeEventToDb('events', {
      source: 'API Gateway Event',
      timestamp: new Date(),
      meta: `Body contents: '${event.body}'`,
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
}
