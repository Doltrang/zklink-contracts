// consumed in deploy_zklink.js
const DEPLOY_ZKLINK_LOG_PREFIX = "deploy";
const DEPLOY_LOG_DEPLOYER = "deployer";
const DEPLOY_LOG_GOVERNOR = "governor";
const DEPLOY_LOG_VALIDATOR = "validator";
const DEPLOY_LOG_VERIFIER_TARGET = "verifierTarget";
const DEPLOY_LOG_VERIFIER_TARGET_VERIFIED = "verifierTargetVerified";
const DEPLOY_LOG_PERIPHERY_TARGET = "peripheryTarget";
const DEPLOY_LOG_PERIPHERY_TARGET_VERIFIED = "peripheryTargetVerified";
const DEPLOY_LOG_ZKLINK_TARGET = "zkLinkTarget";
const DEPLOY_LOG_ZKLINK_TARGET_VERIFIED = "zkLinkTargetVerified";
const DEPLOY_LOG_DEPLOY_FACTORY = "deployFactory";
const DEPLOY_LOG_DEPLOY_FACTORY_BLOCK_HASH = "deployFactoryBlockHash";
const DEPLOY_LOG_DEPLOY_TX_HASH = "deployTxHash";
const DEPLOY_LOG_DEPLOY_BLOCK_NUMBER = "deployBlockNumber";
const DEPLOY_LOG_ZKLINK_PROXY = "zkLinkProxy";
const DEPLOY_LOG_VERIFIER_PROXY = "verifierProxy";
const DEPLOY_LOG_GATEKEEPER = "gatekeeper";
const DEPLOY_LOG_ZKLINK_PROXY_VERIFIED = "zkLinkProxyVerified";
const DEPLOY_LOG_VERIFIER_PROXY_VERIFIED = "verifierProxyVerified";
const DEPLOY_LOG_GATEKEEPER_VERIFIED = "gatekeeperVerified";

// consumed in deploy_lz_bridge.js
const DEPLOY_LZ_BRIDGE_LOG_PREFIX = "deploy_lz_bridge";
const DEPLOY_LOG_LZ_BRIDGE = "lzBridge";
const DEPLOY_LOG_LZ_BRIDGE_VERIFIED = "lzBridgeVerified";

// consumed in gas_estimate.js
const DEPLOY_GAS_ESTIMATE_LOG_PREFIX = "deploy_gas_estimate";
const DEPLOY_LOG_ADD_ETH = "addETH";
const DEPLOY_LOG_TOKEN2 = "token2";

// consumed in deploy_l1_gateway.js or deploy_l2_gateway.js
const DEPLOY_L1_GATEWAY_LOG_PREFIX = "deploy_l1_gateway";
const DEPLOY_L2_GATEWAY_LOG_PREFIX = "deploy_l2_gateway";
const DEPLOY_GATEWAY = "gateway";
const DEPLOY_GATEWAY_TARGET = "gatewayTarget";

// consumed in deploy_multicall
const DEPLOY_MULTICALL_LOG_PREFIX = "deploy_multicall"
const DEPLOY_MULTICALL = "multicall"
const DEPLOY_MULTICALL_VERIFIED = "multicallVerified"

module.exports = {
  DEPLOY_ZKLINK_LOG_PREFIX,
  DEPLOY_LOG_DEPLOYER,
  DEPLOY_LOG_GOVERNOR,
  DEPLOY_LOG_VALIDATOR,
  DEPLOY_LOG_VERIFIER_TARGET,
  DEPLOY_LOG_VERIFIER_TARGET_VERIFIED,
  DEPLOY_LOG_PERIPHERY_TARGET,
  DEPLOY_LOG_PERIPHERY_TARGET_VERIFIED,
  DEPLOY_LOG_ZKLINK_TARGET,
  DEPLOY_LOG_ZKLINK_TARGET_VERIFIED,
  DEPLOY_LOG_DEPLOY_FACTORY,
  DEPLOY_LOG_DEPLOY_FACTORY_BLOCK_HASH,
  DEPLOY_LOG_DEPLOY_TX_HASH,
  DEPLOY_LOG_DEPLOY_BLOCK_NUMBER,
  DEPLOY_LOG_ZKLINK_PROXY,
  DEPLOY_LOG_VERIFIER_PROXY,
  DEPLOY_LOG_GATEKEEPER,
  DEPLOY_LOG_ZKLINK_PROXY_VERIFIED,
  DEPLOY_LOG_VERIFIER_PROXY_VERIFIED,
  DEPLOY_LOG_GATEKEEPER_VERIFIED,
  DEPLOY_LZ_BRIDGE_LOG_PREFIX,
  DEPLOY_LOG_LZ_BRIDGE,
  DEPLOY_LOG_LZ_BRIDGE_VERIFIED,
  DEPLOY_GAS_ESTIMATE_LOG_PREFIX,
  DEPLOY_LOG_ADD_ETH,
  DEPLOY_LOG_TOKEN2,
  DEPLOY_L1_GATEWAY_LOG_PREFIX,
  DEPLOY_L2_GATEWAY_LOG_PREFIX,
  DEPLOY_GATEWAY,
  DEPLOY_GATEWAY_TARGET,
  DEPLOY_MULTICALL_LOG_PREFIX,
  DEPLOY_MULTICALL,
  DEPLOY_MULTICALL_VERIFIED
};
