// https://vuejs.org/guide/essentials/application.html
const vueSection1 = Vue.createApp({
  // data, functions ...etc

  // template: "<h2>Default template</h2>",

  data() {
    return {
      showBooks: false,
      showMouseEvents: false,
      showLists: false,
      showAttributeBinding: false,
      showDynamicClasses: false,
      showComputedProperties: true,
      //-------------
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      //-------------
      listOfBooks: [
        {
          title: 'Name of the Wind',
          author: 'Patrick Rothfuss',
          img: 'assets/01.jpg',
          isFavourite: true,
        },
        {
          title: 'The Way of Kings',
          author: 'Brandon Sanderson',
          img: 'assets/02.jpg',
          isFavourite: false,
        },
        {
          title: 'The Final Empire',
          author: 'Brandon Sanderson',
          img: 'assets/03.jpg',
          isFavourite: true,
        },
      ],
      //-------------
      posX: 0,
      posY: 0,
      //-------------
      myUrl: 'www.google.com',
      //-------------
      filteredBooksEn: false,
    };
  },

  methods: {
    changeTitle() {
      this.title = '(( NEW TEXT ))';
    },
    changeTitle2(newTitle) {
      this.title = newTitle;
    },
    //------------
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    //------------
    handleEvents(event, params) {
      console.log(event, event.type);
      if (params) console.log('Parameters: ', params);
    },
    handleMouseMove(event) {
      this.posX = event.offsetX;
      this.posY = event.offsetY;
    },
    //------------
    toggleFavourite(book) {
      book.isFavourite = !book.isFavourite;
    },
    toggleFilteredBooks() {
      this.filteredBooksEn = !this.filteredBooksEn;
    },
  },

  computed: {
    filteredBooks() {
      return this.listOfBooks.filter(book => book.isFavourite);
    },
  },
});

const vueSection2 = Vue.createApp({
  data() {
    return {
      showSection2: false,
      text: 'This area belongs to vue section 2',
    };
  },
});

vueSection1.mount('#vueSection1');
vueSection2.mount('#vueSection2');
