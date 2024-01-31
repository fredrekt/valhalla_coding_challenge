const ImageDataGetter = {
  getImages: function (category, page = '') {
    const url = `http://localhost:8888/images?category=${category}&page=${page}`;

    return fetch(url)
      .then(response => response.json())
      .then(result => result);
  },

  getNatureImages: function () {
    return this.getImages('nature');
  },

  getArchitectureImages: function () {
    return this.getImages('architecture');
  },

  getFashionImages: function () {
    return this.getImages('fashion');
  },

  getNatureImagesFromPage: function (page) {
    return this.getImages('nature', page);
  },

  getArchitectureImagesFromPage: function (page) {
    return this.getImages('architecture', page);
  },

  getFashionImagesFromPage: function (page) {
    return this.getImages('fashion', page);
  },
};
