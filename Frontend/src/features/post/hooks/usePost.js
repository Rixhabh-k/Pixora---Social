import { useContext, useEffect } from "react";
import { getFeed } from "../services/post.api";
import { PostContext } from "../post.context.jsx";

export function usePost(){
    const context = useContext(PostContext)
    console.log(context)
    const {loading,setLoading,post,setPost,feed,setFeed} = context

    const handleGetFeed = async () => {
    setLoading(true)
    try {
        const data = await getFeed()
        setFeed(data.post.reverse())   // "posts" nahi, "post"
    } catch (err) {
        console.error("Feed fetch failed:", err)
    } finally {
        setLoading(false)
    }
}

    useEffect(() => {
        handleGetFeed()
    }, [])

    return { loading, feed, post, handleGetFeed }
 }