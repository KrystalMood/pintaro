import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/server/server.did.js";

const LOCAL_HOST = "http://127.0.0.1:4943";
const CANISTER_ID = "bd3sg-teaaa-aaaaa-qaaba-cai";

export const createActor = async () => {
  const agent = new HttpAgent({
    host: LOCAL_HOST,
  });

  // Only for local development
  if (process.env.NODE_ENV !== "production") {
    await agent.fetchRootKey();
  }

  const actor = Actor.createActor(idlFactory, {
    agent,
    canisterId: CANISTER_ID,
  });

  return actor;
}; 