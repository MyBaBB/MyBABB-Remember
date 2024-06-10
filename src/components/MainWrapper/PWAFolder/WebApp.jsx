// eslint-disable-next-line no-unused-vars
import React from 'react';
import './WebApp.css';

const InstallApp = () => {
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;
    });

    const handleClick = async () => {
        if (deferredPrompt !== null) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                deferredPrompt = null;
            }
        }
    };
    const isAppMode = window.matchMedia('(display-mode: standalone)').matches;
  
    return (
      <div>
        {!isAppMode && (
          <button id="installApp" onClick={handleClick}>
           install
          </button>
        )}
      </div>

    );
};

export default InstallApp;