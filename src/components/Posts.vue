<template>
    <div class="post-container">
        <div v-for='post in posts' :key='post.id'>
            <div class="post">
                <div class="post-author">
                    <span class="post-author-info">
                        <img :src='post.author["avatar"]' :alt='post.author["firstname"] + " " + post.author["lastname"]'>
                        <small> {{ post.author.firstname }} {{ post.author.lastname }} </small>
                    </span>
                    <small> {{ post.createTime }} </small>
                </div>
                <div v-if="!(post.media==null)" class="post-image">
                    <img v-if="post.media.type == 'image'" :src="post.media.url" :alt="post.text">
                    <video v-else-if="post.media.type == 'video'" controls>
                        <source type="video/mp4" :src="post.media.url">
                    </video>
                </div>
                <div class="post-title">
                    <h3> {{ post.text | capitalLetter}} </h3>
                </div>
                <div class="post-actions">
                    <button type="button" class="like-button" :id="post.id" @click="toggleLike(post.id)">
                        {{ post.likes }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Posts',
    data () {
        return {}
    },
    methods: {
        toggleLike (id) {
            let element = document.getElementById(id);
            element.classList.toggle("liked");
        }
    },
    computed: {
        posts () {
            return this.$store.state.posts;
        }
    },
    mounted () {
        this.$store.dispatch('getPosts');
    },
    filters: {
        capitalLetter: function(string) {
            if (!string) return ''
            let value;
            value = string.toLowerCase().split(" ");
            for (let index = 0; index < value.length; index++) {
                value[index] = value[index].charAt(0).toUpperCase() + value[index].substring(1);
            }
            return value.join(" ");
        }
    }
}
</script>

<style scoped>
.post-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: white;
}

.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px hsla(200, 16%, 19%, 0.5);
    border-radius: 5px;
}

.post .post-author {
    padding: 10px;
}

.post .post-author::after {
    content: "";
    display: block;
    clear: both;
}

.post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;
    text-align: left;
}

.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    left: 40px;
}

.post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img, video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    text-align: left;
    padding: 10px;
    
}

.post .post-title h3 {
    display: inline;
    font-size: 20px;
}

.post .post-title ~ .post-actions {
    text-align: left;
    padding: 10px;
}

.like-button {
    background-image: url(../assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: silver;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
    border-radius: 3px;
}

.like-button.liked {
    background-color: dodgerblue;
    border-radius: 3px;
}
</style>