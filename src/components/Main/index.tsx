import React from "react";

import { useAppSelector, useAppDispatch } from "../../hooks"

import { getPosts } from "../../store/postSlice"

const Main = () => {
    const post = useAppSelector(state => state.post.detail)
    const posts = useAppSelector(state => state.post.list)

    const dispatch = useAppDispatch()


    return <main>Main</main>;
};

export default Main;