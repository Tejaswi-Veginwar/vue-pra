new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            buttonClk: function(){
                alert("Button cliked");
            },

            listenInp: function(event){
                this.value = event.target.value;
            },


            listenToEnter: function(event){
                this.value = event.target.value;
            }
        }
    });