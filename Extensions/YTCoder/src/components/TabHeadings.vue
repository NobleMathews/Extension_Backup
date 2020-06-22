<template>
  <div id="warc-tab-headings">
    <button v-on:click="defaultOpt" :class="{active: defaultActive}">Default Options</button>
    <button v-on:click="coder" :class="{active: coderActive}">YTCoder</button>
    <div v-html="sidebarStyles"></div>
  </div>
</template>

<script>
import Vue from "vue";

function scrollTo(scrollTo) {
  Vue.nextTick(function() {
    window.scroll(0, scrollTo);
  });
}

const TabHeadings = {
  data: function() {
    return {
      defaultActive: true,
      coderActive: false,
      defaultOptScrollTop: 0,
      coderScrollTop: 0
    };
  },
  methods: {
    saveScrollTop() {
      let scrollTop = document.documentElement.scrollTop;
      if (this.defaultActive) {
        this.defaultOptScrollTop = scrollTop;
      }
      if (this.coderActive) {
        this.coderScrollTop = scrollTop;
      }
    },
    defaultOpt() {
      this.saveScrollTop();
      this.coderActive = false;
      this.defaultActive = true;
      scrollTo(this.defaultOptScrollTop);
    },
    coder() {
      this.saveScrollTop();
      this.defaultActive = false;
      this.coderActive = true;
      scrollTo(this.coderScrollTop);
    }
  },
  computed: {
    sidebarStyles: function() {
      if (this.defaultActive) {
        return `
        <style>
        #YTCoder{
          display:none !important;
        }

        #warc-tab-headings{
            background: none !important;
        }
        #warc-tab-headings> button{
          background-image: linear-gradient(45deg, #f1c40f 50%, #F9F9F9 50%) !important;
          color:black !important;
        }
        </style>
      `;
      }
      if (this.coderActive) {
        return `
        <style>
        #YTCoder{
          display:block !important;
        }
        #warc-tab-headings{
            background: none !important;
        }
        #warc-tab-headings> button{
            background-image: linear-gradient(45deg, #f1c40f 50%, #2c3e50 50%) !important;
          color:white !important;
        }
          #primary-inner.ytd-watch-flexy > *:not(#player):not(#coder):not(#croptemppar) {
            height: 0;
            overflow: hidden;
          }
          ytd-live-chat-frame {
            display: none;
          }
        </style>
      `;
      }
    }
  }
};

export default TabHeadings;
</script>

<style scoped>
div {
  position: fixed;
  top: 60px; 
  z-index: 10000;


}
#warc-tab-headings{
    background: #2c3e50;
    border-radius: 0.6em;
    padding:10px;
}
/* button {
  font-size: 20px;
  margin: 0px 10px;
}*/
button.active {
    outline: 0;
  outline-style: none;
  -moz-outline-style: none;
} 
button {
    border-color: #f1c40f;
  color: black;
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  display: inline-flex;
  align-self: center;
    font-size: 1.5rem;
    padding:5px;
    font-weight: 400;;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
}
/* .btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
} */

button:hover {
  background-position: 0;
}
</style>
