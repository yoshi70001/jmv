import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Dashboard de administración.
 * Muestra listas de noticias y proyectos obtenidas del backend.
 * Requiere que el JWT esté almacenado en localStorage bajo la clave 'jwt'.
 */
export const AdminDashboard: React.FC = () => {
  const [news, setNews] = useState<unknown[]>([]);
  const [projects, setProjects] = useState<unknown[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('jwt');

  // Redirige al login si no hay token
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const fetchData = async () => {
    try {
      const [newsRes, projectsRes] = await Promise.all([
        fetch('http://localhost:5000/api/news', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('http://localhost:5000/api/projects', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (!newsRes.ok || !projectsRes.ok) {
        throw new Error('Error al obtener datos del backend');
      }

      const newsData = await newsRes.json();
      const projectsData = await projectsRes.json();

      setNews(newsData);
      setProjects(projectsData);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error inesperado');
      }
    }
  };

  // Carga datos al montar el componente
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/login');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Panel de Administración</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Cerrar sesión
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Noticias</h2>
        {news.length === 0 ? (
          <p>No hay noticias.</p>
        ) : (
          <ul className="list-disc pl-5">
            {news.map((n) => (
              <li key={n.id}>
                <strong>{n.title}</strong>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Proyectos</h2>
        {projects.length === 0 ? (
          <p>No hay proyectos.</p>
        ) : (
          <ul className="list-disc pl-5">
            {projects.map((p) => (
              <li key={p.id}>
                <strong>{p.title}</strong>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
