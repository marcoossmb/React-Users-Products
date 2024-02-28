import { useEffect, useState } from "react";
import { getPosts } from "../getPosts";

export const usePosts = (id) => {

    const [post, setPost] = useState()

    const allposts = async () => {
        const data = await getPosts(id)
        setPost(data);
    };

    useEffect(() => {
        allposts();
    }, [id]);

    return post
}