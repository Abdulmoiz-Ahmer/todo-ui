import path from "path";
import { Pact } from "@pact-foundation/pact";

export const mockProvider = new Pact({
  consumer: "todo-ui",
  provider: "todo-api",
  cors: true,
  log: path.resolve(__dirname, "../logs", "mockserver-integration.log"),
  logLevel: "error",
  dir: path.resolve(__dirname, "../pacts"),
});
