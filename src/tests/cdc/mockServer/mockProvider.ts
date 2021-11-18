import path from "path";
import { Pact } from "@pact-foundation/pact";

export const mockProvider = new Pact({
  consumer: "todo-ui",
  provider: "todo-api",
  cors: true,
  port: 4005,
  host: "127.0.0.1",
  log: path.resolve(__dirname, "../logs", "mockserver-integration.log"),
  logLevel: "error",
  dir: path.resolve(__dirname, "../pacts"),
});
