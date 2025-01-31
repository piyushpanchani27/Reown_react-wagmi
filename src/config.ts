
import {
  createAppKit,
  useAppKit,
  useAppKitAccount,
  useAppKitEvents,
  useAppKitNetwork,
  useAppKitState,
  useAppKitTheme,
  useDisconnect,
  useWalletInfo
} from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { bscTestnet } from '@reown/appkit/networks'
import { coinbaseWallet } from 'wagmi/connectors';

export const projectId = import.meta.env.VITE_PROJECT_ID  // this is a public projectId only to use on localhost

const connectors = [
  coinbaseWallet({
    appName: 'AppKit React Example',
    appLogoUrl: 'https://avatars.githubusercontent.com/u/179229932?s=200&v=4',
  }),
  // Add other connectors if needed
];
const networks = [bscTestnet]

// Setup wagmi adapter
export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  connectors
})

// Create modal
const modal = createAppKit({
  
  adapters: [wagmiAdapter],
  networks,
  metadata: {
    name: 'AppKit React Example',
    description: 'AppKit React Wagmi Example',
    url: 'https://reown.com/appkit',
    icons: ['https://avatars.githubusercontent.com/u/179229932?s=200&v=4']
  },
  projectId,
  enableCoinbase: true, // true by default
  coinbasePreference: 'all',
  themeMode: 'dark',
  features: {
    analytics: false,
    socials :false,
    email: false,
    swaps: false,
    onramp: false,
  },
  // enableWalletConnect: false
  //  allWallets: 'ONLY_MOBILE'
})

export {
  modal,
  useAppKit,
  useAppKitState,
  useAppKitTheme,
  useAppKitEvents,
  useAppKitAccount,
  useWalletInfo,
  useAppKitNetwork,
  useDisconnect
}