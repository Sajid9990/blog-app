import { useNavigate } from "react-router-dom";

export const CommonNavigations = () => {
    const navigate = useNavigate();

    const redireactToBlogPage = (event, article) => {
        const params = new URLSearchParams();
        params.set("article_id", `${article.id}`);
        params.set("slug", `${article.slug}`);
        params.set("utm_source", "viralwolf");
        params.set("utm_medium", "mobile");
        params.set("utm_campaign", "may");
        params.set("category", "Test");
        params.set("language", "english");
        navigate(`/public/blog?${params.toString()}`);
    }

    const moreMethod = () => {
        navigate("/");
    }

    return {
        redireactToBlogPage,
        moreMethod
    }
}

// export default CommonNavigations;