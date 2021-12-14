import type { Network } from '@saberhq/solana-contrib';
import type { Commitment, HttpHeaders } from '@solana/web3.js';
import { clusterApiUrl, PublicKey } from '@solana/web3.js';

export const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

// Can be used in development mode only
export const localPrivateKey = isDev && process.env.REACT_APP_APP_LOCAL_WALLET_PRIVATE_KEY;

export const localMnemonic = isDev && process.env.REACT_APP_APP_LOCAL_WALLET_MNEMONIC;

export const swapHostFeeAddress = process.env.REACT_APP_SWAP_HOST_FEE_ADDRESS
  ? new PublicKey(process.env.REACT_APP_SWAP_HOST_FEE_ADDRESS)
  : null;

// the default commitment uesd by the Solana web3 connection when checking the blockchain state
export const defaultCommitment: Commitment =
  (process.env.REACT_APP_DEFAULT_COMMITMENT as Commitment) || 'confirmed';

// the amount of time to sleep after sending a transaction
// in order to work around a known blockchain web3 bug
export const postTransactionSleepMS = Number(process.env.REACT_APP_POST_TRANSACTION_SLEEP_MS);

export type NetworkObj = {
  name: string;
  network: Network;
  endpoint: string;
  endpointLabel?: string;
  wsEndpoint?: string;
  wsEndpointLabel?: string;
  httpHeaders?: HttpHeaders;
};

export type NetworkNameType =
  | 'serum-mainnet'
  | 'p2p-rpcpool'
  | 'solana-mainnet'
  | 'solana-devnet'
  | 'solana-testnet';

type NetworksByNameType = {
  // eslint-disable-next-line no-unused-vars
  [name in NetworkNameType]: NetworkObj;
};

export const NETWORKS: NetworksByNameType = {
  'p2p-rpcpool': {
    name: 'p2p-rpcpool',
    network: 'mainnet-beta',
    endpoint: 'https://p2p.rpcpool.com/',
  },
  'serum-mainnet': {
    name: 'serum-mainnet',
    network: 'mainnet-beta',
    endpoint: 'https://solana-api.projectserum.com/',
  },
  'solana-mainnet': {
    name: 'solana-mainnet',
    network: 'mainnet-beta',
    endpoint: `${clusterApiUrl('mainnet-beta')}/`,
  },
  'solana-devnet': {
    name: 'solana-devnet',
    network: 'devnet',
    endpoint: `${clusterApiUrl('devnet')}/`,
  },
  'solana-testnet': {
    name: 'solana-testnet',
    network: 'testnet',
    endpoint: `${clusterApiUrl('testnet')}/`,
  },
};

export const feeRelayerUrl = process.env.REACT_APP_FEE_RELAYER_URL;

export const appStorePath = 'https://testflight.apple.com/join/hxaQVX0E';
export const playStorePath = 'https://play.google.com/store/apps/details?id=org.p2p.wallet';

export const moonpayWidgetUrl = process.env.REACT_APP_MOONPAY_WIDGET_URL;
export const moonpayApiKey = process.env.REACT_APP_MOONPAY_API_KEY;
