var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
  },
  methods: {
    changeMessage: function () {
      this.message = 'Chaaaaanged!'
    }
  }
})