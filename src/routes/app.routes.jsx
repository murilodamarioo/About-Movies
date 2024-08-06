import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { CreateMovie } from '../pages/CreateMovie'
import { MoviePreview } from '../pages/MoviePreview'

export function AppRoutes() {
    const user = localStorage.getItem('@rocketnotes:user')

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<CreateMovie />} />
            <Route path="/details/:id" element={<MoviePreview />} />

            { !user && <Route path="*" element={<Navigate to="/" />} /> }
        </Routes>
    )
}