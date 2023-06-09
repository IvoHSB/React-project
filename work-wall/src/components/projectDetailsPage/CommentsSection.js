import { setComment, getComments } from '../../services/commentService';
import { useState } from 'react';
import { getProfileByUserId } from '../../services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { setComments } from '../../store/project/project';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CommentsSection = ({ isLoading }) => {
    const dispatch = useDispatch();

    let currUserId = useSelector((state) => state.user._id);
    let accessToken = useSelector((state) => state.user.accessToken);

    let comments = useSelector((state) => state.project.comments);
    let _ownerId = useSelector((state) => state.project._ownerId);
    let _id = useSelector((state) => state.project._id);

    useEffect(() => {
        getComments(_id)
            .then(function (resp) {
                dispatch(setComments(resp));
            })
    }, []);

    let [commentContent, setCommentContent] = useState()

    const postComment = () => {
        if (commentContent) {
            let data = {
                content: commentContent,
                projectId: _id
            }
            getProfileByUserId(currUserId)
                .then(function (userProfile) {
                    data.profileId = userProfile[0]['_id'];
                    setComment(data, accessToken)
                        .then(function () {
                            getComments(_id)
                                .then(function (resp) {
                                    dispatch(setComments(resp));
                                    setCommentContent('');
                                })
                        })
                })
        }

    }

    return (
        <div className="container my-5">
            <h2>Comments</h2>
            {currUserId && currUserId != _ownerId ?
                <div className="mb-3">
                    <label htmlFor="textareaWriteComment" className="form-label">Write comment</label>
                    <textarea className="form-control" id="textareaWriteComment" name="writeComment" rows="3" defaultValue={commentContent} onChange={(event) => setCommentContent(event.target.value)}></textarea>
                    <button type="button" className="btn btn-primary" style={{ marginTop: "5px" }} onClick={postComment}>Post comment</button>
                </div>
                :
                null
            }
            {isLoading ?
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "100px" }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :
                <div className="row">
                    {comments.length ? comments.map(comment =>
                        <div key={comment._id} className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <Link style={{ textDecoration: "none" }} to={`/profile/${comment.profileId}`}><h5 className="card-title" style={{ cursor: 'pointer' }}>{comment.author.username}</h5></Link>
                                    <p className="card-text">{comment.content}</p>
                                </div>
                            </div>
                        </div>
                    )
                        :
                        <h4 className="text-center">No available comments.</h4>
                    }
                </div>
            }
        </div>
    );
}