import { AuthProvider } from "@/context/auth-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/protected-route";
import LoginPage from "@/pages/login-page";
import Layout from "@/pages/layout";

function DashboardPlaceholder() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">Dashboard goes here</p>
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<DashboardPlaceholder />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}
