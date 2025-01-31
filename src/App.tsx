import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import ActionButtonList from './components/ActionButton'
import Footer from './components/Footer'
import InfoList from './components/InfoList'
import { useAppKitTheme, wagmiAdapter } from './config'

const queryClient = new QueryClient()

export default function App() {
  const { themeMode } = useAppKitTheme()
  document.documentElement.className = themeMode

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="page-container">
          <div className="logo-container">
            <img
              src={themeMode === 'dark' ? '/reown-logo-white.png' : '/reown-logo.png'}
              alt="Reown"
              width="150"
            />
            <img src="/appkit-logo.png" alt="Reown" width="150" />
          </div>

          <h1 className="page-title">React Wagmi </h1>

          <div className="appkit-buttons-container">
            <appkit-button />
            <appkit-network-button />
          </div>

          <ActionButtonList />
          <InfoList />
          <Footer />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}



// import { useState } from 'react'

// import './App.css'
// import Connect from './components/Connect'

// function App() {

//   return (
//     <>
//     <Connect />
//     </>
//   )
// }

// export default App
