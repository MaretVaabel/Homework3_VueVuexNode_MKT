<template>
    <div class="container">
        <div v-for='post in posts' :key='post.id'>
            <div class="post">
                <div class="post">
                    <div class="post-author">
                        <span class="post-author-info">
                            <img :src='post.author.avatar' :alt='post.author.firstname + " " + post.author.lastname'>
                            <small>
                                {{ post.author.firstname | capitalLetter }} {{ post.author.lastname | capitalLetter }}
                            </small>
                        </span>
                        <small>{{ post.createTime }}</small>
                    </div>
                    <div class="post-image">
                        <img v-if="post.media && post.media.type == 'image'" :src="post.media.url" alt="" />
                        <video v-if="post.media && post.media.type == 'video'" :src="post.media.url" width="100%" controls />
                    </div>
                    <div class="post-title">
                        <h3>{{ post.text }}</h3>
                    </div>
                    <div class="post-actions">
                        <button type="button" class="like-button" v-bind:class="{ liked: likedPost }" @click="likePost">{{ post.likes }}
                        </button>
                    </div>
                </div>
            </div> 
        </div>   
     </div>            
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Posts',
    data () {
        return {
            likedPost: false,
        }
    },
    methods: {
        likePost () {
            this.likedPost = !this.likedPost;
        },
        ...mapGetters("posts", ["posts"])
    },
    
    filters: {
        capitalLetter: function(string) {
            if (!string) return ''
            var value = string.toLowerCase().split(' ');
            for (var index = 0; index < value.length; index++) {
                value[index] = value[index].charAt(0).toUpperCase() + value[index].substring(1);
            }
            return value.join(' ');
        }
    }
}
</script>

<style>
.container {
    width: 80%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: white;
}

.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
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
    left: 35px;
}

.post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
}

.post .post-title h3 {
    display: inline;
}

.post .post-title ~ .post-actions {
    padding: 10px;
}

.like-button {
    background-image: url('../../assets/like.png');
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: grey;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}

.like-button.liked {
    background-color: #01579b;
}
</style>