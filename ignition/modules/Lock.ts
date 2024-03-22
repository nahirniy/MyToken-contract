import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI: bigint = 1_000_000_000n;

const LockModule = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);
  const additionalArgument = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  const lock = m.contract("MyToken", [additionalArgument]);

  return { lock };
});

export default LockModule;
