import React from 'react';
import Preloader from '../components/Preloader'
const withSuspence = (Component)=>{
    return () => {
        return (
            <React.Suspense fallback={<Preloader />}>
                <Component />
            </React.Suspense>
        )
    }
}
export default withSuspence;