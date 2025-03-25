import ArticleList from "../../layout/admin/admin-pages/article/articleList";
import Dashboard from "../../layout/admin/admin-pages/dashboard";

var routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: <Dashboard />,
        layout: "/admin",
    },
    {
        path: "/article",
        name: "Article",
        icon: "ni ni-book-bookmark text-green",
        component: <ArticleList />,
        layout: "/admin",
    }
];

export default routes;
