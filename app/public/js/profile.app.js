var app = new Vue({
  el: '#userProfile',
  data: {
    userImgLarge: '',
    userImgThumb: '',
    userName: '',
    userOrigin: '',
    userBD: '',
    userAge: '',
    UserEmail: '',
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          var userData = data.results[0];
          console.log(userData);
          this.userImgLarge = userData.picture.large;
          this.userImgThumb = userData.picture.thumbnail;
          this.userName = userData.name.first + ' ' + userData.name.last;
          this.userOrigin = userData.location.city + ', ' + userData.location.state;
          var trimBday = userData.dob.date.split('T');
          this.userBD = trimBday[0];
          this.userAge = userData.dob.age;
          this.UserEmail = userData.email;
        })

        .catch((error) => {
            console.error("Error:", error);
            fetch('./JSON/randomuser.me-sample.json')
              .then(response => response.json())
              .then(data => {
                var userData = data.results[0];
                console.log(userData);
                this.userImgLarge = userData.picture.large;
                this.userImgThumb = userData.picture.thumbnail;
                this.userName = userData.name.first + ' ' + userData.name.last;
                this.userOrigin = userData.location.city + ', ' + userData.location.state;
                var trimBday = userData.dob.date.split('T');
                this.userBD = trimBday[0];
                this.userAge = userData.dob.age;
                this.UserEmail = userData.email;
              })
          })
        }

},
created(){
  this.fetchUser();
  console.log('Not reloading full page')
}
})
