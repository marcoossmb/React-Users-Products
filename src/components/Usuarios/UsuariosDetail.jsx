import React from 'react'
import { useParams } from 'react-router-dom'
import CardPost from './CardPost';
import { usePosts } from '../../services/hooks/usePosts';

const UsuariosDetail = () => {

    const params = useParams();
    const posts = usePosts(params.id)

    return (
        <div>
            {
                posts ? posts.map(post => (
                    <CardPost key={post.id} post={post} />
                )) : <p>Loading...</p>
            }
        </div>
    )
}

export default UsuariosDetail