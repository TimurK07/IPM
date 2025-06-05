import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, createElement } from "react";
import "./App.css";
import { getAllRoutes } from "../src/utils/routes";

import Home from "../src/pages/Home/Home";
import Tasks from "../src/pages/Tasks/Tasks";
import Daily from "../src/pages/Daily/Daily";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Mailing from "../src/pages/Mailing/Mailing";
import GroupChat from "../src/pages/GroupChat/GroupChat";
import Users from "../src/pages/Users/Users";
import KnowledgeBase from "../src/pages/KnowledgeBase/KnowledgeBase";
import Link from "../src/pages/Link/Link";
import Document from "../src/pages/Document/Document";
import Settings from "../src/pages/Settings/Settings";
import SprintDuration from "../src/pages/Settings/SprintDuration/SprintDuration";
import DailyRating from "../src/pages/Settings/DailyRating/DailyRating";
import Notifications from "../src/pages/Settings/Notifications/Notifications";
import DailyToTasks from "../src/pages/Settings/DailyToTasks/DailyToTasks";

const pageComponents = {
  Home,
  Tasks,
  Daily,
  Mailing,
  GroupChat,
  Users,
  KnowledgeBase,
  Link,
  Document,
  Settings,
  SprintDuration,
  DailyRating,
  DailyToTasks,
  Notifications,
};

function AppContent() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Главная страница */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />

          {/* Остальные маршруты с MainLayout */}
          {getAllRoutes()
            .filter(route => route.path !== '/')
            .map(({ path, element }) => {
              const Component = pageComponents[element];
              // Список страниц, на которых не нужно показывать хедер
              const pagesWithoutHeader = ['/mailing', '/group-chat', '/daily', '/tasks', '/users', '/database', '/link', '/document', '/settings', '/sprint-duration', '/daily-rating', '/notifications', '/daily-to-tasks'];
              const showHeader = !pagesWithoutHeader.includes(path);

              return Component ? (
                <Route
                  key={path}
                  path={path}
                  element={
                    <MainLayout showHeader={showHeader}>
                      {createElement(Component)}
                    </MainLayout>
                  }
                />
              ) : null;
            })}

          <Route path={"/*"} element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
