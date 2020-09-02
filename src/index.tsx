import Vue from "https://cdn.jsdelivr.net/npm/vue/dist/vue.esm.browser.js";

new Vue({
  el: "#app",
  data: {
    count: 0,
  },
  methods: {
    onClick() {
      this.count += 1;
      console.log("clicked", this.count, "times");
    },
  },

  render(h) {
    return (
      <div id="app">
        {[
          <header />,
          <button on={{ click: this.onClick }}>
            {["clicked ", this.count, " times"]}
          </button>,
          <footer />,
        ]}
      </div>
    );
  },
});
