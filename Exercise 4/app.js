new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    enterclass: '',
    isVisible: true,
    userClass: '',
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(() => {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },

    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(() => {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});
