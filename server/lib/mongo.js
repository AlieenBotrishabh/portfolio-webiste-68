import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "portfolio";

let clientPromise;

function getFallbackStore() {
  if (!globalThis.__portfolioFallbackStore) {
    globalThis.__portfolioFallbackStore = { leads: [] };
  }

  return globalThis.__portfolioFallbackStore;
}

export async function getDatabase() {
  if (!uri) {
    return null;
  }

  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  const client = await clientPromise;
  return client.db(dbName);
}

export async function storeLead(lead) {
  const database = await getDatabase();

  if (!database) {
    const fallback = getFallbackStore();
    const document = { ...lead, _id: `${Date.now()}-${fallback.leads.length + 1}` };
    fallback.leads.unshift(document);
    return { insertedId: document._id, fallback: true };
  }

  const result = await database.collection("leads").insertOne({
    ...lead,
    createdAt: new Date(),
  });

  return { insertedId: result.insertedId, fallback: false };
}