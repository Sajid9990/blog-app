import Article from "../../layout/admin/admin-pages/article/article";
import Dashboard from "../../layout/admin/admin-pages/dashboard";
import Icons from "../../layout/admin/admin-pages/Icons";
import Profile from "../../layout/admin/admin-pages/Profile";

var routes = [
    {
        path: "/article",
        name: "Add Article",
        icon: "ni ni-book-bookmark text-green",
        component: <Article />,
        layout: "/admin",
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: <Dashboard />,
        layout: "/admin",
    },
    {
        path: "/user-profile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: <Profile />,
        layout: "/admin",
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "ni ni-planet text-blue",
        component: <Icons />,
        layout: "/admin",
    },
    
];

export default routes;
