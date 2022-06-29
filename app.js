const vm = Vue.createApp({
  data() {
    return {
      rotate: {
        x: 0,
        y: 0,
        z: 0,
      },
      perspective: 30,
      perspectiveMin: 30,
      modalMsg: "",
    };
  },
  computed: {
    rotateStyle() {
      return {
        transform:
          (this.rotate.x ? `rotateX(${this.rotate.x}deg) ` : "") +
          (this.rotate.y ? `rotateY(${this.rotate.y}deg) ` : "") +
          (this.rotate.z ? `rotateZ(${this.rotate.z}deg) ` : ""),
      };
    },
    perspectiveStyle() {
      return {
        perspective: `${this.perspective}vw`,
      };
    },
  },
  methods: {
    reset() {
      for (let key in this.rotate) {
        this.rotate[key] = 0;
      }
      this.perspective = this.perspectiveMin;
    },
    random() {
      for (let key in this.rotate) {
        this.rotate[key] = Math.floor(Math.random() * 360);
      }
      this.perspective = Math.floor(
        Math.random() * (500 - this.perspectiveMin) + this.perspectiveMin
      );
    },
    copy() {
      let text = `
            .parent{
                perspective: ${this.perspective}px;
            }
            .child{
                transform: ${this.rotateStyle.transform};
            }
        `;
      navigator.clipboard.writeText(text);
      this.modalMsg = "styles are copied to clipboard";
      setTimeout(() => {
        this.modalMsg = "";
      }, 1500);
    },
  },
}).mount("#app");
