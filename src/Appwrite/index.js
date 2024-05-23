import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";

export const database = new Databases(client);

export const dbid = import.meta.env.VITE_DB_ID; // Replace with your database ID
export const col_id = import.meta.env.VITE_COL_ID; // Replace with your collection ID
