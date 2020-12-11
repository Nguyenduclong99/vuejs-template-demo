export default {
    mounted() {
     this.pinHeader();
    },
    methods: {
      pinHeader() {
        // var header =  document.getElementById("navbar");
        var mybutton = document.getElementById("myBtn");
        window.onscroll = function() { myFunction() };
        function myFunction() {
          if (
            document.body.scrollTop > 10 ||
            document.documentElement.scrollTop > 10
          ) {
            document.getElementById("navbar").style.position = "fixed";
            mybutton.style.display = "block";
            document.getElementById("navbar").style.boxShadow = " 3px 3px 3px #8D8B8A";
          } else {
             document.getElementById("navbar").style.position = "initial";
            mybutton.style.display = "none";
             document.getElementById("navbar").style.boxShadow = "none";
          }
        }
      },
      topFunction: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
      myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      },
      offMyFunction() {
        document.getElementById("myDropdown").classList.remove("show");
      },
    },
  };