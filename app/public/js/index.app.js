var app = new Vue({
  el: '#commentPage',
  data: {
    comments: [],
    commentForm: {},
    },

  methods: {
    newCommentForm() {
      return {
        id: "",
        commentText: ""
      }
    },



    handleCommentForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('api/comments/create.php', {
        method:'POST',
        body: JSON.stringify(this.commentForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.comments = json;
        this.commentForm = this.newCommentForm();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCommentForm);
    },

  },
  created() {
    fetch("api/comments/")
    .then( response => response.json() )
    .then( json => {
      this.comments = json;
      console.log(json)}
    );
  }
})
