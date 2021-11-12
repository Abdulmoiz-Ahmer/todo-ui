import { Pact } from "@pact-foundation/pact";
import path from "path";
const globalAny: any = global;
globalAny.port = 4000;
globalAny.provider = new Pact({
  cors: true,
  port: globalAny.port,
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  dir: path.resolve(process.cwd(), "pacts"),
  spec: 2,
  pactfileWriteMode: "update",
  consumer: "hero-consumer",
  provider: "hero-provider",
  host: "127.0.0.1",
});

export default globalAny;
