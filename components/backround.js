'use client';

import Prism from "./Prism";

function Background() {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 0,
            opacity: 0.18,
            pointerEvents: 'none',
        }}>
            <Prism
                animationType="rotate"
                timeScale={0.4}
                height={3.5}
                baseWidth={5.5}
                scale={3.6}
                hueShift={0}
                colorFrequency={1}
                noise={0}
                glow={1.2}
                bloom={1.2}
            />
        </div>
    );
}

export default Background;
