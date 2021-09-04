<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="post in sampleBlogPost"
      :key="post.blogHTML"
      :post="post"
    />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
export default {
  name: "Home",
  components: {
    BlogPost,
  },
  data() {
    return {
      welcomeScreen: {
        title: "welcome",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, Javascript and more. Register today to nerver miss posts",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Fillter Title!",
          blogHTML: "This is fillter blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Fillter Title!",
          blogHTML: "This is fillter blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
