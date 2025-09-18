import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';

import Login from './admin/pages/Signin';
import Dashboard from './admin/pages/Dashboard';
import Catalog from './admin/pages/Catalog';
import Settings from './admin/pages/Settings';

const AdminApp = () => {
  return (
    <Routes>
        <Route path="login" element={<Login />} />

        <Route element={<AdminLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/settings" element={<Settings />} />
        </Route>
    </Routes>
   )
}

export default AdminApp;