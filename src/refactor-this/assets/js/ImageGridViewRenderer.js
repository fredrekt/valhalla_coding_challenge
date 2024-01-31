function ImageGridViewRenderer() {}

ImageGridViewRenderer.prototype.render = function () {
  const nav = `
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Photo Sharing App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link ${window.location.search.includes('?nature') ? 'active' : ''}" href="?nature">Nature <span class="sr-only">(current)</span></a>
          <a class="nav-link ${window.location.search.includes('?architecture') ? 'active' : ''}" href="?architecture">Architecture</a>
          <a class="nav-link ${window.location.search.includes('?fashion') ? 'active' : ''}" href="?fashion">Fashion</a>
        </div>
      </div>
    </nav>`;

  document.getElementById("main-view").innerHTML = nav

  var page = 1
  if (window.location.search.includes('page')) {
    page = Number(window.location.search.split('page=')[1])
  }

  if (window.location.search.includes('?nature')) {
    // Nature page
    const containerId = 'nature-images'
    document.getElementById("main-view").innerHTML += generateGridContainerImage(containerId);
    ImageDataGetter.getNatureImagesFromPage((page * 3) - 2)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById(containerId).innerHTML += generateGridImages(images[i])
        }
      })
    ImageDataGetter.getNatureImagesFromPage((page * 3) - 1)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById(containerId).innerHTML += generateGridImages(images[i])
        }
      })
    ImageDataGetter.getNatureImagesFromPage(page * 3)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById(containerId).innerHTML += generateGridImages(images[i])
        }
      })
  } else if (window.location.search.includes('?architecture')) {
    // Architecture page
    const containerId = "architecture-images";
    document.getElementById("main-view").innerHTML += generateGridContainerImage(containerId);
    ImageDataGetter.getArchitectureImagesFromPage((page * 3) - 2)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById(containerId).innerHTML += generateGridImages(images[i])
        }
      })
    ImageDataGetter.getArchitectureImagesFromPage((page * 3) - 1)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById(containerId).innerHTML += generateGridImages(images[i])
        }
      })
    ImageDataGetter.getArchitectureImagesFromPage(page * 3)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById(containerId).innerHTML += generateGridImages(images[i])
        }
      })
  } else if (window.location.search.includes('?fashion')) {
    // Fashion page
    const containerId = "fashion-images";
    document.getElementById("main-view").innerHTML += generateGridContainerImage(containerId);
    ImageDataGetter.getFashionImagesFromPage((page * 3) - 2)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById(containerId).innerHTML += generateGridImages(images[i])
        }
      })
    ImageDataGetter.getFashionImagesFromPage((page * 3) - 1)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById(containerId).innerHTML += generateGridImages(images[i])
        }
      })
    ImageDataGetter.getFashionImagesFromPage(page * 3)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById(containerId).innerHTML += generateGridImages(images[i])
        }
      })
  } else {
    // Default/Homepage
    const containerId = "default-images";
    document.getElementById("main-view").innerHTML += generateGridContainerImage(containerId);
    ImageDataGetter.getFashionImagesFromPage((page * 3) - 2)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById(containerId).innerHTML += generateGridImages(images[i])
        }
      })
    ImageDataGetter.getArchitectureImagesFromPage((page * 3) - 1)
    .then(function (images) {
      for (var i = 0; i < images.length; i++) {
        document.getElementById(containerId).innerHTML += generateGridImages(images[i])
      }
    })
    ImageDataGetter.getNatureImagesFromPage(page * 3)
    .then(function (images) {
      for (var i = 0; i < images.length; i++) {
        document.getElementById(containerId).innerHTML += generateGridImages(images[i])
      }
    })
  }

  function generateGridContainerImage(containerId) {
    return `
      <div class="container">
        <div id="${containerId}" class="row row-cols-3"></div>
      </div>`;
  }

  function generateGridImages(image) {
    return (`
      <div class="col" style="height: 400px; padding: 10px;">
        <img class="image" src="${image.url}" alt="${image.name}" style="height: 100%; object-fit: cover; width: 100%;" />
        <div class="middle">
          <a class="btn btn-dark" href="${image.url}" download="${image.name}">DOWNLOAD</a>
        </div>
      </div>
    `);
  }

  var prevsearchstr = window.location.search.split('&page')[0] + '&page=' + (page - 1)
  var nextsearchstr = window.location.search.split('&page')[0] + '&page=' + (page + 1)
  const pagination = `
  <nav id="pagination-nav" class="container mt-4 px-2">
    <ul class="pagination">
      <li class="page-item"><a title='Previous' class="page-link black-text" href="${prevsearchstr}"><i class="bi bi-arrow-left"></i></a></li>
      <li class="page-item"><a title='Next' class="page-link black-text" href="${nextsearchstr}"><i class="bi bi-arrow-right"></i></a></li>
    </ul>
  </nav>`;

  document.getElementById("main-view").innerHTML += pagination

  const paginationNav = document.getElementById("pagination-nav");
  if (window.location.pathname === '/' && window.location.search === '') {
    paginationNav.style.display = 'none';
  } else {
    paginationNav.style.display = 'block';
  }
}
