async function likeCode(){
    return new Promise((like)=>{
            like("liked post successfully")
    })
 }

async function commentCode(){
    return new Promise((commentPosted)=>{
            commentPosted("comment posted successfully in the post")
    })
 }
 
 async function createPost(){
    var post =new Promise((cPost)=>
    {
        cPost("post created successfully")
    })
    var [posts,comment,like]=await Promise.all([post,commentCode(),likeCode()])
    console.log(posts);
    console.log(comment);
    console.log(like);
}
createPost()


//but we implemented only post,likes,commment 
// implemente share,unshare,unpost,unlike,uncomment 
async function likeCode(like = true) {
    return new Promise((resolve, reject) => {
        if (like) resolve("liked post successfully");
        else reject("failed to like the post");
    });
}

async function commentCode(comment = true) {
    return new Promise((resolve, reject) => {
        if (comment) resolve("comment posted successfully on the post");
        else reject("failed to post comment on the post");
    });
}

async function createPost(create = true) {
    return new Promise((resolve, reject) => {
        if (create) resolve("post created successfully");
        else reject("failed to create post");
    });
}

async function sharePost(share = true) {
    return new Promise((resolve, reject) => {
        if (share) resolve("post shared successfully");
        else reject("failed to share post");
    });
}

async function unsharePost(unshare = true) {
    return new Promise((resolve, reject) => {
        if (unshare) resolve("post unshared successfully");
        else reject("failed to unshare post");
    });
}

async function unlikeCode(unlike = true) {
    return new Promise((resolve, reject) => {
        if (unlike) resolve("unliked post successfully");
        else reject("failed to unlike post");
    });
}

async function uncommentCode(uncomment = true) {
    return new Promise((resolve, reject) => {
        if (uncomment) resolve("uncommented on post successfully");
        else reject("failed to uncomment on post");
    });
}

async function unpostCode(unpost = true) {
    return new Promise((resolve, reject) => {
        if (unpost) resolve("post removed successfully");
        else reject("failed to remove post");
    });
}

async function performActions() {
    try {
        const [postResult, likeResult, commentResult, shareResult, unshareResult, unlikeResult, uncommentResult, unpostResult] =
            await Promise.all([
                createPost(true),
                likeCode(true),
                commentCode(true),
                sharePost(true),
                unsharePost(true),
                unlikeCode(true),
                uncommentCode(true),
                unpostCode(true)
            ]);
        console.log(postResult);
        console.log(likeResult);
        console.log(commentResult);
        console.log(shareResult);
        console.log(unshareResult);
        console.log(unlikeResult);
        console.log(uncommentResult);
        console.log(unpostResult);
    } catch (error) {
        console.error("Error during one of the actions:", error);
    }
}

performActions();
