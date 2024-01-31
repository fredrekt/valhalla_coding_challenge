function ImageDataGetter() {}

ImageDataGetter.getImages = function (category, page = '') {
  var images = [];
  var url = `http://localhost:8888/images?category=${category}&page=${page}`;

  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      images = result;
      return images;
    });
};

ImageDataGetter.getNatureImages = function () {
  return ImageDataGetter.getImages('nature');
};

ImageDataGetter.getArchitectureImages = function () {
  return ImageDataGetter.getImages('architecture');
};

ImageDataGetter.getFashionImages = function () {
  return ImageDataGetter.getImages('fashion');
};

ImageDataGetter.getNatureImagesFromPage = function (page) {
  return ImageDataGetter.getImages('nature', page);
};

ImageDataGetter.getArchitectureImagesFromPage = function (page) {
  return ImageDataGetter.getImages('architecture', page);
};

ImageDataGetter.getFashionImagesFromPage = function (page) {
  return ImageDataGetter.getImages('fashion', page);
};