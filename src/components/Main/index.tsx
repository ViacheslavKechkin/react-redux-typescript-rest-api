import React from "react";

import { useAppSelector, useAppDispatch } from "../../hooks"

import { setPosts } from "../../store/postSlice"

const Main = () => {
    const posts = useAppSelector(state => state.post.posts)

    const dispatch = useAppDispatch()

    dispatch(setPosts())

    return <main>Main</main>;
};

export default Main;